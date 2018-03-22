const fetch = require('isomorphic-unfetch');
const Turndown = require('turndown');
const { sleep } = require('../api/utils');

const turndown = new Turndown();
let coins = [];
if (!process.browser) {
  fetch('https://min-api.cryptocompare.com/data/all/coinlist')
    .then(res => res.json())
    .then((json) => {
      coins = Object.keys(json.Data).map((key) => {
        const coin = json.Data[key];
        return {
          algorithm: coin.Algorithm,
          coinName: coin.CoinName,
          fullName: coin.FullName,
          fullyPremined: coin.FullyPremined,
          id: coin.Id,
          imageUrl: `//www.cryptocompare.com${coin.ImageUrl}`,
          name: coin.Name,
          preMinedValue: coin.PreMinedValue,
          proofType: coin.ProofType,
          sortOrder: coin.SortOrder,
          sponsored: coin.Sponsored,
          symbol: coin.Symbol,
          totalCoinSupply: coin.TotalCoinSupply,
          totalCoinsFreeFloat: coin.TotalCoinsFreeFloat,
          url: `//www.cryptocompare.com${coin.Url}`,
        };
      });
    }).then(() => {
      coins.forEach((coin, idx) => {
        fetch(`https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${coin.id}`)
          .then(res => res.json())
          .then((data) => {
            if (data.Data) {
              const newValue = { ...coin, messages: [] };
              if (data.Data.General) {
                const GENERAL = data.Data.General;
                if (GENERAL.DangerTop) {
                  newValue.messages.push({
                    message: turndown.turndown(GENERAL.DangerTop),
                    type: 'error',
                  });
                }
                if (GENERAL.WarningTop) {
                  newValue.messages.push({
                    message: turndown.turndown(GENERAL.WarningTop),
                    type: 'warning',
                  });
                }
                if (GENERAL.InfoTop) {
                  newValue.messages.push({
                    message: turndown.turndown(GENERAL.InfoTop),
                    type: 'info',
                  });
                }
                newValue.description = turndown.turndown(GENERAL.Description);
                newValue.totalCoinsMined = GENERAL.TotalCoinsMined;
                newValue.netHashesPerSecond = GENERAL.NetHashesPerSecond;
                newValue.previousTotalCoinsMined = GENERAL.PreviousTotalCoinsMined;
                newValue.blockReward = GENERAL.BlockReward;
                newValue.blockTime = GENERAL.BlockTime;
                newValue.blockRewardReduction = GENERAL.BlockRewardReduction;
                newValue.features = turndown.turndown(GENERAL.Features);
                newValue.difficultyAdjustment = GENERAL.DifficultyAdjustment;

                newValue.twitter = GENERAL.Twitter;
              }
              if (data.Data.ICO && data.Data.ICO.Status !== 'N/A') {
                const { ICO } = data.Data.ICO;
                const ico = {};
                ico.blog = turndown.turndown(ICO.Blog);
                ico.blogLink = ICO.BlogLink;
                ico.date = ICO.Date;
                ico.description = turndown.turndown(ICO.Description);
                ico.endDate = ICO.EndDate;
                ico.features = ICO.Features;
                ico.fundingCap = ICO.FundingCap;
                ico.fundingTarget = ICO.FundingTarget;
                ico.fundsRaisedList = ICO.FundsRaisedList;
                ico.fundsRaisedUSD = ICO.FundsRaisedUSD;
                ico.tokenSupply = ICO.ICOTokenSupply;
                ico.jurisdiction = ICO.Jurisdiction;
                ico.legalAdvisers = ICO.LegalAdvisers;
                ico.legalForm = ICO.LegalForm;
                ico.paymentMethod = ICO.PaymentMethod;
                ico.publicPortfolioId = ICO.PublicPortfolioId;
                ico.publicPortfolioUrl = ICO.PublicPortfolioUrl;
                ico.securityAuditCompany = ICO.SecurityAuditCompany;
                ico.startPrice = ICO.StartPrice;
                ico.startPriceCurrency = ICO.StartPriceCurrency;
                ico.status = ICO.Status;
                ico.tokenPercentageForInvestors = ICO.TokenPercentageForInvestors;
                ico.tokenReserveSplit = ICO.TokenReserveSplit;
                ico.tokenSupplyPostICO = ICO.TokenSupplyPostICO;
                ico.tokenType = ICO.TokenType;
                ico.website = turndown.turndown(ICO.Website);
                ico.websiteURL = ICO.WebsiteLink;
                ico.whitePaper = turndown.turndown(ICO.WhitePaper);
                ico.whitePaperLink = ICO.WhitePaperLink;

                newValue.ICO = ico;
              }
              coins[idx] = newValue;
            }
            // console.log(coins[idx]);
            return sleep();
          })
          .catch(() => (sleep()));
      });
    });
  module.exports.coins = () => (coins);
}


import SocketSub from '../socket_sub/SocketSub';


const currentFields = {
  'TYPE': 0x0,
  'MARKET': 0x0,
  'FROMSYMBOL': 0x0,
  'TOSYMBOL': 0x0,
  'FLAGS': 0x0,
  'PRICE': 0x1,
  'BID': 0x2,
  'OFFER': 0x4,
  'LASTUPDATE': 0x8,
  'AVG': 0x10,
  'LASTVOLUME': 0x20,
  'LASTVOLUMETO': 0x40,
  'LASTTRADEID': 0x80,
  'VOLUMEHOUR': 0x100,
  'VOLUMEHOURTO': 0x200,
  'VOLUME24HOUR': 0x400,
  'VOLUME24HOURTO': 0x800,
  'OPENHOUR': 0x1000,
  'HIGHHOUR': 0x2000,
  'LOWHOUR': 0x4000,
  'OPEN24HOUR': 0x8000,
  'HIGH24HOUR': 0x10000,
  'LOW24HOUR': 0x20000,
  'LASTMARKET': 0x40000,
};

function currentUnpack(value) {
  const valuesArray = value.split('~');
  const valuesArrayLenght = valuesArray.length;
  const mask = valuesArray[valuesArrayLenght - 1];
  const maskInt = parseInt(mask, 16);
  const unpackedCurrent = {};
  let currentField = 0;
  Object.keys(currentFields).forEach((property) => {
    if (currentFields[property] === 0) {
      unpackedCurrent[property] = valuesArray[currentField];
      currentField += 1;
    // eslint-disable-next-line no-bitwise
    } else if (maskInt & currentFields[property]) {
      // i know this is a hack, for cccagg, future code please don't hate me:(, i did this to avoid
      // subscribing to trades as well in order to show the last market
      if (property === 'LASTMARKET') {
        unpackedCurrent[property] = valuesArray[currentField];
      } else {
        unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
      }
      currentField += 1;
    }
  });
  return unpackedCurrent;
}

class CryptoComparePrice extends SocketSub {
  unpack = (message) => {
    const messageType = message.substring(0, message.indexOf('~'));
    if (messageType === '5' || messageType === '2') {
      const data = currentUnpack(message);
      if (data.PRICE) {
        return {
          symbol: data.FROMSYMBOL, toSymbol: data.TOSYMBOL, exchange: data.MARKET, data,
        };
      }
    }
    return null;
  };
  subKey = data => `${data.symbol}-${data.toSymbol}${data.exchange}`;
}
const socketSub = new CryptoComparePrice('https://streamer.cryptocompare.com/');

const code = exchange => (exchange === 'CCCAGG' ? 5 : 2);

export function subscribeLastPrices(sub) {
  const {
    symbol, toSymbol, callback, exchange = 'CCCAGG',
  } = sub;
  socketSub.subscribe(
    {
      name: 'SubAdd',
      payload: { subs: [`${code(exchange)}~${exchange}~${symbol}~${toSymbol}`] },
      data: sub,
    },
    'm', callback
  );
}

export function unSubscribeLastPrices(sub) {
  const {
    symbol, toSymbol, callback, exchange = 'CCCAGG',
  } = sub;
  socketSub.unSubscribe('SubRemove',
    {
      name: 'SubAdd',
      payload: { subs: [`${code(exchange)}~${exchange}~${symbol}~${toSymbol}`] },
      data: sub,
    },
    callback);
}

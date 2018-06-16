import { Box, Heading, Text, Image, Paragraph, Button } from 'grommet';
import { Bitcoin, Close, Edit, Add } from 'grommet-icons';
import { Card, ImageStamp } from 'grommet-controls';
import doc, { docCardActions, docCardTitle, docCardSubTitle, docCardContent } from 'grommet-controls/components/Card/doc';
import { CardActions, CardTitle, CardSubTitle, CardContent } from 'grommet-controls/components/Card';
import Doc from '../../components/Doc';

const desc = doc(Card).toJSON();
const descCardActions = docCardActions(CardActions).toJSON();
const descCardTitle = docCardTitle(CardTitle).toJSON();
const descCardSubTitle = docCardSubTitle(CardSubTitle).toJSON();
const descCardContent = docCardContent(CardContent).toJSON();

const actions = [
  {
    label: 'Edit',
    icon: <Edit />,
    onClick: () => {},
  }, {
    label: 'New',
    icon: <Add />,
    onClick: () => {},
  },
];
export default class CardDoc extends React.Component {
  state = { flipped: false, flippedInitial: true, flippedOnFlip: false };
  render() {
    const { flipped, flippedInitial, flippedOnFlip } = this.state;
    return (
      <Box>
        <Doc
          name='Card'
          desc={desc}
          footer={false}
          example={(
            <Box >
              <Card
                backContent={(
                  <Paragraph>
  Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
  error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
  tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
  nonumes adipiscing, suas vivendo epicurei eos no. Novum tractatos sapientem est ut, justo epicurei
  eos te, est cu magna mundi labore. Quo ei aeterno percipitur, quot oporteat perfecto duo eu.
  Vis atomorum voluptaria ut, quo vocent persius detraxit ex, an dicit splendide dissentias eos. Ius
  id quas iracundia conclusionemque, aperiri habemus adversarium te vis, suas appellantur ex sit.
  Mea euismod pericula ea, ius suscipit apeirian torquatos id, mel choro accusamus no. Vix eu
  voluptua luptatum scripserit, et est posse minim timeam. Ludus timeam laboramus ea eos. Vero
  persius vix ex, in sed liber dignissim, ex nemore molestie sea. Pri exerci prompta verterem ne,
  fabulas apeirian disputando has at. At sed bonorum referrentur, solet legere abhorreant mea te,
  ei feugait verterem percipitur his. Ne iisque docendi has, qui similique sententiae ad.
                  </Paragraph>
                )}
              >
                <CardTitle border='bottom'>
                  <ImageStamp round='full' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
                  <Heading level={3} margin='xsmall'>Info card</Heading>
                </CardTitle>
                <CardSubTitle>
                  <Bitcoin color='plain' />
                  <Text>sub-title info</Text>
                </CardSubTitle>
                <CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
                <CardActions justify='center'>
                  {actions.map((action, index) => (<Button key={`actions_${index}`} label={action.label} onClick={action.onClick} />))}
                </CardActions>

              </Card>
            </Box>
          )}
          examples={{
            animation: (
              <Card animation={{ type: 'zoomIn', duration: 5000, size: 'xlarge' }} >
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle border='bottom' strong={false}>
                  sub-title
                </CardSubTitle>
                <CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
              </Card>
            ),
            background: (
              <Card background='accent-1' size={{ width: 'medium', height: 'small' }} >
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle strong={false}>
                  sub-title
                </CardSubTitle>
                Some content
              </Card>
            ),
            border: (
              <Card border={{ color: 'brand', size: 'medium' }} size={{ width: 'medium', height: 'small' }}>
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle strong={false}>
                  sub-title
                </CardSubTitle>
                Card content
              </Card>
            ),
            elevation: (
              <Card elevation='large' size={{ width: 'medium', height: 'small' }}>
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle strong={false}>
                  sub-title
                </CardSubTitle>
                <Box>
                  Card content
                </Box>
              </Card>
            ),
            flipped: (
              <Card
                flipped={flippedInitial}
                flipOnHover={false}
                backContent={(
                  <Box>
                    <Button
                      onClick={() => { this.setState({ flippedInitial: false }); }}
                      icon={<Close />}
                    />
                    <Paragraph>
    Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
    error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
    tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                    </Paragraph>
                  </Box>
                )}
              >
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle strong={false}>
                  sub-title
                </CardSubTitle>
                <CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
                <CardActions>
                  <Button label='Flip' onClick={() => { this.setState({ flippedInitial: true }); }} />
                </CardActions>

              </Card>
            ),
            flipOnHover: (
              <Card
                flipped={flipped}
                flipOnHover={false}
                backContent={(
                  <Box>
                    <Button
                      onClick={() => { this.setState({ flipped: false }); }}
                      icon={<Close />}
                    />
                    <Paragraph>
    Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
    error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
    tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                    </Paragraph>
                  </Box>
                )}
              >
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle strong={false}>
                  sub-title
                </CardSubTitle>
                <CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
                <CardActions>
                  <Button label='Flip' onClick={() => { this.setState({ flipped: true }); }} />
                </CardActions>

              </Card>
            ),

            flipDuration: (
              <Card
                flipDuration={1}
                backContent={(
                  <Paragraph>
  Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
  error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
  tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                  </Paragraph>
                )}
              >
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle>
                  sub-title
                </CardSubTitle>
                <CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
              </Card>
            ),
            gap: (
              <Card gap='medium' size={{ width: 'medium', height: 'small' }}>
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle>
                  sub-title
                </CardSubTitle>
                Some content
              </Card>
            ),
            onFlip: (
              <Card
                flipped={flippedOnFlip}
                flipOnHover={false}
                onFlip={(isFlipped) => { alert(isFlipped ? 'Flipped' : 'Not flipped'); }}
                backContent={(
                  <Box>
                    <Button
                      onClick={() => { this.setState({ flippedOnFlip: false }); }}
                      icon={<Close />}
                    />
                    <Paragraph>
    Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
    error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
    tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                    </Paragraph>
                  </Box>
                )}
              >
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle strong={false}>
                  sub-title
                </CardSubTitle>
                <CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
                <CardActions>
                  <Button label='Flip' onClick={() => { this.setState({ flippedOnFlip: true }); }} />
                </CardActions>

              </Card>
            ),
            pad: (
              <Card pad='medium' size={{ width: 'medium', height: 'small' }}>
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle>
                  sub-title
                </CardSubTitle>
                <CardContent>
                  Card content
                </CardContent>
              </Card>
            ),
            round: (
              <Card round='medium' size={{ width: 'medium', height: 'small' }}>
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle>
                  sub-title
                </CardSubTitle>
                <CardContent>
                  Card content
                </CardContent>
              </Card>
            ),

            size: (
              <Card size={{ height: 'medium', width: 'medium' }}>
                <CardTitle border='bottom'>
                  Card
                </CardTitle>
                <CardSubTitle strong={false}>
                  sub-title
                </CardSubTitle>
                <CardContent>
                  <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
              </Card>
            ),
          }}
        />
        <Doc
          name='CardTitle'
          desc={descCardTitle}
          nav={false}
          footer={false}
          examples={{
            children: (
              <Card>
                <Box pad='small'>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </Box>
                <CardTitle>
                  Card
                </CardTitle>
              </Card>
            ),
          }}
        />
        <Doc
          name='CardSubTitle'
          desc={descCardSubTitle}
          nav={false}
          footer={false}
          examples={{
            children: (
              <Card>
                <CardContent pad='small'>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
                <CardSubTitle color='brand'>
                  sub title
                </CardSubTitle>
              </Card>
            ),
          }}
        />
        <Doc
          name='CardContent'
          desc={descCardContent}
          nav={false}
          footer={false}
          examples={{
            children: (
              <Card>
                <CardContent pad='small'>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
                <CardTitle>
                  Card
                </CardTitle>
              </Card>
            ),
          }}
        />
        <Doc
          name='CardActions'
          desc={descCardActions}
          nav={false}
          examples={{
            children: (
              <Card>
                <CardContent pad='small'>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </CardContent>
                <CardTitle>
                  Card
                </CardTitle>
                <CardActions justify='center'>
                  {actions.map((action, index) => (<Button key={`actions_${index}`} label={action.label} onClick={action.onClick} />))}
                </CardActions>

              </Card>
            ),
          }}
        />
      </Box>
    );
  }
}

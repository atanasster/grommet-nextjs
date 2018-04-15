import { Box } from 'grommet';
import { ImageStamp } from 'grommet-controls';
import doc from 'grommet-controls/components/ImageStamp/doc';
import Doc from '../../components/Doc';

const desc = doc(ImageStamp).toJSON();

export default class ImageStampDoc extends React.Component {
  render() {
    return (
      <Doc
        name='ImageStamp'
        desc={desc}
        example={
          <Box direction='row'>
            <Box basis='medium'>
              <ImageStamp
                src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
                size='xlarge'
                round='medium'
              />
            </Box>
          </Box>
        }
        examples={{
           size: (
             <Box >
               {['small', 'medium', 'large', 'xlarge', 'xxlarge'].map(size => (
                 <ImageStamp
                   src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
                   key={`size_${size}`}
                   size={size}
                 />))
               }
             </Box>
           ),
           round: (
             <Box >
               {['xsmall', 'small', 'medium', 'large', 'full'].map(round => (
                 <ImageStamp
                   src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
                   key={`round_${round}`}
                   round={round}
                   size='large'
                 />))
               }
             </Box>
           ),

        }}
      />
    );
  }
}

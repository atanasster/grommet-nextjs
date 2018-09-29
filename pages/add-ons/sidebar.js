import React from 'react';
import { Box, Text } from 'grommet';
import { Sidebar } from 'grommet-controls';
import doc from 'grommet-controls/components/Sidebar/doc';
import Doc from '../../components/Doc';

const desc = doc(Sidebar).toJSON();


const SidebarExample = props => (
  <Box pad='small'>
    <Sidebar
      title='My title'
      border={{ size: 'small' }}
      width='small'
      basis='small'
      {...props}
    >
      <Box pad='small'>
        <Text>Side item</Text>
      </Box>
    </Sidebar>
  </Box>
);

export default class SidebarDoc extends React.Component {
  render() {
    return (
      <Doc
        name='Sidebar'
        desc={desc}
        example={<SidebarExample />}
        examples={{
          title: (
            <SidebarExample
              title='New title'
            />
          ),
          width: (
            <SidebarExample width='medium' />
          ),
          collapsible: (
            <SidebarExample collapsible={false} />
          ),
        }}
      />
    );
  }
}

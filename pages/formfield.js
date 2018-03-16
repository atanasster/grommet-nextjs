import React, { Component } from 'react';

import { Box, FormField, TextInput } from 'grommet';
import doc from 'grommet/components/FormField/doc';

import Doc from '../components/Doc';

const desc = doc(FormField).toJSON();

class FormFieldDoc extends Component {
  render() {
    return (
      <Doc
        name='FormField'
        desc={desc}
        examples={{
          border: (
            <Box gap='small'>
              <FormField
                label='Name'
                border={{ position: 'inner', size: 'small', color: 'brand' }}
              >
                <TextInput placeholder='inner small brand' />
              </FormField>
              <FormField
                label='Name'
                border={{ position: 'outer', side: 'all', size: 'small' }}
              >
                <TextInput placeholder='outer all small' />
              </FormField>
            </Box>
          ),
          error: <FormField error='error'><TextInput /></FormField>,
          help: <FormField help='help'><TextInput /></FormField>,
          label: <FormField label='label'><TextInput /></FormField>,
        }}
      />
    );
  }
}

export default FormFieldDoc;

import React, { Component } from 'react';
import { Box, Button, Text } from 'grommet';
import { Form } from 'grommet-controls';
import { TextInputField, PasswordInputField, SelectField, CheckBoxField, NumberInputField } from 'grommet-controls/components/Form/Fields';
import { validators } from 'grommet-controls/components/Form/validators';
import doc from 'grommet-controls/components/Form/doc';
import Doc from '../../components/Doc';

const desc = doc(Form).toJSON();

export default class FormDoc extends Component {
  state = {
    changedValue: '',
    invalid: false,
  }
  render() {
    const { changedValue, invalid } = this.state;
    return (
      <Doc
        name='Form'
        desc={desc}
        example={
          <Box direction='row' fill='horizontal'>
            <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} >
              <PasswordInputField label='Password' name='password' validation={[validators.required(), validators.minLength(8), validators.alphaNumeric()]} />
              <PasswordInputField label='Confirm Password' name='password1' validation={[validators.equalsField('password', 'the above password')]} />
              <TextInputField label='URL' name='url' validation={[validators.required(), validators.url()]} />
              <SelectField name='gender' options={['male', 'female']} validation={[validators.required()]} />
              <CheckBoxField name='tos' label='Terms of service' validation={[validators.required(), validators.True('Please accept the TOS')]} />
              <NumberInputField min={6} max={22} name='age' label='Age' validation={[validators.required(), validators.numeric(), validators.bigger(10), validators.smallerOrEqual(18)]} />
              <Box pad='small'>
                <Button type='submit' label='Submit' />
              </Box>
            </Form>
          </Box>
        }
        examples={{
          onSubmit: (
            <Box pad='small' >
              <Form focusFirstChild={false} onSubmit={values => alert(JSON.stringify(values))} basis='small'>
                <TextInputField label='Text' name='fieldname' />
              </Form>
            </Box>
          ),
          onChange: (
            <Box pad='small' >
              <Form
                focusFirstChild={false}
                onChange={({ target: { value } }) => this.setState({ changedValue: value })}
                basis='small'
              >
                <TextInputField label='Text' name='onchange' />
              </Form>
              <Text size='small'>
                {changedValue}
              </Text>
            </Box>
          ),
          onSubmitError: (
            <Box pad='small' >
              <Form
                focusFirstChild={false}
                onSubmit={values => alert(JSON.stringify(values))}
                onSubmitError={errors => alert(JSON.stringify(errors))}
                basis='small'
              >
                <TextInputField label='Text' name='errofield' validation={[validators.required(), validators.minLength(8)]} />
              </Form>
            </Box>
          ),
          onInvalidForm: (
            <Box pad='small' >
              <Form
                focusFirstChild={false}
                onSubmit={values => alert(JSON.stringify(values))}
                onInvalidForm={error => this.setState({ invalid: error })}
                basis='small'
              >
                <TextInputField label='Text' name='invalidfield' validation={[validators.required(), validators.minLength(8)]} />
              </Form>
              <Text size='small'>
                {invalid ? 'invalid' : 'valid'}
              </Text>
            </Box>

          ),
        }}
      />
    );
  }
}

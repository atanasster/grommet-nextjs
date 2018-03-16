import React, { Component } from 'react';
import { Box, Button, Text } from 'grommet';
import { Form, TextInputField, PasswordInputField, SelectField, CheckBoxField, NumberInputField, validators } from 'grommet-controls';
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
            <Form onSubmit={values => alert(JSON.stringify(values))} pad={{ horizontal: 'small' }} basis='small' >
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
            <Form focusFirstChild={false} onSubmit={values => alert(JSON.stringify(values))}>
              <TextInputField label='Text' name='fieldname' />
            </Form>
          ),
          onChange: (
            <Box pad='small' >
              <Form
                focusFirstChild={false}
                onChange={({ target: { value } }) => this.setState({ changedValue: value })}
              >
                <TextInputField label='Text' name='onchange' />
              </Form>
              <Text size='small'>
                {changedValue}
              </Text>
            </Box>
          ),
          onSubmitError: (
            <Form
              focusFirstChild={false}
              onSubmit={values => alert(JSON.stringify(values))}
              onSubmitError={errors => alert(JSON.stringify(errors))}
            >
              <TextInputField label='Text' name='errofield' validation={[validators.required(), validators.minLength(8)]} />
            </Form>
          ),
          onInvalidForm: (
            <Box pad='small' >
              <Form
                focusFirstChild={false}
                onSubmit={values => alert(JSON.stringify(values))}
                onInvalidForm={error => this.setState({ invalid: error })}
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

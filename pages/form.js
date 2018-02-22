import { Box, Button, CheckBox, Heading, Select, Text, TextInput } from 'grommet';

import Form from 'react-formify';

import Doc from '../components/Doc';

const Field = ({
  children, error, label, help, ...rest
}) => {
  let header;
  if (label || help || error) {
    header = (
      <Box
        direction='row'
        justify='between'
        pad={{ horizontal: 'small', top: 'xsmall' }}
        {...rest}
      >
        <Text>{label}</Text>
        <Text color={error ? 'status-critical' : 'dark-5'}>{error || help}</Text>
      </Box>
    );
  }
  return (
    <Box
      direction='column'
      border={{ color: 'light-2', side: 'bottom', size: 'small' }}
      margin={{ vertical: 'xsmall' }}
    >
      {header}
      {children}
    </Box>
  );
};

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function deepMerge(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  // making sure to not change target (immutable)
  const output = { ...target };
  const source = sources.shift();
  if (isObject(output) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!output[key]) {
          output[key] = { ...source[key] };
        } else {
          output[key] = deepMerge({}, output[key], source[key]);
        }
      } else {
        output[key] = source[key];
      }
    });
  }
  return deepMerge(output, ...sources);
}

const emailExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userRules = (user) => {
  const defaultValidation = {
    email: (value) => {
      if (!value || value === '') {
        return 'Email is required';
      } else if (!emailExpression.test(value)) {
        return 'Email is not valid';
      }
      return undefined;
    },
    name: 'Name is required',
    size: 'Size is required',
    confirm: 'Please confirm answers',
    address: {
      home: {
        street: 'Street is required',
      },
    },
  };
  if (
    user.address &&
    user.address.home &&
    user.address.home.street &&
    user.address.home.street !== ''
  ) {
    return deepMerge(defaultValidation, {
      address: {
        city: 'City is required if you provided street',
      },
    });
  }
  return defaultValidation;
};

export default class FormDoc extends React.Component {
  render() {
    const text = `Grommet 2.0 does not provide Form or FormField components.
      Instead, we have a reference on how to build a form
      using the basic Box, Text, and control components.`;
    return (
      <Doc
        name='Form'
        text={text}
      >
        <Box direction='row' justify='center'>
          <Box basis='medium' margin={{ bottom: 'large' }}>
            <Form
              rules={userRules}
              defaultErrors={{ email: 'This is an existing email' }}
              defaultValue={{ size: 'medium', email: 'alan@gmail.com' }}
              onSubmit={user => alert(JSON.stringify(user, null, 2))}
            >
              {(state, errors) => (
                <Box>
                  <Heading level={2}>Add user</Heading>
                  <Text margin={{ bottom: 'small' }}>
                    All fields are required and your email must be unique.
                  </Text>
                  <Field label='Name' help='Full name preferred' error={errors.name}>
                    <TextInput plain={true} {...state.name} />
                  </Field>
                  <Field label='Email' error={errors.email}>
                    <TextInput type='email' plain={true} {...state.email} />
                  </Field>
                  <Field
                    label='Street'
                    error={errors.get('address.home.street')}
                  >
                    <TextInput plain={true} {...state.address.home.street} />
                  </Field>
                  <Field
                    label='City'
                    error={errors.get('address.city')}
                  >
                    <TextInput plain={true} {...state.get('address.city')} />
                  </Field>
                  <Field label='T-shirt Size' error={errors.size}>
                    <Select
                      a11yTitle='Open Size Select'
                      placeholder='Select Size'
                      options={['small', 'medium', 'large', 'xlarge', 'xxlarge']}
                      plain={true}
                      {...state.get('size')}
                    />
                  </Field>
                  <Field justify='start' error={errors.confirm}>
                    <Box pad='small'>
                      <CheckBox
                        label='I confirm I provided the truth nothing but the truth'
                        {...state.confirm}
                      />
                    </Box>
                  </Field>
                  <Box margin={{ top: 'large' }}>
                    <Button primary={true} type='submit' label='Submit' />
                  </Box>
                </Box>
              )}
            </Form>
          </Box>
        </Box>
      </Doc>
    );
  }
}

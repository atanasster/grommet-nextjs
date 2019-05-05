export const validation = `const Demo = () => (
  <Form
    onSubmit={values => alert(JSON.stringify(values))}
    pad={{ horizontal: 'small' }}
    focusFirstChild={false}
  >
    <DateInputField
      name='date'
      label='Date'
      validation={[
        validators.required(),
        (values, value) => {
          if (value) {
            const date = new Date(value);
            if (date >= new Date('01/01/2000')) {
              return 'date must be before 01/01/2000'; 
            }
          }  
          return undefined;         
        },
      ]}
    />
    <Box pad='small'>
      <Button type='submit' label='Submit' />
    </Box>
  </Form>
);

render(<Demo />);  
`;

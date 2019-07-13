export const maskFormat = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { form: { date: smallDate(new Date(), 'es-ES') }}
  }
  render() {
    const { form } = this.state;
    return (
      <Form
        onSubmit={values => alert(JSON.stringify(values))}
        pad={{ horizontal: 'small' }}
        focusFirstChild={false}
        object={form}
      >
        <DateInputField
          name='date'
          autocorrect={true}
          maskFormat='dd mm yyyy'
          locale='es-ES'
          label='Ingreso'
          validation={[validators.required('Seleccione fecha de ingreso')]}
        />
        <Box pad='small'>
          <Button type='submit' label='Submit' />
        </Box>
      </Form>
    );
  }
}             

render(<Demo />);  
`;

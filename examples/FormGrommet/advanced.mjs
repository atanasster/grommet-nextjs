// eslint-disable-next-line no-underscore-dangle
export const advanced = `
const RadioButtonGroup = ({ name, onChange, options, value }) => (
  <Box gap="small">
    {options.map(option => (
      <Box key={option}>
        <RadioButton
          name={name}
          value={option}
          label={option}
          checked={value === option}
          onChange={() => onChange({ value: option })}
        />
      </Box>
    ))}
  </Box>
);

const Demo = () => (
  <GrommetForm onSubmit={({ value }) => console.log("Submit", value)}>
    <FormField
      label="Name"
      name="name"
      required
      validate={{ regexp: /^[a-z]/i }}
    />
    <FormField label="Email" name="email" type="email" required />
    <FormField
      label="Employee ID"
      name="employeeId"
      required
      validate={{ regexp: /^[0-9]{4,6}$/, message: "4-6 digits" }}
    />
    <FormField
      name="subscribe"
      component={CheckBox}
      pad
      label="Subscribe?"
    />
    <FormField
      name="ampm"
      component={RadioButtonGroup}
      pad
      options={["morning", "evening"]}
    />
    <FormField
      label="Size"
      name="size"
      component={Select}
      options={["small", "medium", "large", "xlarge"]}
    />
    <FormField label="Comments" name="comments" component={TextArea} />
    <FormField
      label="Age"
      name="age"
      component={RangeInput}
      pad
      min={15}
      max={75}
    />
    <Box direction="row" justify="between" margin={{ top: "medium" }}>
      <Button label="Cancel" />
      <Button type="submit" label="Update" primary />
    </Box>
  </GrommetForm>
);

render(<Demo />);  
`;

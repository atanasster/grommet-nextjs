// eslint-disable-next-line no-underscore-dangle
export const _starter = `

const Demo = () => (
  <GrommetForm onSubmit={({ value }) => console.log("Submit", value)}>
    <FormField
      label="Name"
      name="name"
      required
      validate={{ regexp: /^[a-z]/i }}
    />
    <Box direction="row" justify="between" margin={{ top: "medium" }}>
      <Button label="Cancel" />
      <Button type="submit" label="Update" primary />
    </Box>
  </GrommetForm>
);

render(<Demo />);  
`;

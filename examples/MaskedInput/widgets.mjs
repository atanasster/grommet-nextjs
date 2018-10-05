export const widgets = `class Demo extends React.Component {
  constructor() {
    super();
    this.state = { number: 18933 }
  }
  render() {
    const { number } = this.state;
    return (  
      <MaskedInput
        mask={MaskedInput.createNumberMask({ allowDecimal: true })}
        value={number}
        onChange={({ target: { value } }) => this.setState({ number: value })}
        widgets={[
          { icon: <Icons.Add />, onClick: () => this.setState({ number: number + 1 }) },
          { icon: <Icons.Subtract />, onClick: () => this.setState({ number: number - 1 }) },
        ]}
      />
    );
  }
}         

render(<Demo />);  
`;

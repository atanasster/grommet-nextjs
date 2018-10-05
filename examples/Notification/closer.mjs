export const closer = `const Demo = () => (
  <Notification
    status='disabled'
    message='Custom closer'
    closer={<Icons.CircleQuestion />}
    size='small'
    onClose={() => {}}
  />
);

render(<Demo />);  
`;

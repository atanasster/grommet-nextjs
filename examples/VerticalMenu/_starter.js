// eslint-disable-next-line no-underscore-dangle
export const _starter = `const Demo = () => (
  <VerticalMenu
    activeItem={{ id: 'c_drive' }}
    items={[
      {
        id: 'local',
        label: 'Local',
        items: [
          { id: 'c_drive' , href: '/c_drive', label: 'C: drive' },
          { id: 'f_drive' , onClick: () => alert('Clicked F drive'), label: 'F: drive' },
        ],
      },
      {
        id: 'cloud',
        label: 'Cloud',
        items: [
          { id: 'drop_box' , href: '/drop_box', label: 'DropBox' },
          { id: 'google_drive' , onClick: () => alert('Clicked Google drive'), label: 'Google drive' },
        ],
        
      },
    ]}
  />  
);

render(<Demo />);  
`;

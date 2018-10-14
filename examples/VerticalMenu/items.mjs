export const items = `const Badge = ({ label, background = 'light-3' }) => (
  <Box
    background={background}
    pad={{ horizontal: 'small' }}
    border='all'
    style={{ borderRadius: '20%' }}
  >
    <Text size='small'>
      {label}
    </Text>
  </Box>
);

const Demo = () => (
  <VerticalMenu
    activeItem={{ id: 'all' }}
    items={[
      {
        id: 'inbox',
        label: 'Inbox',
        icon: <Icons.Inbox />,
        expanded: true,
        items: [
          {
            id: 'all',
            href: '/inbox/all',
            label: 'All',
            widget: <Badge label='10' />,
          },
          {
            id: 'gmail',
            href: '/inbox/gmail',
            label: 'GMail',
            widget: <Badge label='8' />,
          },
          {
            id: 'work',
            href: '/inbox/work',
            label: 'Work',
            widget: <Badge label='1' />,
          },
          {
            id: 'amazon',
            href: '/inbox/amazon',
            label: 'Amazon',
            widget: <Badge label='1' />,
          },
        ],
      },
      {
        id: 'sent',
        href: '/inbox/sent',
        label: 'Sent',
        icon: <Icons.Send />,
      },
      {
        id: 'flagged',
        href: '/inbox/flagged',
        label: 'Flagged',
        icon: <Icons.Flag />,
        widget: <Badge label='3' background='accent-1' />,
      },
      {
        id: 'starred',
        href: '/inbox/starred',
        label: 'Starred',
        icon: <Icons.Star />,
      },
      {
        id: 'drafts',
        href: '/inbox/drafts',
        label: 'Drafts',
        icon: <Icons.Document />,
      },
      {
        id: 'tagged',
        href: '/inbox/tagged',
        label: 'Tagged',
        icon: <Icons.Tag />,
      },
      {
        id: 'trash',
        href: '/inbox/trash',
        label: 'Trash',
        icon: <Icons.Trash />,
      },
    ]}
  />
);

render(<Demo />);  
`;

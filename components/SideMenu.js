import React from 'react';
import { withRouter } from 'next/router';
import 'isomorphic-fetch';
import { Box, Button } from 'grommet';
import { Sidebar, VerticalMenu } from 'grommet-controls';
import RoutedButton from './RoutedButton';

const menuItems = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
  },
  {
    id: 'get_started',
    label: 'Get started',
    items: [
      {
        id: 'installation',
        path: '/installation',
        label: 'Installation',
      },
      {
        id: 'get_started',
        path: '/get-started',
        label: 'Get started',
      },
      {
        id: 'tree_shaking',
        path: '/tree-shaking',
        label: 'Tree shaking',
      },
      {
        id: 'page_templates',
        path: '/page-templates',
        label: 'Page templates',
      },
      {
        id: 'new-react-app-cra',
        path: '/new-react-app-cra',
        label: 'New app with CRA',
      },
      {
        id: 'existing-react-app',
        path: '/existing-react-app',
        label: 'Existing app',
      },
    ],
  },
  {
    id: 'style',
    label: 'Style',
    items: [
      {
        id: 'typography',
        path: '/typography',
        label: 'Typography',
      },
      {
        id: 'colors',
        path: '/colors',
        label: 'Colors',
      },
      {
        id: 'design-kit',
        path: '/design-kit',
        label: 'Design kit',
      },
      {
        id: 'icons',
        path: '/icons',
        label: 'Grommet icons',
      },
      {
        id: 'material_icons',
        path: '/material-icons',
        label: 'Material icons',
      },
      {
        id: 'theme_intro',
        path: '/theming-intro',
        label: 'Grommet theming',
      },
      {
        id: 'theme',
        path: '/theme',
        label: 'Theme designer',
      },
    ],
  },
  {
    id: 'grommet',
    path: '/grommet',
    label: 'Grommet',
  },
  {
    id: 'grommet-controls',
    path: '/add-ons',
    label: 'Grommet controls',
  },
  {
    id: 'component_examples',
    path: '/examples',
    label: 'Examples',
  },
  {
    id: 'grommet-sites',
    path: '/sites',
    label: 'Grommet sites',
  },

];

class SideMenu extends React.Component {
  state = {
    grommet: {},
    grommetControls: {},
  }
  componentDidMount() {
    fetch('/api/package/grommet/latest')
      .then(res => res.json())
      .then(res => this.setState({ grommet: res }));
    fetch('/api/package/grommet-controls/latest')
      .then(res => res.json())
      .then(res => this.setState({ grommetControls: res }));
  }

  render() {
    const { router } = this.props;
    const { grommet, grommetControls } = this.state;
    menuItems.find(item => item.id === 'grommet').widget = grommet.version;
    menuItems.find(item => item.id === 'grommet-controls').widget = grommetControls.version;
    const findPath = (items) => {
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        if (item.items) {
          const found = findPath(item.items);
          if (found) {
            return found;
          }
        } else if (item.path === router.pathname) {
          return item;
        }
      }
      return undefined;
    };
    const activeItem = findPath(menuItems);
    return (
      <Box background='brand'>
        <Sidebar
          width='250px'
          flex={false}

        >
          <Box overflow='auto'>
            <VerticalMenu
              activeItem={activeItem}
              buttonClass={RoutedButton}
              items={menuItems}
            >
              <Box pad='medium' flex={false} full='horizontal'>
                <Button
                  primary={true}
                  label='Compose new email'
                  onClick={() => alert('New email')}
                />
              </Box>
            </VerticalMenu>
          </Box>
        </Sidebar>
      </Box>
    );
  }
}

export default withRouter(SideMenu);

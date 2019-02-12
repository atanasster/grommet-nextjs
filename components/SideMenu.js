import React from 'react';
import { withRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import 'isomorphic-fetch';
import { Box, Button, Select, FormField } from 'grommet';
import { Sidebar, VerticalMenu } from 'grommet-controls';
import RoutedButton from './RoutedButton';
import { queryParams } from './nextjs/urlParams';
import connect from '../redux';
import { selectTheme } from '../redux/themes/actions';


const menuItems = [
  {
    id: 'home',
    path: '/',
    label: 'home',
  },
  {
    id: 'get_started',
    label: 'get started',
    items: [
      {
        id: 'installation',
        path: '/installation',
        label: 'installation',
      },
      {
        id: 'get_started_page',
        path: '/get-started',
        label: 'get started',
      },
      {
        id: 'tree_shaking',
        path: '/tree-shaking',
        label: 'tree shaking',
      },
      {
        id: 'page_templates',
        path: '/page-templates',
        label: 'page templates',
      },
      {
        id: 'new-react-app-cra',
        path: '/new-react-app-cra',
        label: 'create-react-app',
      },
      {
        id: 'nextjs-app',
        path: '/nextjs',
        label: 'nextjs',
      },
      {
        id: 'gatsby-app',
        path: '/gatsby',
        label: 'gatsby',
      },
      {
        id: 'existing-react-app',
        path: '/existing-react-app',
        label: 'existing app',
      },
    ],
  },
  {
    id: 'style',
    label: 'style',
    items: [
      {
        id: 'typography',
        path: '/typography',
        label: 'typography',
      },
      {
        id: 'colors',
        path: '/colors',
        label: 'colors',
      },
      {
        id: 'design-kit',
        path: '/design-kit',
        label: 'design kit',
      },
      {
        id: 'icons',
        path: '/icons',
        label: 'grommet icons',
      },
      {
        id: 'material_icons',
        path: '/material-icons',
        label: 'material icons',
      },
      {
        id: 'theme_intro',
        path: '/theming-intro',
        label: 'grommet theming',
      },
      {
        id: 'theme',
        path: '/theme',
        label: 'theme designer',
      },
    ],
  },
  {
    id: 'grommet',
    path: '/grommet',
    label: 'grommet',
  },
  {
    id: 'grommet-controls',
    path: '/add-ons',
    label: 'grommet controls',
  },
  {
    id: 'component_examples',
    path: '/examples',
    label: 'examples',
  },
  {
    id: 'grommet-sites',
    path: '/sites',
    label: 'grommet sites',
  },

];

class SideMenu extends React.Component {
  state = {
    grommet: {},
    grommetControls: {},
  }
  constructor(props, context) {
    super(props, context);

    this.changeTheme(props.router.query.theme);
  }
  changeTheme(themeName) {
    this.props.selectTheme(themeName);
    this.theme = themeName;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.router.query.theme !== this.theme) {
      this.changeTheme(nextProps.router.query.theme);
    }
  }
  onThemeChange = ({ option: theme }) => {
    const { router } = this.props;
    const path = { pathname: queryParams(router), query: { theme } };
    this.changeTheme(theme);
    router.replace(path, path, { shallow: true });
  };
  componentDidMount() {
    fetch('/api/package/grommet/latest')
      .then(res => res.json())
      .then(res => this.setState({ grommet: res }));
    fetch('/api/package/grommet-controls/latest')
      .then(res => res.json())
      .then(res => this.setState({ grommetControls: res }));
  }

  render() {
    const { router, themes: { themes, selected: theme } } = this.props;
    const { grommet, grommetControls } = this.state;
    const themeSelector = (
      <Box pad='small'>
        <FormField label='theme:'>
          <Select
            a11yTitle='Change theme'
            value={theme}
            options={Object.keys(themes)}
            onChange={this.onThemeChange}
          />
        </FormField>
      </Box>
    );

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
            {themeSelector}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ selectTheme }, dispatch);

const mapStateToProps = state => ({
  themes: state.themes,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideMenu));


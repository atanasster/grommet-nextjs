import React from 'react';
import { withRouter } from 'next/router';
import 'isomorphic-fetch';
import { Box } from 'grommet';
import { Search } from 'grommet-icons';
import { Sidebar, VerticalMenu, DropInput } from 'grommet-controls';
import Page from '../components/app/Page';
import pushRoute from '../components/app/PushRoute';
import Example from '../components/documentation/Example';


interface ExamplesProps {
  grouped: boolean,
}

interface ExamplesState {
  library: string,
  group: string,
  example: string,
  code: string,
  search: string,
  size: string,
}
class Examples extends React.Component<ExamplesProps, ExamplesState> {
  constructor(props) {
    super(props);
    const { group = 'Box', library, example = '_starter' } = props.router.query;
    let code = '';
    const item = props.examples.find(e => e.label === group && (!library || e.package === library));
    if (item) {
      const exmpl = item.items.find(e => e.label === example);
      if (exmpl) {
        ({ code } = exmpl);
      }
    }
    this.state = {
      code, group, example, library, search: '', size: item.size,
    };
  }

  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/examples`);
    const allExamples = await res.json();
    const examples = allExamples.sort().map(example => ({
      label: example.name,
      package: example.package,
      category: example.category,
      size: example.size,
      items: Object.keys(example.examples)
        .sort()
        .map(item => ({
          label: item,
          component: example.name,
          code: example.examples[item],
          package: example.package,
          id: `${example.package}_${example.name}_${item}`,
        })),
    }));
    const byPackage = examples.reduce((acc, item) => {
      if (!acc[item.package]) {
        acc[item.package] = [];
      }
      acc[item.package].push(item);
      return acc;
    }, {});
    const grouped = Object.keys(byPackage).map((p) => {
      const byCategory = byPackage[p].reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});
      return {
        label: p,
        items: Object.keys(byCategory).sort().map(cat => ({
          label: cat,
          id: `${byCategory[cat].package}_${p}_${cat}`,
          items: byCategory[cat],
        })),
      };
    });
    return {
      examples,
      grouped,
    };
  }

  render() {
    const { grouped } = this.props;
    const { library, group, example, code, search, size } = this.state;
    return (
      <Page
        title='Component editor'
        sideBar={(
          <Sidebar
            title='Examples'
            width='medium'
            flex={false}
            background='brand'
          >
            <Box pad='small'>
              <DropInput
                style={{
                  WebkitAppearance: 'none',
                }}
                placeholder='Search for example'
                value={search}
                type='search'
                onChange={({ target: { value } }) => this.setState({
                  search: value,
                })}
                widgets={[
                  {
                    icon: <Search />, onClick: () => {},
                  },
                ]}
              />
            </Box>
            <Box overflow='auto'>
              <VerticalMenu
                items={grouped}
                activeItem={{
                  id: `${library}_${group}_${example}`,
                }}
                search={search}
                onSelect={(item) => {
                  pushRoute({
                    route: 'examples',
                    params: {
                      library: item.package, group: item.component, example: item.label,
                    },
                  });
                  this.setState({
                    library: item.package,
                    code: item.code,
                    group: item.component,
                    example: item.label,
                    size: item.size,
                  });
                }}
              />
            </Box>
          </Sidebar>
        )}
      >
        <Box fill={true}>
          <Example
            editorPosition={size === 'large' ? 'top' : 'left'}
          >
            {code}
          </Example>
        </Box>
      </Page>
    );
  }
}

export default withRouter(Examples);

/* eslint-disable import/no-duplicates */
import React from 'react';
import { withRouter } from 'next/router';
import 'isomorphic-fetch';
import { Box } from 'grommet';
import { Search } from 'grommet-icons';
import { Sidebar, VerticalMenu, DropInput } from 'grommet-controls';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import styled, { css } from 'styled-components';
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import * as Themes from 'grommet-controls/themes';
import * as GrommetControls from 'grommet-controls';
import Page from '../components/Page';
import pushRoute from '../components/PushRoute';
// import * as allExamples from '../examples';

const scope = {
  ...Grommet, ...GrommetControls, Icons, Themes, styled, css,
};

const StyledEditor = styled(LiveEditor)`
  overflow: auto;
`;
class Examples extends React.Component {
  constructor(props) {
    super(props);
    const { group = 'Box', example = '_starter' } = props.router.query;
    let pckg = 'grommet';
    let code = '';
    const item = props.examples.find(e => e.label === group);
    if (item) {
      pckg = item.package;
      const exmpl = item.items.find(e => e.label === example);
      if (exmpl) {
        ({ code } = exmpl);
      }
    }
    this.state = {
      code, group, example, pckg, search: '',
    };
  }
  static async getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseUrl}/api/examples`);
    const allExamples = await res.json();
    const examples = Object.keys(allExamples).sort().map((key) => {
      const example = allExamples[key];
      return {
        label: key,
        package: example.package,
        category: example.category,
        items: Object.keys(example.examples)
          .sort()
          .map(item => ({
            label: item,
            component: key,
            code: example.examples[item],
            id: `${example.package}_${key}_${item}`,
          })),
      };
    });
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
          id: `${p}_${cat}`,
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
    const {
      pckg, group, example, code, search,
    } = this.state;
    return (
      <Page title='Component editor'>
        <Box direction='row' flex={true}>
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
                onChange={({ target: { value } }) => this.setState({ search: value })}
                widgets={[
                  { icon: <Search />, onClick: () => {} },
                ]}
              />
            </Box>
            <Box overflow='auto'>
              <VerticalMenu
                items={grouped}
                activeItem={{ id: `${pckg}_${group}_${example}` }}
                search={search}
                onSelect={(item) => {
                  pushRoute({
                    route: 'examples',
                    params: { group: item.component, example: item.label },
                  });
                  this.setState({
 pckg: item.package, code: item.code, group: item.component, example: item.label,
});
                }}
              />
            </Box>
          </Sidebar>
          <Box fill={true}>
            <LiveProvider
              code={code}
              scope={scope}
              noInline={true}
            >
              <Box direction='row-responsive' fill={true} pad='medium' gap='medium'>
                <Box basis='1/2'>
                  <StyledEditor onChange={e => this.setState({ code: e })} />
                  <LiveError />
                </Box>
                <Box basis='1/2'>
                  <LivePreview />
                </Box>
              </Box>
            </LiveProvider>
          </Box>

        </Box>
      </Page>
    );
  }
}

export default withRouter(Examples);

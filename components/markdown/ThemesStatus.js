import React from 'react';
import { Grommet, Box, Anchor, Button, Text, Select } from 'grommet';
import { colorIsDark } from 'grommet/utils';
import { Home } from 'grommet-icons';
import { PagingTable } from 'grommet-controls';
import connect from '../../redux';

const anchorTest = ({ backgroundColor, container }) => {
  const errors = [];
  const { color } = getComputedStyle(container.children[0]);
  const error = colorIsDark(color) === colorIsDark(backgroundColor);
  if (error) {
    errors.push(`${color} on ${backgroundColor}`);
  }
  return errors;
};

const buttonTest = ({ backgroundColor, container }) => {
  const errors = [];
  const btn = container.children[0];
  const { color } = getComputedStyle(container.children[0]);
  if (colorIsDark(color) === colorIsDark(backgroundColor)) {
    errors.push(`${color} on ${backgroundColor}`);
  }
  const svgIcon = btn.children[0].children[0].children[0];
  const { stroke } = getComputedStyle(svgIcon);
  if (colorIsDark(stroke) === colorIsDark(backgroundColor)) {
    errors.push(`icon ${stroke} on ${backgroundColor}`);
  }
  return errors;
};

const selectTest = ({ backgroundColor, container }) => {
  const errors = [];
  const btn = container.children[0];
  const { color } = getComputedStyle(container.children[0]);
  if (colorIsDark(color) === colorIsDark(backgroundColor)) {
    errors.push(`${color} on ${backgroundColor}`);
  }
  const svgIcon = btn.children[0].children[1].children[0];
  const { stroke } = getComputedStyle(svgIcon);
  if (colorIsDark(stroke) === colorIsDark(backgroundColor)) {
    errors.push(`icon ${stroke} on ${backgroundColor}`);
  }
  return errors;
};

const TestContainer = ({
  children, theme, test, name, errorFunc = anchorTest, ...rest
}) => {
  const ref = React.useRef();
  let err;
  if (ref.current) {
    const { backgroundColor } = getComputedStyle(ref.current);
    const errors = errorFunc({ backgroundColor, container: ref.current });
    if (errors.length > 0) {
      const title = errors.join('\n');
      err = (
        <Text title={title} color='red' >
          {`${errors.length} ERROR${errors.length > 1 ? 'S' : ''}`}
        </Text>
      );
    }
  }
  return (
    <Box align='center'>
      <Grommet theme={theme}>
        <Box ref={(r) => { ref.current = r; }} {...rest}>
          {children}
        </Box>
      </Grommet>
      {err}
    </Box>
  );
};

const AnchorOnDark = props => (
  <TestContainer test='AnchorOnDark' background='black' {...props}>
    <Anchor icon={<Home />} label='Link' href='#' />
  </TestContainer>
);


const AnchorOnWhite = props => (
  <TestContainer test='AnchorOnWhite' background='white' {...props}>
    <Anchor icon={<Home />} label='Link' href='#' />
  </TestContainer>
);

const ButtonOnDark = props => (
  <TestContainer test='ButtonOnDark' background='black' errorFunc={buttonTest} {...props}>
    <Button icon={<Home />} label='Link' onClick={() => {}} />
  </TestContainer>
);

const ButtonOnLight = props => (
  <TestContainer test='ButtonOnLight' background='white' errorFunc={buttonTest} {...props}>
    <Button icon={<Home />} label='Link' onClick={() => {}} />
  </TestContainer>
);

const SelectOnDark = props => (
  <TestContainer test='SelectOnDark' background='black' errorFunc={selectTest} {...props}>
    <Select options={['option']} value='option' />
  </TestContainer>
);

const SelectOnLight = props => (
  <TestContainer test='SelectOnLight' background='white' errorFunc={selectTest} {...props}>
    <Select options={['option']} value='option' />
  </TestContainer>
);

class ThemesStatus extends React.Component {
  render() {
    const { themes } = this.props;
    return (
      <Box>
        <PagingTable
          decorations={{
           row: { hover: true },
          }}
          columns={[
          {
            Header: 'theme',
            accessor: 'name',
          }, {
            Header: 'Anchor/dark',
            accessor: '2',
            Cell: props => (
              <AnchorOnDark theme={props.original.theme} name={props.original.name} />
            ),
          }, {
            Header: 'Anchor/light',
            accessor: '3',
            Cell: props => (
              <AnchorOnWhite theme={props.original.theme} name={props.original.name} />
            ),
          }, {
            Header: 'Button/dark',
            accessor: '4',
            Cell: props => (
              <ButtonOnDark theme={props.original.theme} name={props.original.name} />
            ),
          }, {
            Header: 'Button/light',
            accessor: '4',
            Cell: props => (
              <ButtonOnLight theme={props.original.theme} name={props.original.name} />
            ),
          }, {
            Header: 'Select/dark',
            accessor: '5',
            Cell: props => (
              <SelectOnDark theme={props.original.theme} name={props.original.name} />
            ),
          }, {
            Header: 'Select/light',
            accessor: '5',
            Cell: props => (
              <SelectOnLight theme={props.original.theme} name={props.original.name} />
            ),
          },
          ]}
          data={Object.keys(themes).map(theme => ({ name: theme, theme: themes[theme] }))}
        />
      </Box>
    );
  }
}


const mapStateToProps = state => ({
  themes: state.themes.themes,
});


export default connect(mapStateToProps)(ThemesStatus);

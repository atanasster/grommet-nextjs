import React from 'react';
import JSONPretty from 'react-json-pretty';
import { Grommet, Box, Anchor, Button, Text, Select, CheckBox, RadioButton } from 'grommet';
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
  const darkBackground = colorIsDark(backgroundColor);
  const btn = container.children[0];
  const { color } = getComputedStyle(btn);
  if (colorIsDark(color) === darkBackground) {
    errors.push(`${color} on ${backgroundColor}`);
  }
  const { borderColor } = getComputedStyle(btn);
  if (colorIsDark(borderColor) === darkBackground) {
    errors.push(`border ${borderColor} on ${backgroundColor}`);
  }

  const svgIcon = btn.querySelector('svg');
  const { stroke } = getComputedStyle(svgIcon);
  if (colorIsDark(stroke) === darkBackground) {
    errors.push(`icon ${stroke} on ${backgroundColor}`);
  }
  return errors;
};

const checkboxTest = ({ backgroundColor, container }) => {
  const errors = [];
  const darkBackground = colorIsDark(backgroundColor);
  const label = container.querySelector('label');
  const { color } = getComputedStyle(label);
  if (colorIsDark(color) === darkBackground) {
    errors.push(`${color} on ${backgroundColor}`);
  }
  const checkbox = container.querySelector('input').nextSibling;

  const { borderColor } = getComputedStyle(checkbox);
  if (colorIsDark(borderColor) === darkBackground) {
    errors.push(`border ${borderColor} on ${backgroundColor}`);
  }
  const svgIcon = container.querySelector('svg');
  const { stroke, fill } = getComputedStyle(svgIcon);
  const svgColor = stroke !== 'none' ? stroke : fill;
  if (colorIsDark(svgColor) === darkBackground) {
    errors.push(`icon ${svgColor} on ${backgroundColor}`);
  }
  return errors;
};

const selectTest = ({ backgroundColor, container }) => {
  const errors = [];
  const darkBackground = colorIsDark(backgroundColor);
  const btn = container.children[0];
  const { color } = getComputedStyle(btn);
  if (colorIsDark(color) === darkBackground) {
    errors.push(`${color} on ${backgroundColor}`);
  }
  const { borderColor } = getComputedStyle(btn);
  if (colorIsDark(borderColor) === darkBackground) {
    errors.push(`border ${borderColor} on ${backgroundColor}`);
  }
  const svgIcon = btn.querySelector('svg');
  const { stroke } = getComputedStyle(svgIcon);
  if (colorIsDark(stroke) === darkBackground) {
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

const CheckboxOnDark = props => (
  <TestContainer test='CheckboxOnDark' background='black' errorFunc={checkboxTest} {...props}>
    <CheckBox checked={true} label='check' onChange={() => {}} />
  </TestContainer>
);

const CheckboxOnLight = props => (
  <TestContainer test='CheckboxOnLight' background='white' errorFunc={checkboxTest} {...props}>
    <CheckBox checked={true} label='check' onChange={() => {}} />
  </TestContainer>
);

const RadioButtonOnDark = props => (
  <TestContainer test='RadioButtonOnDark' background='black' errorFunc={checkboxTest} {...props}>
    <RadioButton checked={true} label='radio' name='RadioButtonOnDark' onChange={() => {}} />
  </TestContainer>
);

const RadioButtonOnLight = props => (
  <TestContainer test='RadioButtonOnLight'background='white' errorFunc={checkboxTest} {...props}>
    <RadioButton checked={true} label='radio' name='RadioButtonOnLight' onChange={() => {}} />
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
  onExpand = row => (
    <Box overflow='auto'>
      <JSONPretty json={row.original.theme} />
    </Box>
  );

  render() {
    const { themes } = this.props;
    return (
      <Box>
        <PagingTable
          sortable={false}
          resizable={false}
          SubComponent={this.onExpand}
          decorations={{
           table: { elevation: 'medium', border: 'all' },
           row: { hover: true },
           headerGroup: {
              background: 'brand', border: 'all', size: 'large', textAlign: 'center',
            },
          }}
          columns={[
          {
            columns: [
              {
                Header: 'theme',
                accessor: 'name',
              },
            ],
          }, {
            Header: 'Anchor',
            columns: [
             {
                Header: 'dark',
                Cell: props => (
                  <AnchorOnDark theme={props.original.theme} name={props.original.name} />
                ),
              }, {
                Header: 'light',
                Cell: props => (
                  <AnchorOnWhite theme={props.original.theme} name={props.original.name} />
                ),
              },
            ],
          }, {
              Header: 'Button',
              columns: [
                {
                  Header: 'dark',
                  Cell: props => (
                    <ButtonOnDark theme={props.original.theme} name={props.original.name} />
                  ),
                }, {
                  Header: 'light',
                  Cell: props => (
                    <ButtonOnLight theme={props.original.theme} name={props.original.name} />
                  ),
                },
              ],
            }, {
              Header: 'Select',
              columns: [
                {
                  Header: 'dark',
                  Cell: props => (
                    <SelectOnDark theme={props.original.theme} name={props.original.name} />
                  ),
                }, {
                  Header: 'light',
                  Cell: props => (
                    <SelectOnLight theme={props.original.theme} name={props.original.name} />
                  ),
                },
              ],
            }, {
              Header: 'CheckBox',
              columns: [
                {
                  Header: 'dark',
                  Cell: props => (
                    <CheckboxOnDark theme={props.original.theme} name={props.original.name} />
                  ),
                }, {
                  Header: 'light',
                  Cell: props => (
                    <CheckboxOnLight theme={props.original.theme} name={props.original.name} />
                  ),
                },
              ],
            }, {
              Header: 'RadioButton',
              columns: [
                {
                  Header: 'dark',
                  Cell: props => (
                    <RadioButtonOnDark theme={props.original.theme} name={props.original.name} />
                  ),
                }, {
                  Header: 'light',
                  Cell: props => (
                    <RadioButtonOnLight theme={props.original.theme} name={props.original.name} />
                  ),
                },
              ],
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

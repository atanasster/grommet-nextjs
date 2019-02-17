/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError,
} from 'react-live';
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import { Form as GrommetForm, MaskedInput as GrommetMaskedInput } from 'grommet';
import * as Themes from 'grommet-controls/themes';
import * as GrommetControls from 'grommet-controls';
import * as GrommetCharts from 'grommet-controls/chartjs';
import RoutedButton from '../app/RoutedButton';


const scope = {
  ...Grommet,
  GrommetForm,
  GrommetMaskedInput,
  ...GrommetControls,
  ...GrommetCharts,
  Icons,
  Themes,
};

const StyledProvider = styled(LiveProvider)`
  dispplay: flex;
  flex: 0 0;
  width: 100%;
  align-items: center;
`;

const StyledPreview = styled(LivePreview)`
  width: 100%;
  height: 100%;
  align-items: center;  
`;

const StyledEditor = styled(LiveEditor)`
  overflow: auto;
  max-height: 400px;
`;

class Example extends React.Component {
  state = {
    code: '',
  };
  exampleContainer = () => {
    const { editorPosition } = this.props;
    const { code } = this.state;
    switch (editorPosition) {
      case 'left':
        return (
          <Grommet.Box direction='row-responsive' fill='horizontal' pad='medium' gap='medium'>
            <Grommet.Box basis='1/2'>
              {code && (
                <React.Fragment>
                  <StyledEditor onChange={e => this.setState({ code: e })} />
                  <LiveError />
                </React.Fragment>
              )}
            </Grommet.Box>
            <Grommet.Box basis='1/2'>
              <StyledPreview />
            </Grommet.Box>
          </Grommet.Box>
        );
      case 'top':
        return (
          <Grommet.Box fill='horizontal' pad='medium' gap='medium'>
            <Grommet.Box>
              {code && (
                <React.Fragment>
                  <StyledEditor onChange={e => this.setState({ code: e })} />
                  <LiveError />
                </React.Fragment>
              )}
            </Grommet.Box>
            <Grommet.Box>
              <StyledPreview />
            </Grommet.Box>
          </Grommet.Box>
        );
      case 'right':
        return (
          <Grommet.Box direction='row-responsive' fill='horizontal' pad='medium' gap='medium'>
            <Grommet.Box basis='1/2'>
              <StyledPreview />
            </Grommet.Box>
            <Grommet.Box basis='1/2'>
              {code && (
                <React.Fragment>
                  <StyledEditor onChange={e => this.setState({ code: e })} />
                  <LiveError />
                </React.Fragment>
              )}
            </Grommet.Box>
          </Grommet.Box>
        );
      default:
        return (
          <Grommet.Box fill={true} pad='medium'>
            <StyledPreview />
          </Grommet.Box>
        );
    }
  };

  childrenToChode = (children) => {
    if (typeof children === 'string') {
      return children;
    }
    if (Array.isArray(children) && children.length === 1) {
      return children[0].props.children.props.children;
    }
    return '';
  };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ code: this.childrenToChode(this.props.children) });
  }

  componentWillReceiveProps(newProps) {
    const code = this.childrenToChode(newProps.children);
    if (code !== this.props.children) {
      this.setState({ code });
    }
  }

  render() {
    const {
      library, component, example,
    } = this.props;
    const { code } = this.state;
    return (
      <StyledProvider code={code} scope={scope} noInline={true}>
        {this.exampleContainer()}
        {component && example && library && (
          <Grommet.Box pad={{ vertical: 'small' }} align='start'>
            <RoutedButton
              plain={true}
              route='examples'
              params={{ library, group: component, example }}
            >
              <Grommet.Box direction='row' gap='xsmall' pad='xsmall'>
                <Icons.Code />
                Code
              </Grommet.Box>
            </RoutedButton>

          </Grommet.Box>
        )}
      </StyledProvider>
    );
  }
}

Example.defaultProps = {
  children: '',
  component: undefined,
  library: undefined,
  example: undefined,
  editorPosition: undefined,
};


Example.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  component: PropTypes.string,
  example: PropTypes.string,
  library: PropTypes.string,
  editorPosition: PropTypes.oneOf(['top', 'left', 'right']),
};

export default Example;

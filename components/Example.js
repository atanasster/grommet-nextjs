import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  LiveProvider,
  LivePreview,
} from 'react-live';
import * as Icons from 'grommet-icons';
import * as Grommet from 'grommet';
import * as Themes from 'grommet-controls/themes';
import * as GrommetControls from 'grommet-controls';
import { rndDatasets, rndDatasets2d } from '../utils/data';
import RoutedButton from './RoutedButton';

const scope = {
  ...Grommet, ...GrommetControls, rndDatasets, rndDatasets2d, Icons, Themes,
};

const StyledProvider = styled(LiveProvider)`
  dispplay: flex;
  flex: 0 0;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const StyledPreview = styled(LivePreview)`
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
`;

const Example = ({ code, component, example }) => (
  <StyledProvider code={code} scope={scope} noInline={true}>
    <StyledPreview />
    {component && example && (
      <Grommet.Box pad={{ vertical: 'small' }} align='start'>
        <RoutedButton
          plain={true}
          route='examples'
          params={{ group: component, example }}
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

Example.defaultProps = {
  code: '',
  component: undefined,
  example: undefined,
};


Example.propTypes = {
  code: PropTypes.string,
  component: PropTypes.string,
  example: PropTypes.string,
};

export default Example;

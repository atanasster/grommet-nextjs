import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Draggable } from '@devexpress/dx-react-core';
import { normalizeColor } from 'grommet/utils';
import { parseMetricToNum } from 'grommet/utils/mixins';

export const ResizeHandle = styled.div`
  position: absolute;
  user-select: none;
  width: ${props => props.theme.global.edgeSize.xsmall};
  top: 0;
  right: -${props => props.theme.global.edgeSize.xxsmall};
  height: 100%;
  cursor: col-resize;
  z-index: 100;
  ${props => props.resizing && `
      opacity: 1;
      background-color: ${normalizeColor('text', props.theme)};
      height: calc(100% - 4px);
      top: 2px;
    `}
`;

const ResizeHandleLine = styled.div`
  position: absolute;
  background-color: ${props => normalizeColor('text', props.theme)};
  height: 50%;
  width: 1px;
  top: 25%;
  transition: all linear 100ms;
  ${props => props.first && `
    left: ${parseMetricToNum(props.theme.global.edgeSize.xxsmall) - 1}px;
  `}
  ${props => props.second && `
    left: ${parseMetricToNum(props.theme.global.edgeSize.xxsmall) + 1}px;
  `}
  ${props => props.resizing && `
    left: ${props.theme.global.edgeSize.xxsmall};
  `}
  ${props => props.resizing && `
    opacity: 1;
    background-color: ${normalizeColor('brand', props.theme)};
    height: calc(100% - 4px);
    top: 2px;
  `}
  &:hover {
    opacity: 1;
  }
`;


class ResizingControlBase extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      resizing: false,
    };

    this.onResizeStart = ({ x }) => {
      this.resizeStartingX = x;
      this.setState({ resizing: true });
    };
    this.onResizeUpdate = ({ x }) => {
      const { onWidthDraft } = this.props;
      onWidthDraft({ shift: x - this.resizeStartingX });
    };
    this.onResizeEnd = ({ x }) => {
      const { onWidthChange, onWidthDraftCancel } = this.props;
      onWidthDraftCancel();
      onWidthChange({ shift: x - this.resizeStartingX });
      this.setState({ resizing: false });
    };
  }

  render() {
    const { theme } = this.props;
    const { resizing } = this.state;

    return (
      <Draggable
        onStart={this.onResizeStart}
        onUpdate={this.onResizeUpdate}
        onEnd={this.onResizeEnd}
      >
        <ResizeHandle
          theme={theme}
          resizing={resizing}
        >
          <ResizeHandleLine
            first={true}
            resizing={resizing}
          />
          <ResizeHandleLine
            second={true}
            resizing={resizing}
          />
        </ResizeHandle>
      </Draggable>
    );
  }
}

ResizingControlBase.propTypes = {
  onWidthChange: PropTypes.func.isRequired,
  onWidthDraft: PropTypes.func.isRequired,
  onWidthDraftCancel: PropTypes.func.isRequired,
};

export const ResizingControl = withTheme(ResizingControlBase);

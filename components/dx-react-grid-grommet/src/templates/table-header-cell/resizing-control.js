import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Draggable } from '@devexpress/dx-react-core';

const ResizeHandle = styled.div`
  position: absolute;
  userSelect: none;
  width: ${props => props.theme.spacing.unit * 2}px;
  top: 0,
  right: -${props => props.theme.spacing.unit}px;
  height: 100%;
  cursor: col-resize;
  zIndex: 100;
  ${props => props.resizing && `
      opacity: 1;
      backgroundColor: ${props.theme.global.colors.text};
      height: calc(100% - 4px);
      top: 2px;
    `}
`;

const ResizeHandleLine = styled.div`
  position: absolute;
  backgroundColor: ${props => props.theme.global.colors.text};
  height: 50%;
  width: 1px;
  top: 25%;
  transition: all linear 100ms;
  ${props => props.first && `
    left: ${props.theme.spacing.unit - 1}px;
  `}
  ${props => props.second && `
    left: ${props.theme.spacing.unit + 1}px;
  `}
  ${props => props.resizing && `
    left: ${props.theme.spacing.unit}px;
  `}  
`;


export class ResizingControlBase extends React.PureComponent {
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

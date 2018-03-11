import React, { Component } from 'react';
import { FormDown } from 'grommet-icons';
import { compose } from 'recompose';
import { Box, DropButton, Keyboard } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import StyledDropInput, { StyledDropInputContainer, StyledWidget } from './StyledDropInput';

import doc from './doc';

class DropInput extends Component {
  static defaultProps = {
    dropAlign: { top: 'bottom', right: 'left' },
    dropIcon: <FormDown />,
    type: 'text',
    widgets: [],
  }

  state = { open: false };

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (value !== this.props.value) {
      this.onClose();
    }
  }

  onOpen = (e) => {
    const { onOpen, disabled } = this.props;
    this.setState({ open: true });
    if (onOpen && !disabled) {
      onOpen(e);
    }
  }

  onClose = (e) => {
    const { onClose, disabled } = this.props;
    this.setState({ open: false });
    if (onClose && !disabled) {
      onClose(e);
    }
  }

  render() {
    const {
      a11yTitle, a11yDropTitle, dropAlign, dropTarget, widgets,
      // eslint-disable-next-line no-unused-vars,max-len
      onOpen, onClose,
      dropContent, dropIcon, theme, disabled, ...rest
    } = this.props;
    const { open } = this.state;
    const numWidgets = (dropContent ? 1 : 0) + (widgets ? widgets.length : 0);
    let decorations;
    if (numWidgets > 0) {
      let drop;
      if (dropContent) {
        const icon = <StyledWidget theme={theme} disabled={disabled}>{dropIcon}</StyledWidget>;
        drop = (
          <DropButton
            a11yTitle={a11yDropTitle}
            dropAlign={dropAlign}
            dropTarget={dropTarget}
            open={open}
            tabIndex='-1'
            focusIndicator={false}
            onOpen={this.onOpen}
            onClose={this.onClose}
            dropContent={!disabled && dropContent}
          >
            {icon}
          </DropButton>
        );
      }
      decorations = (
        <Box
          style={{ position: 'absolute', right: 0, top: 0 }}
          align='center'
          direction='row'
        >
          {widgets.map((widget, index) => {
            const { icon, ...other } = widget;
            return (
              <StyledWidget role='button' key={`widget_${index}`} theme={theme} disabled={disabled} {...other}>
                {icon}
              </StyledWidget>
            );
          })}
          {drop}
        </Box>
      );
    }
    return (
      <Keyboard onDown={this.onOpen} onUp={this.onClose}>
        <StyledDropInputContainer >
          <StyledDropInput
            theme={theme}
            disabled={disabled}
            numWidgets={numWidgets}
            aria-label={a11yTitle}
            {...rest}
          />
          {decorations}
        </StyledDropInputContainer>
      </Keyboard>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(DropInput);
}

export default compose(
  withTheme,
)(DropInput);

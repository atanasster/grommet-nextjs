import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Keyboard } from 'grommet';
import { focusedChildIndex, focusChildByIndex, focusNextElement, focusPrevElement, hasKeyboardChildren } from '../DOM';

import { StyledTrComponent } from '../StyledPagingTable';

class TrComponent extends Component {
  selectNextRow = () => {
    const { selectRow } = this.props;
    const activeChild = focusedChildIndex(this.container);
    return selectRow(true, activeChild);
  };

  selectPrevRow = () => {
    const { selectRow } = this.props;
    const activeChild = focusedChildIndex(this.container);
    return selectRow(false, activeChild);
  };
  selectNextChild = () => {
    if (focusNextElement(this.container)) {
      return true;
    }
    return this.selectNextRow();
  };
  selectPrevChild = () => {
    if (focusPrevElement(this.container)) {
      return true;
    }
    return this.selectPrevRow();
  };

  selectFirstChild = activeIndex => focusChildByIndex(this.container, activeIndex);

  render() {
    return (
      <Keyboard
        onTab={(e) => {
          e.preventDefault();
          if (e.shiftKey) {
            this.selectPrevChild();
          } else {
            this.selectNextChild();
          }
        }}
        onLeft={(e) => {
          if (!hasKeyboardChildren(document.activeElement)) {
            e.preventDefault();
            this.selectPrevChild();
          }
        }}
        onRight={(e) => {
          if (!hasKeyboardChildren(document.activeElement)) {
            e.preventDefault();
            this.selectNextChild();
          }
        }}
        onUp={(e) => {
          if (!hasKeyboardChildren(document.activeElement)) {
            e.preventDefault();
            this.selectPrevRow();
          }
        }}
        onDown={(e) => {
          if (!hasKeyboardChildren(document.activeElement)) {
            e.preventDefault();
            this.selectNextRow();
          }
        }}
      >
        <StyledTrComponent
          direction='row'
          role='row'
          ref={(el) => { this.container = findDOMNode(el); }}
          {...this.props}
        />
      </Keyboard>
    );
  }
}

export default TrComponent;

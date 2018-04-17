import { filterByFocusable } from 'grommet/utils/index';

export const focusableChildren = (parent) => {
  let list = [];
  if (parent && parent.childNodes) {
    parent.childNodes.forEach((node) => {
      if (node.tagName) {
        list.push(node);
        if (filterByFocusable([node]).length !== 1) {
          list = list.concat(focusableChildren(node));
        }
      }
    });
  }
  return filterByFocusable(list);
};


export const focusedChildIndex = (parent) => {
  const focusable = focusableChildren(parent);
  const focused = document.activeElement;
  for (let i = 0; i < focusable.length; i += 1) {
    if (focusable[i] === focused) {
      return i;
    }
  }
  return 0;
};

export const focusChildByIndex = (parent, index) => {
  const focusable = focusableChildren(parent);
  const focusIndex = Math.min(index, focusable.length - 1);
  if (focusIndex >= 0) {
    focusable[focusIndex].focus();
    return true;
  }
  return false;
};

export const focusNextElement = (parent) => {
  const focusable = focusableChildren(parent);
  const focused = document.activeElement;
  let nextFocus;
  for (let i = 0; i < focusable.length; i += 1) {
    if (focusable[i] === focused) {
      if (i < focusable.length - 1) {
        nextFocus = focusable[i + 1];
      }
      break;
    }
  }
  if (nextFocus) {
    nextFocus.focus();
    return true;
  }
  return false;
};

export const focusPrevElement = (parent) => {
  const focusable = focusableChildren(parent);
  const focused = document.activeElement;
  let prevFocus;
  for (let i = 0; i < focusable.length; i += 1) {
    if (focusable[i] === focused) {
      if (i > 0) {
        prevFocus = focusable[i - 1];
      }
      break;
    }
  }
  if (prevFocus) {
    prevFocus.focus();
    return true;
  }
  return false;
};

export const hasKeyboardChildren = (element) => {
  const currentTag = element.tagName.toLowerCase();
  const validTags = /(input|select|textarea)$/;
  if (currentTag.match(validTags)) {
    return true;
  }
  const focusable = focusableChildren(element);
  for (let i = 0; i < focusable.length; i += 1) {
    if (focusable[i].tagName && focusable[i].tagName.toLowerCase().match(validTags)) {
      return true;
    }
  }
  return false;
};

/* eslint-disable import/no-unresolved,import/extensions */
import React from 'react';
import cheerio from 'cheerio';
import cssjs from 'jotform-css.js';
import server from 'react-dom/server.js';
import sc from 'styled-components';
import testerTheme from './themeTester';

const { renderToString } = server;
const { ServerStyleSheet } = sc;

const TestComponent = ({ theme, Grommet, Component, ...rest }) => (
  React.createElement(Grommet, {
    theme,
  }, React.createElement(Component, {
    ...rest,
  }, null))
);

const cssRules = ({ theme, Grommet, Component, ...rest }) => {
  // eslint-disable-next-line new-cap
  const cssParser = new cssjs.cssjs();
  const sheet = new ServerStyleSheet();
  const item = React.createElement(TestComponent, {
    Grommet, Component, theme, ...rest,
  }, null);
  renderToString(sheet.collectStyles(item));
  const styleTags = renderToString(sheet.getStyleElement());
  const root = cheerio.load(styleTags);
  // parse css strings for classes
  const css = cssParser.parseCSS(root('style').contents().first().text());

  const rules = [];
  css.forEach((p) => {
    if (p.comments) {
      const classes = p.comments.split(' ');
      const className = classes[2].split('-')[0];
      if (className !== 'StyledGrommet') {
        p.rules.forEach((rule) => {
          rules.push({
            ...rule, className,
          });
        });
      }
    }
  });
  return rules;
};


const testCssDiffs = ({ object, theme, baseline, errors, path }) => {
  const newCss = cssRules({
    ...object, theme,
  });
  baseline.forEach((cssRule) => {
    const namedRules = newCss
      .filter(newRule => (
        newRule.className === cssRule.className && newRule.directive === cssRule.directive
      ));

    const found = namedRules.find(newRule => (newRule.value === cssRule.value));
    if (found === undefined) {
      errors.push({
        ...cssRule, path, newValue: namedRules.length > 0 ? namedRules[0].value : 'none',
      });
    }
  });
};

const isObject = item => (
  item && typeof item === 'object' && !Array.isArray(item)
);


const iterateTheme = ({ object, baseline, errors, theme, path }) => {
  if (isObject(theme)) {
    Object.keys(theme).forEach((key) => {
      iterateTheme({
        theme: theme[key], path: `${path}${path ? '.' : ''}${key}`, object, baseline, errors,
      });
    });
  } else if (typeof theme !== 'function') {
    const keys = path.split('.');
    const lastIndex = keys.length - 1;
    const newTheme = {};
    let obj = newTheme;
    for (let i = 0; i < lastIndex; i += 1) {
      const key = keys[i];
      if (!(key in obj)) {
        obj[key] = {};
      }
      obj = obj[key];
    }
    obj[keys[lastIndex]] = theme;
    testCssDiffs({
      object, theme: newTheme, baseline, errors, path,
    });
  }
};

export default ({ Grommet, Component, baseTheme }) => {
  const object = {
    Grommet,
    Component,
    border: 'all',
    elevation: 'small',
    pad: 'small',
    margin: 'small',
    gap: 'small',
    background: {
      opacity: 'weak',
    },
    placeholder: 'text',
    size: 'small',
  };
  const baseline = cssRules({
    ...object, theme: baseTheme,
  });


  const errors = [];
  iterateTheme({
    object, baseline, errors, theme: testerTheme, path: '',
  });
  return {
    errors,
  };
};

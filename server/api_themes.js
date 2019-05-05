/* eslint-disable import/no-unresolved,import/extensions,no-param-reassign */
import express from 'express';
import grommet from 'grommet';
import grommetControls from 'grommet-controls';
import { examples } from '../examples/index.js';
import tests from './theme_doc.js';

const router = express.Router();

router.get('/:name?', (req, res) => {
  const { name } = req.params;
  const theme = {};
  examples.filter(example => (name === undefined || example.name === name)).forEach((example) => {
    if (example.themeDoc) {
      Object.keys(example.themeDoc).forEach((propName) => {
        const setThemeValue = (obj, keys, value) => {
          const lastIndex = keys.length - 1;
          for (let i = 0; i < lastIndex; i += 1) {
            const key = keys[i];
            if (!(key in obj)) {
              obj[key] = {};
            }
            obj = obj[key];
          }
          if (!(keys[lastIndex] in obj)) {
            obj[keys[lastIndex]] = [];
          }

          try {
            obj[keys[lastIndex]].push({ component: example.name, ...value });
          } catch (e) {
            console.log('ERROR: ', propName, keys[lastIndex]);
          }
        };
        const keys = propName.split('.');
        setThemeValue(theme, keys, example.themeDoc[propName]);
      });
    }
  });
  res.json(theme);
});

router.get('/component/:library/:component', (req, res) => {
  const { library, component } = req.params;
  const items = examples
    .filter(e => (e.package === library && e.name === component));
  if (items.length === 1) {
    let lib = grommet;
    if (library === 'grommet-controls') {
      lib = grommetControls;
    }
    res.json(tests.testComponent({
      baseTheme: grommet.base,
      Grommet: grommet.Grommet,
      Component: lib[items[0].name],
    }));
  } else {
    res.json('component not found');
  }
});


export default router;

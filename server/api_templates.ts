import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const allTemplates = [];
const templatesByCategory = {};

const walk = (folder, category, subDir) => {
  const results = [];
  const files = fs.readdirSync(folder);
  files.forEach((file) => {
    const fileResolved = path.resolve(folder, file);
    const stat = fs.statSync(fileResolved);
    if (stat && stat.isDirectory()) {
      results.push(...walk(fileResolved, category, [...subDir, file]));
    } else {
      const name = [...subDir.slice(1), file.substring(0, file.indexOf('.')).replace(/_/g, ' ')].join('/');
      const fileName = `templates/${subDir.join('/')}/${file}`;
      results.push({
        category, file: fileName, name,
      });
    }
  });
  return results;
};

const getAllTemplates = () => {
  const docsFolder = path.join(fs.realpathSync('.'), './docs/templates/');
  if (allTemplates.length === 0) {
    const folders = fs.readdirSync(docsFolder);
    folders.forEach((folder) => {
      const folderPath = `${docsFolder}${folder}/`;
      const files = fs.readdirSync(folderPath);
      files.forEach((file) => {
        const fileName = `templates/${folder}/${file}`;
        const fileResolved = path.resolve(folderPath, file);
        const stat = fs.statSync(fileResolved);
        if (!stat || !stat.isDirectory()) {
          // const fullFileName = `${folderPath}${file}`;
          // const code = fs.readFileSync(fullFileName).toString();
          const name = file.substring(0, file.indexOf('.')).replace(/_/g, ' ');
          const template = {
            category: folder, file: fileName, name,
          };
          allTemplates.push(template);
          if (templatesByCategory[folder] === undefined) {
            templatesByCategory[folder] = [];
          }
          templatesByCategory[folder].push(template);
        } else {
          allTemplates.push(...walk(fileResolved, folder, [folder, file]));
        }
      });
    });
  }
};

router.get('/all', (req, res) => {
  getAllTemplates();
  res.json(allTemplates);
});

router.get('/byCategory/:category?', (req, res) => {
  getAllTemplates();
  const { category } = req.params;
  if (category) {
    res.json({
      [category]: allTemplates.filter(template => template.category === category),
    });
  } else {
    res.json(templatesByCategory);
  }
});

router.get('/category/:category', (req, res) => {
  const { category } = req.params;
  getAllTemplates();
  res.json(templatesByCategory[category]);
});

router.get('/top/:limit', (req, res) => {
  const { limit } = req.params;
  getAllTemplates();
  res.json(allTemplates.slice(0, limit));
});

router.get('/file/:file', (req, res) => {
  const { file } = req.params;
  const fileName = path.join(fs.realpathSync('.'), `./docs/${file}`);
  fs.readFile(fileName,
    (err, data) => {
      res.json({
        markdown: (err && JSON.stringify(err)) || (data && data.toString()),
        content: {
          htmlUrl: `https://github.com/atanasster/grommet-nextjs/tree/master/docs/${file}`,
        },
      });
    });
});
export default router;

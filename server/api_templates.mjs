import express from 'express';
import fs from 'fs';
import npath from 'path';

const router = express.Router();

const allTemplates = [];
const templatesByCategory = {};

const getAllTemplates = () => {
  const docsFolder = npath.join(fs.realpathSync('.'), './docs/templates/');
  // nodeFile.walkSync()
  if (allTemplates.length === 0) {
    const folders = fs.readdirSync(docsFolder);
    folders.forEach((folder) => {
      const folderPath = `${docsFolder}${folder}/`;
      const files = fs.readdirSync(folderPath);
      files.forEach((file) => {
        const fileName = `templates/${folder}/${file}`;
        const fullFileName = `${folderPath}${file}`;
        const code = fs.readFileSync(fullFileName).toString();
        const name = file.substring(0, file.indexOf('.')).replace(/_/g, ' ');
        const template = { category: folder, file: fileName, code, name };
        allTemplates.push(template);
        if (templatesByCategory[folder] === undefined) {
          templatesByCategory[folder] = [];
        }
        templatesByCategory[folder].push(template);
      });
    });
  }
};

router.get('/all', (req, res) => {
  getAllTemplates();
  res.json(allTemplates);
});

router.get('/byCategory', (req, res) => {
  getAllTemplates();
  res.json(templatesByCategory);
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

export default router;

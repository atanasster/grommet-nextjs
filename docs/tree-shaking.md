#About tree shaking
We often use named imports to import a few functions from javascript files that have many other exports (for example an index.js file for a library that has many components).
 Most of the time we do not use all of the exported functions, but webpack would include the whole module anyway.

Tree shaking is called the process of removing the unusued code from your bundles.

Webpack 2 had some support for basic tree shaking, where it would recognize if a named import is not used in the current file. However this is now covered anyway by your linting tools anyway.

The Webpack 4 release expands on its tree-shaking capabilities with a way to provide hints to the compiler via the "sideEffects" package.json property to denote which files in your project are "pure" and therefore safe to prune if unused.
 Here is the guide on [Webpack 4 tree shaking](https://webpack.js.org/guides/tree-shaking/).

All of grommet, grommet-icons and grommet-controls do have "sideEffects" truned off in their respective package.json configuration files, and thus ready for webpack 4 tree-shaking.


#Webpack 4

#transform-imports

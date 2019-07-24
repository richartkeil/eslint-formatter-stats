# eslint-formatter-stats

> Formatter for [ESLint](https://eslint.org)


## What it is

A helpful formatter when introducing ESLint to large codebases. It displays
errors and warnings with the `codeframe` view and appends a summary with the
`eslint-stats` view ([Package on GitHub](https://github.com/ganimomer/eslint-stats)).

This allows to easily fix rule by rule and know which cause the most issues 💡✅🎉


## Install

```
$ npm install --save-dev eslint-formatter-stats
```


## Usage

### ESLint CLI

```
$ eslint -f stats file.js
```


## License

MIT

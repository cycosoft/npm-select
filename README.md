<div align="center">
  <h1>npm-select</h1>
</div>
<p align="center">Display package.json scripts as a list of keyboard selectable line items</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@cycosoft/npm-select">
    <img src="https://img.shields.io/npm/v/@cycosoft/npm-select?color=6988e6&label=version">
  </a>
</p>

<br />
<br />

## Install

```bash
npm i @cycosoft/npm-select --save-dev
```

## Options

| Parameter | Default | Description |
| --- | --- | --- |
| `--filter` | | Regex pattern to filter scripts by name |
| `--exclude` | `--.*\|\/\/.*` | Regex pattern to exclude scripts by name |


## Examples

```json
"scripts": {
  "--------- DEMO: DEFAULT ---------": "",
  "start": "npm-select",
  "--------- DEMO: MENU GROUP ---------": "",
  "menu": "npm-select --filter \"^dev$|^tests$\"",
  "--------- DEMO: SPECIFICITY ---------": "",
  "dev": "npm-select --filter \"^dev:lite$|^dev:full$|^dev:fix$|^test:dev$\"",
  "dev:lite": "echo 'dev:lite'",
  "dev:full": "echo 'dev:full'",
  "dev:fix": "echo 'dev:fix'",
  "--------- DEMO: GROUP ---------": "",
  "tests": "npm-select --filter ^test:",
  "test:dev": "echo 'test:dev'",
  "test:eyas": "echo 'test:eyas'",
  "test:ui": "echo 'test:ui'",
  "test:ci": "echo 'test:ci'",
  "--------- DEMO: EXCLUDE ---------": "",
  "exclude": "npm-select --exclude \"::.*|--.*|\/\/.*|^menu$|^start$|^tests$|^dev$\"",
  "--------- EXCLUDE EXAMPLES ---------": "",
  "//comment.slash": "echo 'example // comment'",
  "::comment.colon": "echo 'example :: comment'",
  "--comment.dash": "echo 'example -- comment'"
}
```

### `npm start`

<img src="https://raw.githubusercontent.com/cycosoft/npm-select/refs/heads/main/readme/npm_start.gif" alt="npm start" width="370" />

### `npm run dev`

<img src="https://raw.githubusercontent.com/cycosoft/npm-select/refs/heads/main/readme/npm_run_dev.jpg" alt="npm run dev" width="370" />

### `npm run tests`

<img src="https://raw.githubusercontent.com/cycosoft/npm-select/refs/heads/main/readme/npm_run_tests.jpg" alt="npm run tests" width="370" />

### `npm run menu`

<img src="https://raw.githubusercontent.com/cycosoft/npm-select/refs/heads/main/readme/npm_run_menu.jpg" alt="npm run menu" width="370" />

### `npm run exclude`

<img src="https://raw.githubusercontent.com/cycosoft/npm-select/refs/heads/main/readme/npm_run_exclude.jpg" alt="npm run exclude" width="370" />

#### Author

> `npm-select` is maintained by [Cycosoft, LLC](https://cycosoft.com)

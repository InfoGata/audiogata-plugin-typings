# audiogata-plugin-typings

[![npm (scoped)](https://img.shields.io/npm/v/@infogata/audiogata-plugin-typings)](https://www.npmjs.com/package/@infogata/audiogata-plugin-typings)

Types for [audiogata](https://www.audiogata.com) plugins.

## Installation

```sh
npm i --save-dev @infogata/audiogata-plugin-typings
```

## Usage

Configure _tsconfig.json_

```js
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/@infogata"
    ]
  }
}
```

or

Import in script

```js
import "@infogata/audiogata-plugin-typings";
```

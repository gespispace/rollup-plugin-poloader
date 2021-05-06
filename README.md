# Po loader plagin for rollup

A Rollup plugin which converts po file in json for jed.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Rollup v1.20.0+.

## Install

Using npm:

```console
npm install rollup-plugin-poloader --save-dev
```
## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import po from 'rollup-plugin-poloader';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [po()]
};
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

## Options

### `fuzzy`
Type: `Boolean` <br>
Default: `false`

Whether to include fuzzy translation in JSON or not. 

### `stringify`
Type: `Boolean` <br>
Default: `false`

If `true`, returns a JSON string. Otherwise returns a plain Javascript object.

### `pretty`
Type: `Boolean` <br>
Default: `false`

If `true`, the resulting JSON string will be pretty-printed. Has no effect when `stringify` is `false`.

### `format`
Type: `String` <br>
Default: `raw`

* `raw` produces a "raw" JSON output.
* `jed` produces an output that is 100% compatible with Jed >= 1.1.0
* `jedold` produces an output that is 100% compatible with Jed < 1.1.0
* `mf` produces simple key:value output.

### `domain`
Type: `String` <br>
Default: ``

the domain the messages will be wrapped inside. Only has effect if `format: 'jed'`

### `fallback-to-msgid`
Type: `Boolean` <br>
Default: `false`

If `true`, for those entries that would be omitted (fuzzy entries without the fuzzy flag) and for those
that are empty, the msgid will be used as translation in the json file. If the entry is plural, msgid_plural will be used for
msgstr[1]. This means that this option makes sense only for those languages that have nplurals=2.

### `exclude`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should _ignore_. By default no files are ignored.

### `include`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should operate on. By default all files are targeted.

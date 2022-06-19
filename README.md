![Smoldash logo](/smoldash.svg)

![Smoldash bundle size](https://img.badgesize.io/https:/cdn.jsdelivr.net/npm/smoldash@0.11.0/dist/esm/index.min.js?compression=gzip)

# Smoldash - Tiny 2kb Lodash alternative

_Note: This library hasn't been battle tested yet. There may be bugs, although none have been reported so far._

Lodash is an amazing utility library for JavaScript, but with recent additions to the ECMAScript much of it can be replaced with vanilla features. This library aims to be a thinner alternative with modern browsers in mind.

Supported functions:

- `_.at`
- `_.clone`
- `_.cloneDeep`
- `_.compact`
- `_.defaultsDeep` (only considers own properties)
- `_.every`
- `_.findIndex`
- `_.find`
- `_.filter`
- `_.flatten`
- `_.flow`
- `_.forEach`
- `_.get`
- `_.groupBy`
- `_.has`
- `_.head`
- `_.indexOf`
- `_.isEmpty`
- `_.isEqual`
- `_.kebabCase`
- `_.keyBy`
- `_.map` - only maps arrays
- `_.mapKeys`
- `_.mapValues`
- `_.merge`
- `_.omit`
- `_.once`
- `_.pick`
- `_.pickBy`
- `_.range`
- `_.set`
- `_.sortBy`
- `_.some`
- `_.take`
- `_.uniqBy`
- `_.uniqueId`
- `_.unset`

## Installation

```bash
npm install smoldash
# or via yarn
yarn add smoldash
```

## License

MIT, see [the LICENSE file](./LICENSE)

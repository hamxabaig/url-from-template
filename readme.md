# url-from-template [![Build Status](https://travis-ci.com/hamxabaig/url-from-template.svg?branch=master)](https://travis-ci.com/hamxabaig/url-from-template)

> A module to convert route template strings like `/my-route/:id` into valid url according to the params & query given. :rocket:


## Install

```
$ npm install url-from-template
```


## Usage

```js
const buildUrl = require('url-from-template');

buildUrl('/test/:id', {params: {id: '123'}});
//=> '/test/123'

buildUrl('/test/:id', {params: {id: '123'}, query: {awesome: 'yeah'}});
//=> '/test/123?awesome=yeah'
```


## API

### buildUrl(template, options)

#### template

Type: `string`

Template to generate url from. For params, you can use `:` to make it a param.
> When you give param to route, you must give its value in params object in options.

#### options

Type: `Object`

##### params

Type: `Object`<br>

Params to replace in template.

##### query

Type: `Object`<br>

Query params to add in route. 
> If your query has invalid value, it'll not be in the return url.

## Dependencies

It uses the following awesome libraries:
- [query-string](https://github.com/sindresorhus/query-string)
- [route-parser](https://github.com/rcs/route-parser)

## License

MIT © with :heart: & :coffee: by [Hamza Baig](http://hamxabaig.github.io)


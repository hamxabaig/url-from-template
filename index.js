'use strict';
const Route = require('route-parser');
const queryString = require('query-string');

module.exports = (template, options) => {
	if (typeof template !== 'string') {
		throw new TypeError(`Expected template to be a string, got ${typeof template}`);
	}

	if (typeof options !== 'object') {
		throw new TypeError(`Expected options to be an object, got ${typeof options}`);
	}

	let route = new Route(template).reverse(options.params || {});

	if (!route) {
		throw new Error('Template defines a param but no params were given');
	}

	if (options.query) {
		route = route + '?' + queryString.stringify(options.query);
	}

	return route;
};

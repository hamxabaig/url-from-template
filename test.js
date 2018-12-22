import test from 'ava';
import buildUrl from '.';

test('throws when invalid params', t => {
	t.throws(() => {
		buildUrl(123);
	}, TypeError);

	t.throws(() => {
		buildUrl(undefined);
	}, TypeError);

	t.throws(() => {
		buildUrl(null);
	}, TypeError);

	t.throws(() => {
		buildUrl('123', null);
	}, TypeError);

	t.throws(() => {
		buildUrl('123', undefined);
	}, TypeError);

	t.throws(() => {
		buildUrl('123', 123);
	}, TypeError);

	t.throws(() => {
		buildUrl('123', 'fail');
	}, TypeError);
});

test('returns correct url from template', t => {
	t.is(buildUrl('/route/:id', {params: {id: '123'}}), '/route/123');
	t.is(
		buildUrl('/route/:id', {params: {id: '123'}, query: {awesome: 'yeah'}}),
		'/route/123?awesome=yeah'
	);
});

test('throws error when template defines a param & no params are given', t => {
	t.throws(() => {
		buildUrl('/route/:id', {query: {awesome: 'yeah'}});
	}, Error);
});

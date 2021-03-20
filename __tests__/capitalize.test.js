import { capitalize } from '../src/capitalize.js';

test('capitalizeFunction', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('')).toEqual('');
});
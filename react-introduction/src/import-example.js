// eslint-disable
/*
Node.js
Common.js Import Syntax
*/
const foo = require('foo');
const bar = require('./bar');

/* Export single value using Common.js syntax */
module.exports = 10;
module.exports = function () {};
module.exports = {};

/* Export multiple values using Common.js syntax */
/* E.g.: Exporting this from file `a.js` */
exports.abc = {};
exports.def = [];
exports.ghi = function () {};

/* File `b.js` */
const a = require('./a');
a.ghi();

/*
ESModule Syntax
(which we use for React applications)
*/
/* Importing default value exported from file */
import foo from 'foo';
import bar from './bar';

/* Export multiple values using ESModule syntax */
/* E.g. In file `c.js` */
const abc = {};
export { abc };
export const def = [];
export const ghi = () => {};

/* Importing named exports */
/* E.g. on file `d.js` */
import { abc, def, ghi } from './c';

/* Export single value using ESModule syntax */
const SomeComponent = () => {};
export default SomeComponent;

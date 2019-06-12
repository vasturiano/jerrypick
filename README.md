# jerrypick

Pluck and omit properties from a JS object.

`pluck(obj, [prop1, prop2, ...]);`
`omit(obj, [prop1, prop2, ...]);`

[![NPM](https://nodei.co/npm/jerrypick.png?compact=true)](https://nodei.co/npm/jerrypick/)

## Quick start

```
import { pluck, omit } from 'jerrypick';
```
or
```
const { pluck, omit } = require('jerrypick');
```
or even
```
<script src="//unpkg.com/jerrypick"></script>
```

## Usage example

```
const myObj = {
  a: 3,
  b: 6,
  c: 9
};

pluck(myObj, ['a', 'c']);

// Result:
{ a: 3, c: 9 }

omit(myObj, ['a', 'b']);

// Result:
{ a: 3 }
```

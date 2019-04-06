# kilomega

> Get the right unit prefix like kilo of mega for a certain bit or byte amount.

If you want to convert `18248932` to `"17.4 MB"`.

## Installation

```shell
$ npm install kilomega
```

## Usage

With a bundler, for browsers:

```js
import { kilomega } from 'kilomega';
```

Or, for use in Node.js:

```js
const { kilomega } = require('kilomega');
```

Then:

```js
const result = kilomega(489382653442);
// result is: {
// 		amount: 455.7731127757579,
// 		iecPrefix: "gibi",
// 		iecSymbol: "Gi",
// 		prefix: "giga",
// 		symbol: "G",
// 	}
```

Complete practical example:

```js
const { kilomega } = require("kilomega");

function displayAmount(bytes) {
	const bytesize = kilomega(bytes);
	const intl = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 });

	return `${intl.format(bytesize.amount)} ${bytesize.symbol}B`;
}

const result = displayAmount(28946022);
//=> 27.6 MB
```

## API

### range( amount )

Returns an with the converted amount and corresponding prefixes.

#### amount

Type: `number`

The number of bits or bytes.

#### output

Type: `{
	amount: number;
	iecPrefix: string;
	iecSymbol: string;
	prefix: string;
	symbol: string;
}`

The converted amount and the corresponding IS and IEC prefixes.

## Tests

```shell
npm test
```

## Related

- [Wikipedia on binary prefix](https://en.wikipedia.org/wiki/Binary_prefix)

## License

MIT © 2019 [Edwin Martin](https://bitstorm.org/)

/**!
 @preserve kilomega 1.0.5
 @copyright 2019 Edwin Martin
 @license MIT
 */

const units = [
	{ prefix: "", symbol: "", iecPrefix: "", iecSymbol: "" },
	{ prefix: "kilo", symbol: "k", iecPrefix: "kibi", iecSymbol: "Ki" },
	{ prefix: "mega", symbol: "M", iecPrefix: "mebi", iecSymbol: "Mi" },
	{ prefix: "giga", symbol: "G", iecPrefix: "gibi", iecSymbol: "Gi" },
	{ prefix: "tera", symbol: "T", iecPrefix: "tebi", iecSymbol: "Ti" },
	{ prefix: "peta", symbol: "P", iecPrefix: "pebi", iecSymbol: "Pi" },
	{ prefix: "exa", symbol: "E", iecPrefix: "exbi", iecSymbol: "Ei" },
	{ prefix: "zetta", symbol: "Z", iecPrefix: "zebi", iecSymbol: "Zi" },
	{ prefix: "yotta", symbol: "Y", iecPrefix: "yobi", iecSymbol: "Yi" },
];

/**
 * Outputs an object with amount and si and iec units.
 * @param {number} amount Number of bits or bytes
 */
export function kilomega(amount) {
	const exp = amount === 0 ? 0 : Math.floor(Math.log(amount) / Math.log(1024));
	const factor = Math.pow(1024, exp);

	return Object.assign(
		{
			amount: amount / factor,
		},
		units[exp]
	);
}

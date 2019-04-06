const { kilomega } = require("./");

function displayAmount(bytes) {
	const bytesize = kilomega(bytes);
	const intl = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 });

	return `${intl.format(bytesize.amount)} ${bytesize.symbol}B`;
}

const result = displayAmount(28946022);

console.log(result);

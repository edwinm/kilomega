// Use kilomega in a browser without the need to install or build

main();

async function main() {
	const {kilomega} = await import('https://cdn.jsdelivr.net/gh/edwinm/kilomega@1.0/kilomega.js');

	const result = displayAmount(28946022);

	console.log(result);

	function displayAmount(bytes) {
		const bytesize = kilomega(bytes);
		const intl = new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 });

		return `${intl.format(bytesize.amount)} ${bytesize.symbol}B`;
	}
}

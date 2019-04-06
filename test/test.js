const { kilomega } = require("../");

test("kilomega(0)", () => {
	expect(kilomega(0)).toEqual({
		amount: 0,
		iecPrefix: "",
		iecSymbol: "",
		prefix: "",
		symbol: "",
	});
});

test("kilomega(489)", () => {
	expect(kilomega(489)).toEqual({
		amount: 489,
		iecPrefix: "",
		iecSymbol: "",
		prefix: "",
		symbol: "",
	});
});

test("kilomega(4893)", () => {
	expect(kilomega(4893)).toEqual({
		amount: 4.7783203125,
		iecPrefix: "kibi",
		iecSymbol: "Ki",
		prefix: "kilo",
		symbol: "k",
	});
});

test("kilomega(489382653442)", () => {
	expect(kilomega(489382653442)).toEqual({
		amount: 455.7731127757579,
		iecPrefix: "gibi",
		iecSymbol: "Gi",
		prefix: "giga",
		symbol: "G",
	});
});

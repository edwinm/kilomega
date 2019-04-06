declare module "kilomega";

declare function kilomega(
	amount: number
): {
	amount: number;
	iecPrefix: string;
	iecSymbol: string;
	prefix: string;
	symbol: string;
};

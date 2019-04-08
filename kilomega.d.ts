export interface Result {
	amount: number;
	iecPrefix: string;
	iecSymbol: string;
	prefix: string;
	symbol: string;
}

export function kilomega(amount: number): Result;

export as namespace kilomega;

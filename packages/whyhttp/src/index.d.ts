declare namespace whyhttp {
	export interface HttpCode {
		name: string;
		code: number;
		describe: Describer;
	}

	export interface Verbs {
		theNoun: string;
		verb: string;
		verbed: string;
		verbing: string;
	}

	export type Describer = (code: HttpCode, verbs: Verbs) => Description;

	export interface Description {
		brief: string;
		details?: string;
		tip?: string;
	}

	export const codes: Map<number, HttpCode>;

	export function codeFromError(err: string): HttpCode | undefined;
	export function unknownDescribe(err: string, verbs: Verbs): Description;
	export function describeError(err: string, verbs: Verbs): Description;
}

export = whyhttp;
export as namespace whyhttp;

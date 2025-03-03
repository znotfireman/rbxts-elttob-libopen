declare namespace Maybe {
	export type Some<Value> = { some: true; value: Value };
	export type None<Reason = string> = { some: false; reason: Reason };
	export type Maybe<Value, Reason = string> = Some<Value> | None<Reason>;

	export function Some<Value>(value: Value): Some<Value>;
	export function None<Reason>(reason: Reason): None<Reason>;
}

export = Maybe;
export as namespace Maybe;

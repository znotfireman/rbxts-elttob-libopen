type Some<Value> = { some: true; value: Value };
type None = { some: false; reason?: string };
type Maybe<Value> = Some<Value> | None;

declare namespace PushPull {
	export function yield<Values extends unknown[]>(): LuaTuple<
		[push: (...values: Values) => void, () => LuaTuple<Values>]
	>;
	export function maybe<Value>(): LuaTuple<[push: (value: Value) => void, pull: () => Maybe<Value>]>;
}

export = PushPull;
export as namespace PushPull;

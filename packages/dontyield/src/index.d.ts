export default function DontYield<Return extends LuaTuple<unknown[]>, Args extends unknown[]>(
	callback: (...args: Args) => Return,
	...args: Args
): LuaTuple<[boolean, ...Return]>;
export default function DontYield<Return, Args extends unknown[]>(
	callback: (...args: Args) => Return,
	...args: Args
): LuaTuple<[boolean, Return]>;

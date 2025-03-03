type Cleanup = () => void;
export type Connect<Args extends unknown[]> = (callback: (...args: Args) => void) => Cleanup;

export default function Event<Args extends unknown[]>(): LuaTuple<
	[connect: Connect<Args>, fire: (...args: Args) => void]
>;

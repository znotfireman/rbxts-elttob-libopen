export declare function Finally<Return, Args extends unknown[]>(
	fallible: (scope: unknown[], ...args: Args) => Return,
	...args: Args
): Return;

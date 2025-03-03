type Cleanup = () => void;
export default function FinallyTask<Args extends unknown[]>(
	taskExec: (callback: (scope: unknown[], ...args: Args) => void, scope: [], ...args: Args) => thread,
	callback: (scope: unknown[], ...args: Args) => void,
	...args: Args
): Cleanup;

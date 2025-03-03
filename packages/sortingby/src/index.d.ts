export default function sortingBy<T>(extract: (value: T) => Array<number | string>): (valueA: T, valueB: T) => boolean;

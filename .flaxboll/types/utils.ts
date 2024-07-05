export type TobjKeys<T> = { [key in keyof T]: T[keyof T] };

export type TObjProps<T> = { [key: string]: T };
export type TobjAny = TObjProps<any>;

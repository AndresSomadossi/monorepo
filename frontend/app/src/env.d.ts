/// <reference types="@rsbuild/core/types" />
/// <reference types="node" />

declare module '#*' {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const value: any;
	export = value;
}

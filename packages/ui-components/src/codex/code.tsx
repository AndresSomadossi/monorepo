import type { JSX } from 'react';

export function Code({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}): JSX.Element {
	return (
		<code className={className}>
			<p>This is parent</p>
			<p>This for children: {children}</p>
		</code>
	);
}

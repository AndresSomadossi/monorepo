import type { JSX } from 'react';
import { Card } from '#card.js';

export function Code({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}): JSX.Element {
	return (
		<code className={className}>
			<p>This is CODE in parent</p>

			<p>This for children: {children}</p>
			<Card title={''} href={''}>
				<p>This is CODE child</p>
			</Card>
		</code>
	);
}

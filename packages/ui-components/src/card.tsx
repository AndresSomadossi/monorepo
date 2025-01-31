import type { JSX } from 'react';

export function Card({
	className,
	title,
	children,
	href,
}: {
	className?: string;
	title: string;
	children: React.ReactNode;
	href: string;
}): JSX.Element {
	return (
		<div>
			{' '}
			<a
				className={className}
				href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo'`}
				rel="noopener noreferrer"
				target="_blank"
			>
				<span>SPAN</span>
				{title}
				<p>{children}</p>
			</a>
		</div>
	);
}

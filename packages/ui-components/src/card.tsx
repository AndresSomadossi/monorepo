import type { JSX } from 'react';

interface CardProps {
	title?: string;
	href?: string;
	children?: React.ReactNode;
	className?: string;
}

const Card = ({ title, href, children, className }: CardProps): JSX.Element => {
	return (
		<a
			href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo'`}
			className={className}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div style={{ border: 'solid 2px', maxWidth: '500px' }}>
				{title && <h2>{title}</h2>}
				{children}
				<span>SPAN</span>
			</div>
		</a>
	);
};

export default Card;

import type { ReactNode } from 'react';
import { Code } from '#codex/other/code.js';
// import { Code } from '#codex/other/code.js';

interface ButtonProps {
	children: ReactNode;
	className?: string;
	appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
	return (
		<button type="button" className={className} onClick={() => alert(`Hello from your ${appName} app!`)}>
			{children}
			<Code>
				<br />
			</Code>
		</button>
	);
};

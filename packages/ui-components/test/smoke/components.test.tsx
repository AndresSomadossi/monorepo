import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Button } from '#button.tsx';
import Card from '#card.tsx';

describe('Smoke Tests - Components', () => {
	describe('Button Component', () => {
		it('renders without crashing', () => {
			expect(() => render(<Button appName="test">Test Button</Button>)).not.toThrow();
		});
	});

	describe('Card Component', () => {
		it('renders without crashing with all props', () => {
			expect(() =>
				render(
					<Card title="Test Card" href="https://example.com" className="test-class">
						Test Content
					</Card>,
				),
			).not.toThrow();
		});

		it('renders without crashing with minimal props', () => {
			expect(() => render(<Card>Test Content</Card>)).not.toThrow();
		});
	});
});

import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import Card from '#card.tsx';

describe('Card', () => {
	afterEach(cleanup);

	it('renders title correctly', () => {
		const { getByText } = render(
			<Card title="Test Title" href="https://example.com">
				Card content
			</Card>,
		);
		expect(getByText('Test Title')).toBeDefined();
	});

	it('renders children content', () => {
		const { getByText } = render(
			<Card title="Test" href="https://example.com">
				Test content
			</Card>,
		);
		expect(getByText('Test content')).toBeDefined();
	});

	it('applies custom className', () => {
		const { getByRole } = render(
			<Card title="Test" href="https://example.com" className="custom-class">
				Content
			</Card>,
		);
		expect(getByRole('link').className).toBe('custom-class');
	});

	it('renders link with correct href and attributes', () => {
		const href = 'https://example.com';
		const { getByRole } = render(
			<Card title="Test" href={href}>
				Content
			</Card>,
		);
		const link = getByRole('link');
		expect(link.getAttribute('href')).toBe(
			`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo'`,
		);
		expect(link.getAttribute('target')).toBe('_blank');
		expect(link.getAttribute('rel')).toBe('noopener noreferrer');
	});

	it('renders SPAN text', () => {
		const { getByText } = render(
			<Card title="Test" href="https://example.com">
				Content
			</Card>,
		);
		expect(getByText('SPAN')).toBeDefined();
	});
});

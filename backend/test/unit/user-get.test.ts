import { APIGatewayProxyEvent } from 'aws-lambda';
import { describe, expect, it, vi } from 'vitest';
import { handler } from '#handlers/user-get.js';
import { mockUsers } from '#types/index.js';

describe('GET /users', () => {
	const mockEvent: Partial<APIGatewayProxyEvent> = {};

	it('should return all users successfully', async () => {
		const response = await handler(mockEvent as APIGatewayProxyEvent);
		const body = JSON.parse(response.body);

		expect(response.statusCode).toBe(200);
		expect(response.headers).toEqual({
			'Content-Type': 'application/json',
		});
		expect(body.users).toEqual(mockUsers);
		expect(body.count).toBe(mockUsers.length);
	});

	it('should handle internal server errors', async () => {
		// Mock console.error to prevent test output noise
		const consoleSpy = vi.spyOn(console, 'error');

		// Mock implementation to throw an error
		vi.spyOn(JSON, 'stringify').mockImplementationOnce(() => {
			throw new Error('Mocked error');
		});

		const response = await handler(mockEvent as APIGatewayProxyEvent);

		expect(response.statusCode).toBe(500);
		expect(JSON.parse(response.body)).toEqual({
			message: 'Internal server error',
		});

		consoleSpy.mockRestore();
	});
});

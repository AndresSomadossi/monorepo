import { APIGatewayProxyEvent } from 'aws-lambda';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { handler } from '#handlers/user-create.js';
import { User, mockUsers } from '#types/index.js';

describe('POST /users', () => {
	const validUser: User = {
		name: 'Test User',
		email: 'test@example.com',
		age: 25,
	};

	const createMockEvent = (body: { name: string; email: string; age: number }): Partial<APIGatewayProxyEvent> => ({
		body: JSON.stringify(body),
	});

	beforeEach(() => {
		// Reset mockUsers array before each test
		mockUsers.length = 0;
		mockUsers.push({ name: 'John Doe', email: 'john@example.com', age: 30 });
	});

	it('should create a user successfully', async () => {
		const mockEvent = createMockEvent(validUser);
		const response = await handler(mockEvent as APIGatewayProxyEvent);
		const body = JSON.parse(response.body);

		expect(response.statusCode).toBe(201);
		expect(response.headers).toEqual({
			'Content-Type': 'application/json',
		});
		expect(body.message).toBe('User created successfully');
		expect(body.user).toEqual(validUser);
		expect(mockUsers).toContainEqual(validUser);
		console.log(response);
	});

	it('should return 400 when request body is missing', async () => {
		const mockEvent = {} as APIGatewayProxyEvent;
		const response = await handler(mockEvent);
		const body = JSON.parse(response.body);

		expect(response.statusCode).toBe(400);
		expect(body.message).toBe('Request body is required');
	});

	it('should return 400 for invalid user data', async () => {
		const invalidUser = {
			name: '', // Invalid: empty name
			email: 'invalid-email', // Invalid: not an email
			age: 150, // Invalid: age > 120
		};
		const mockEvent = createMockEvent(invalidUser);
		const response = await handler(mockEvent as APIGatewayProxyEvent);
		const body = JSON.parse(response.body);

		expect(response.statusCode).toBe(400);
		expect(body.message).toBe('Validation failed');
		expect(body.errors).toBeDefined();
	});

	it('should handle internal server errors', async () => {
		const consoleSpy = vi.spyOn(console, 'error');
		const mockEvent = createMockEvent(validUser);

		// Mock JSON.parse to throw an error
		vi.spyOn(JSON, 'parse').mockImplementationOnce(() => {
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

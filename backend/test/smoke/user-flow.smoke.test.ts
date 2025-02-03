import { APIGatewayProxyEvent } from 'aws-lambda';
import { describe, expect, it } from 'vitest';
import { handler as createUserHandler } from '#handlers/user-create.js';
import { handler as getUserHandler } from '#handlers/user-get.js';

describe('User Flow Smoke Tests', () => {
	const testUser = {
		name: 'Smoke Test User',
		email: 'smoke@test.com',
		age: 28,
	};

	it('should successfully create a user and retrieve it', async () => {
		// Initial users count
		const initialGetResponse = await getUserHandler({} as APIGatewayProxyEvent);
		const initialBody = JSON.parse(initialGetResponse.body);
		const initialCount = initialBody.count;

		// Create new user
		const createEvent = {
			body: JSON.stringify(testUser),
		} as APIGatewayProxyEvent;

		const createResponse = await createUserHandler(createEvent);
		expect(createResponse.statusCode).toBe(201);

		// Verify user was added
		const getResponse = await getUserHandler({} as APIGatewayProxyEvent);
		const getBody = JSON.parse(getResponse.body);

		expect(getResponse.statusCode).toBe(200);
		expect(getBody.count).toBe(initialCount + 1);
		expect(getBody.users).toContainEqual(testUser);
	});

	it('should maintain data consistency across operations', async () => {
		const getResponse = await getUserHandler({} as APIGatewayProxyEvent);
		const body = JSON.parse(getResponse.body);

		expect(getResponse.statusCode).toBe(200);
		expect(Array.isArray(body.users)).toBe(true);
		expect(body.count).toBe(body.users.length);
	});
});

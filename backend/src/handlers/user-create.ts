import { APIGatewayProxyEvent } from 'aws-lambda';
import { LambdaResponse, UserSchema, mockUsers } from '#types/index.js';

export const handler = async (event: APIGatewayProxyEvent): LambdaResponse => {
	try {
		if (!event.body) {
			return {
				statusCode: 400,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					message: 'Request body is required',
				}),
			};
		}

		const body = JSON.parse(event.body);
		const validationResult = UserSchema.safeParse(body);

		if (!validationResult.success) {
			return {
				statusCode: 400,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					message: 'Validation failed',
					errors: validationResult.error.errors,
				}),
			};
		}

		const newUser = validationResult.data;
		// Mock successful creation by adding to mock array
		mockUsers.push(newUser);

		return {
			statusCode: 201,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				message: 'User created successfully',
				user: newUser,
			}),
		};
	} catch (error) {
		console.error('Error in createUser:', error);
		return {
			statusCode: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: 'Internal server error' }),
		};
	}
};

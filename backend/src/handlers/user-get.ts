import { APIGatewayProxyEvent } from 'aws-lambda';
import { LambdaResponse, mockUsers } from '#types/index.js';

export const handler = async (_event: APIGatewayProxyEvent): LambdaResponse => {
	try {
		return {
			statusCode: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				users: mockUsers,
				count: mockUsers.length,
			}),
		};
	} catch (error) {
		console.error('Error in getUsers:', error);
		return {
			statusCode: 500,
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: 'Internal server error' }),
		};
	}
};

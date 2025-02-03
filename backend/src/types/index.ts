import { APIGatewayProxyResult } from 'aws-lambda';
import { z } from 'zod';

// Common response type
export type LambdaResponse = Promise<APIGatewayProxyResult>;

// User schema for POST requests
export const UserSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	age: z.number().min(0).max(120),
});

export type User = z.infer<typeof UserSchema>;

// Mock data
export const mockUsers: User[] = [
	{ name: 'John Doe', email: 'john@example.com', age: 30 },
	{ name: 'Jane Smith', email: 'jane@example.com', age: 25 },
];

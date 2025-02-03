/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export const vitestConfig = defineConfig({
	test: {
		environment: 'jsdom',
	},
});

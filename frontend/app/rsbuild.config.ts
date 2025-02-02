import { resolve } from 'node:path';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
	resolve: {
		alias: {
			'#': resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add extensions as needed
	},
	plugins: [pluginReact()],
});

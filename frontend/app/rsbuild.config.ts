// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const path = require('path');
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

console.log('Resolved @ alias:', path.resolve(__dirname, 'src'));

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add extensions as needed
	},
	plugins: [pluginReact()],
});

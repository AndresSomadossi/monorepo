# @repo/ui-components

[![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)](package.json)
[![React](https://img.shields.io/badge/react-19.0.0-blue.svg)](package.json)
[![TypeScript](https://img.shields.io/badge/typescript-5.7.3-blue.svg)](package.json)

A shared React component library providing reusable UI components for the monorepo.

## Features

- 🎨 Modern React components
- 📦 TypeScript support
- ⚡️ Fast development with hot reload
- 🧪 Comprehensive testing setup with Vitest
- 🔄 Automated versioning and publishing

## Installation

This package is private and can be installed within the monorepo workspace:

```bash
pnpm add @repo/ui-components@workspace:*
```

## Available Components

- `Button`: A customizable button component
- `Card`: A versatile card component

## Usage

```tsx
import { Button } from '@repo/ui-components/button';
import { Card } from '@repo/ui-components/card';

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Available Scripts

- `pnpm dev` - Watch for changes and rebuild
- `pnpm build` - Build the package
- `pnpm test` - Run tests with Vitest
- `pnpm check:types` - Type check with TypeScript
- `pnpm check:lint` - Lint with Biome
- `pnpm bundle` - Bundle the package in CJS and ESM formats
- `pnpm generate:component` - Generate a new component
- `pnpm release` - Publish a new version

## Development

1. Run `pnpm dev` to start the development environment
2. Make changes to components in the `src` directory
3. Run tests with `pnpm test` to ensure everything works
4. Build the package with `pnpm build`

## Contributing

1. Create a new branch
2. Make your changes
3. Run tests and type checks
4. Create a changeset using `pnpm changeset`
5. Submit a pull request
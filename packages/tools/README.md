# @repo/tools

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)

A collection of shared development tools and configurations for the monorepo.

## Features

- 🛠️ Shared TypeScript configurations
- 🔍 Biome configuration for consistent code style
- 🧪 Vitest configurations for React testing
- ⚙️ Centralized development tooling

## Installation

This package is private and can be installed within the monorepo workspace:

```bash
pnpm add @repo/tools@workspace:*
```

## Available Exports

### TypeScript Configurations

```json
// tsconfig.json
{
  "extends": "@repo/tools/typescript/base"
}

// For React projects
{
  "extends": "@repo/tools/typescript/react"
}
```

### Biome Configuration

```json
// biome.json
{
  "extends": ["@repo/tools/biome"]
}
```

### Vitest Configuration

```ts
// vitest.config.ts
import { vitestConfig } from '@repo/tools/vitest/react/config';

export default vitestConfig;
```

## Available Scripts

- `pnpm check:lint` - Lint with Biome

## Development

1. Make changes to configurations in their respective directories
2. Test changes in dependent packages
3. Run linting with `pnpm check:lint`

## Contributing

1. Create a new branch
2. Make your changes
3. Test in dependent packages
4. Create a changeset using `pnpm changeset`
5. Submit a pull request
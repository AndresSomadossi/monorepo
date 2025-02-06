# @repo/frontend-app

[![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)](package.json)
[![React](https://img.shields.io/badge/react-19.0.0-blue.svg)](package.json)
[![RSBuild](https://img.shields.io/badge/rsbuild-1.1.8-blue.svg)](package.json)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-4.0.0-blue.svg)](package.json)

The main React application for the monorepo, built with modern tooling and best practices.

## Features

- ⚛️ Modern React application
- 🏎️ RSBuild for fast development and production builds
- 🎨 TailwindCSS for utility-first styling
- 📦 Shared UI components from @repo/ui-components
- 🔧 TypeScript for type safety
- 🔍 Biome for code quality

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check:types` - Type check with TypeScript
- `pnpm check:lint` - Lint with Biome

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── index.tsx    # Application entry point
│   └── index.css    # Global styles
├── rsbuild.config.ts # RSBuild configuration
└── tailwind.config.ts # TailwindCSS configuration
```

## Development

1. Run `pnpm dev` to start the development server
2. Make changes to files in the `src` directory
3. Run type checking and linting with `pnpm check:types` and `pnpm check:lint`
4. Build for production with `pnpm build`

## Contributing

1. Create a new branch
2. Make your changes
3. Run type checks and linting
4. Create a changeset using `pnpm changeset`
5. Submit a pull request
# Turborepo Project

[![Build Status](https://github.com/andressomadossi/monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/andressomadossi/monorepo/actions/workflows/ci.yml)
[![pnpm](https://img.shields.io/badge/pnpm-10.0.0-orange.svg)](https://pnpm.io)
[![Node](https://img.shields.io/badge/node-%3E%3D22.13.0-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue.svg)](https://www.typescriptlang.org/)
![Version](https://img.shields.io/github/v/release/username/repo)

A modern monorepo setup using Typescript, Turborepo and pnpm workspaces

## Project Structure

```
├── frontend/          # Frontend applications
│   └── app/          # Main React application
├── backend/          # Backend services
├── packages/         # Shared packages
│   ├── tools/       # Development tools and configurations
│   └── ui-components/ # Shared React components
└── platform/        # Platform-specific configurations
```

## Features

- 🏎️ **Turborepo** - High-performance build system
- 📦 **pnpm** - Fast, disk space efficient package manager
- ⚛️ **React** - Frontend framework
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🔧 **TypeScript** - Type safety across the entire codebase
- 📱 **RSBuild** - Modern build tool for React applications
- 🔍 **Biome** - Fast linter and formatter
- 🔄 **Changesets** - Versioning and changelog management

## Prerequisites

- Node.js >= 22.13.0
- pnpm >= 10.0.0

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm dev
```

3. Build for production:
```bash
pnpm build
```

## Available Scripts

- `pnpm dev` - Start development servers
- `pnpm build` - Build all packages and applications
- `pnpm lint` - Run linting across the codebase
- `pnpm format` - Format code using Prettier

## Workspace Structure

### Frontend

- `frontend/app` - Main React application built with RSBuild and TailwindCSS

### Packages

- `packages/ui-components` - Shared React component library
- `packages/tools` - Development tools and configurations

## Development

### Adding a New Component

To add a new component to the UI library:

```bash
cd packages/ui-components
pnpm run generate:component
```

### Version Management

This project uses Changesets for version management. To create a new changeset:

```bash
pnpm changeset
```

## License

Private
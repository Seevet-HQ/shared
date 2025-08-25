# Seevet Shared Package

This package contains shared utilities and models that can be used across different Seevet services.

## Installation

This package is managed as a Git submodule. To add it to your service:

```bash
git submodule add git@github.com:Seevet-HQ/shared.git shared
git submodule update --init --recursive
```

## Usage

### Base Model

The `BaseModel` class provides a foundation for all entities with:
- `id`: Internal integer ID for database relationships
- `uuid`: External UUID for cross-database references
- `created_at`, `updated_at`, `deleted_at`: Timestamps

```typescript
import { BaseModel } from '@seevet/shared';

export class User extends BaseModel {
  email: string;
  name: string;
  
  constructor(data?: Partial<User>) {
    super(data);
  }
}
```

## Building

```bash
npm install
npm run build
```

## Development

```bash
npm run dev  # Watch mode for development
npm run clean # Clean build artifacts
```

## Architecture Notes

- **Framework Agnostic**: These classes work with any framework (NestJS, Express, Fastify, etc.)
- **Protocol Agnostic**: Can be used with GraphQL or any other protocol
- **Type Safe**: Full TypeScript support with generics
- **Consistent**: Standardized model format across all services

# Seevet Shared Package

This package contains shared utilities and models that can be used across different Seevet services, regardless of whether they're REST or GraphQL APIs.

## Installation

This package is managed as a Git submodule. To add it to your service:

```bash
git submodule add <repository-url> shared
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

### Generic Response

Use `GenericResponse` for consistent API responses:

```typescript
import { GenericResponse } from '@seevet/shared';

// Success response
const successResponse = GenericResponse.success(userData, 'User created successfully');

// Error response
const errorResponse = GenericResponse.error('User not found');

// From existing error
const errorFromException = GenericResponse.fromError(new Error('Database connection failed'));
```

### Pagination Response

Use `PaginationResponse` for paginated data:

```typescript
import { PaginationResponse } from '@seevet/shared';

// Create paginated response
const paginatedResponse = PaginationResponse.create(
  users,           // data array
  1,               // current page
  10,              // items per page
  100,             // total items
  'Users retrieved successfully'
);

// Empty paginated response
const emptyResponse = PaginationResponse.empty(1, 10);
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
- **Protocol Agnostic**: Can be used with REST, GraphQL, or any other protocol
- **Type Safe**: Full TypeScript support with generics
- **Consistent**: Standardized response format across all services

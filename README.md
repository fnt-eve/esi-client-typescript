# ESI Client TypeScript

[![npm version](https://img.shields.io/npm/v/@fnt-eve/esi-client-typescript)](https://www.npmjs.com/package/@fnt-eve/esi-client-typescript)

## Overview
TypeScript bindings for EVE Swagger Interface (ESI). Uses [fetch](https://openapi-generator.tech/docs/generators/typescript-fetch/) under the hood.

## Installation

To install this package via npm or yarn, run:

```bash
npm install @fnt-eve/esi-client-typescript
# or
yarn add @fnt-eve/esi-client-typescript
```

## Usage

Here's a basic example of how to use the library in your project:

```typescript
import { UniverseApi, type PostUniverseNamesRequest, DefaultConfig } from '@fnt-eve/esi-client-typescript';

const esiUniverseApi = new UniverseApi(DefaultConfig)


// Workaround for typed Sets in generated service methods
// https://github.com/OpenAPITools/openapi-generator/issues/14055
// https://github.com/OpenAPITools/openapi-generator/issues/11746
const req: PostUniverseNamesRequest = {ids: [13682, 56846, 40574] as unknown as Set<number>}
esiUniverseApi.postUniverseNames(req)
```

## Building the Library
This library is built automatically from the latest Swagger JSON provided by CCP.

## Documentation

For detailed API documentation, please refer to the [EVE Swagger Interface](https://esi.evetech.net/ui/).

## License
This project is licensed under the MIT License - see the LICENSE file for details.
# ESI Client TypeScript

[![npm version](https://img.shields.io/npm/v/@fnt-eve/esi-client-typescript)](https://www.npmjs.com/package/@fnt-eve/esi-client-typescript)

## Overview

This is a TypeScript library, named `esi-client-typescript`, designed to interact with the EVE Swagger Interface (ESI). It provides easy access to various ESI endpoints for developers working with EVE Online data.

## Installation

To install this package via npm or yarn, run:

```bash
npm install @fnt-eve/esi-client-typescript
# or
yarn add @fnt-eve/esi-client-typescript
```

## Usage

Here's a basic example of how to use the library in your project:

```
import { EsiClient } from '@fnt-eve/esi-client-typescript';

const esi = new EsiClient();

// Example usage
esi.getCharacter(123456789).then(character => console.log(character));
```

## Building the Library
This library is built automatically from the latest Swagger JSON provided by CCP. The build process involves:
1. Fetching the latest Swagger JSON from ESI's official site.
2. Generating TypeScript types and API clients based on this JSON schema.
3. Bundling these into a distributable format (JavaScript and TypeScript definitions).

## License
This project is licensed under the MIT License - see the LICENSE file for details.
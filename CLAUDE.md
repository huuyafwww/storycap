# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Storycapture is a Storybook addon that captures screenshot images of stories using Puppeteer. It's primarily used for visual regression testing with tools like reg-suit. This project is a fork of storycap with support for Storybook v10.

**Requirements:**

- Node.js >=20.19
- Storybook v10

## Build Commands

```sh
# Install dependencies (monorepo setup)
yarn --frozen-lockfile
yarn bootstrap

# Build all packages
yarn build

# Build specific package
cd packages/storycapture
yarn build

# Lint and format
yarn lint          # ESLint
yarn format        # Prettier write
yarn format:check  # Prettier check

# Tests
yarn test          # All unit tests
cd packages/storycapture && yarn test  # Package-specific tests

# E2E tests
./e2e.sh                          # Run all examples
./e2e.sh examples/v10-simple-react  # Run specific example

# Update documentation (ToC and CLI help)
yarn doc
```

## Architecture

### Monorepo Structure (Lerna)

The repository uses Lerna with a single main package:

- `packages/storycapture` - Main application source code

### Code Organization

The main package has three distinct code paths:

**Client-side code** (`src/client/`):

- Runs in the browser within Storybook
- `with-screenshot.ts` - Storybook decorator that triggers screenshots
- `register.ts` - Storybook addon registration (sets `__STORYCAP_MANAGED_MODE_REGISTERED__`)
- `trigger-screenshot.ts` - Communicates screenshot options to the capture process
- `is-screenshot.ts` - Utility to detect if running in capture mode

**Node-side code** (`src/node/`):

- `main.ts` - Entry point for capture process
- `cli.ts` - CLI argument parsing (yargs)
- `capturing-browser.ts` - Puppeteer browser management
- `screenshot-service.ts` - Orchestrates parallel screenshot capture
- `shard-utilities.ts` - Story distribution for parallel execution

**Shared code** (`src/shared/`):

- `types.ts` - TypeScript type definitions
- `screenshot-options-helper.ts` - Screenshot option processing

### Two Operational Modes

1. **Simple mode**: No Storybook configuration needed. Just provide a URL.
2. **Managed mode**: Requires addon registration (`storycapture/register`) and `withScreenshot` decorator. Enables per-story screenshot options.

Mode detection happens in `main.ts` by checking for `__STORYCAP_MANAGED_MODE_REGISTERED__` global.

### Key Dependencies

- `storycrawler` - Provides StorybookConnection, StoriesBrowser, and Chromium management
- `puppeteer-core` - Browser automation (users can optionally install full `puppeteer`)
- `micromatch` - Story filtering by glob patterns

### ESM-Only Package

The package is ESM-only (`"type": "module"`) and builds to `lib/` directory. All imports use `.js` extensions for Node.js ESM compatibility.

# Contribution

<!-- toc -->

- [Directory structure](#directory-structure)
- [Setup](#setup)
- [Lint and format](#lint-and-format)
- [Build](#build)
  - [Build all packages](#build-all-packages)
  - [Build a specific package](#build-a-specific-package)
- [Unit test](#unit-test)
  - [Test all packages](#test-all-packages)
  - [Test a specific package](#test-a-specific-package)
- [E2E test](#e2e-test)
  - [All Storybook versions](#all-storybook-versions)
  - [Single Storybook](#single-storybook)
- [Update documents' ToC and CLI usage section](#update-documents-toc-and-cli-usage-section)

<!-- tocstop -->

## Directory structure

This repository adopts mono-repo structure using pnpm.

Each package has the following role:

- `packages/storycapture` : Contains Storycapture's main application source code. This packages has a responsibility for capturing screenshots and depends on `storycrawler`.

## Setup

Clone this repository and execute the following:

```sh
$ yarn --frozen-lockfile
$ yarn bootstrap
```

## Lint and format

```sh
$ pnpm lint
```

## Build

### Build all packages

```sh
$ yarn build
```

### Build a specific package

```sh
$ cd packages/<package-name>
$ yarn build
# or
$ yarn run tsc -p tsconfig.build.json
```

## Unit test

### Test all packages

```sh
$ yarn test
```

### Test a specific package

```sh
$ cd packages/<package-name>
$ pnpm test
```


# Vite + React + Typescript + Antd + Eslint + Prettier

A starter for React with Typescript with the fast Vite and component with antd and all static code testing with Eslint and formatting with Prettier.

## Installation

`yarn`  
`yarn prepare`

## Start

After the successfull installation of the packages: `yarn start`

## Build

### dev

`yarn build`

### stg

`yarn build:stg`

### qa

`yarn build:qa`

### prd

`yarn build:prd`

## Test

`yarn test`

## Commit Guide

It is recommended to use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification as the format of your commit message.

At the same time, when the project is collaborative development, it is recommended to configure commit-lint to check the commit message in the project or in the process of continuous integration to restrict the compliance of the commit of the collaborative developer to the specification.

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

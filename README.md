# AWS Login OKTA

A basic CLI tool for logging into AWS via OKTA, cross-platform.

## Prerequisites

- **Node.js**: v18.0.0 or later (compatible with modern Node.js runtimes including Node 20+ and Node 24+)
- **AWS CLI / Credentials**: Configured `~/.aws/credentials` or `~/.aws/config` profiles

## Installation

```bash
git clone https://github.com/andylockran/aws-login-okta.git
cd aws-login-okta
npm install
```

## Usage

Start the interactive CLI tool:

```bash
npm start
```

Or link it globally:

```bash
npm link
aws-login-okta
```

## Features & Architecture

- **AWS SDK v3**: Migrated to modular `@aws-sdk/client-sts` and `@aws-sdk/credential-providers` (`fromIni`) for identity verification and profile credentials.
- **@inquirer/prompts**: Interactive modern prompts with clean input validation.
- **Configstore**: Local credential and instance URL persistence.
- **e18e Modernized**: Replaced legacy shims and polyfills with native runtime features (`console.clear`, `picocolors`).

## Running Tests

Run the native test suite:

```bash
npm test
```

## License

[Apache-2.0](LICENSE)

# Test Automation Examples

This repository contains examples of test automation setup up by [Phil May](https://github.com/snk495). It is used purely for demonstation purposes.

## Features

- Basic E2E tests using the Playwright framework.

## Installation

Clone the repository using [git](https://git-scm.com) as follows:

```sh
git clone https://github.com/snk495/GitHub.git
```

### C#

C# tests require [dotnet](https://dotnet.microsoft.com/en-us/) and [powershell](https://learn.microsoft.com/en-gb/powershell/scripting/install/installing-powershell?view=powershell-7.4).

Install the dependencies as follows:

```sh
cd Playwright/C#/Luma
dotnet add package Microsoft.Playwright.NUnit
dotnet build
pwsh bin/Debug/net{version-number}/playwright.ps1 install
```

### JS/TS

JS and TS tests require [Node.js](https://nodejs.org/).

Install the dependencies and devDependencies by language as follows:

```sh
cd Playwright/{TS/JS}
npm install
```

## Usage

With dependencies installed, from the dependency install folder for a given language, run the following command to execute tests:

### C#

```sh
dotnet test
```

### TS/JS

```sh
npx playwright test
```

## License

MIT

## Thanks

[Adobe/Magento](https://business.adobe.com/products/magento/magento-commerce.html) - for use of it's LUMA demo store
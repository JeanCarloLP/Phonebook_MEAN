# Phonebook_MEAN
In this repository you can find a small example of a MEAN stack application.
The project is about a simple phonebook to deploy a list of contacts. The user will be available to create new entrances, edit or delete an specific contact.

It is divided by a few main sections to explain the deployment and functionality of the template.

## Prerequisites

In case you want to check directly the code on your code editor and make some enhancements, remember you must use at leats the following:
Both the CLI and generated project have dependencies that require Node 8.9 or higher, together
with NPM 5.5.1 or higher.
You will need a code editor, in my case I use Visual Studio Code.
The Angular version is the stable Angular 8.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Angular](#angular)
* [License](#license)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

### Install Globally
```bash
npm install -g @angular/cli
```

### Install Locally
```bash
npm install @angular/cli
```

To run a locally installed version of the angular-cli, you can call `ng` commands directly by adding the `.bin` folder within your local `node_modules` folder to your PATH. The `node_modules` and `.bin` folders are created in the directory where `npm install @angular/cli` was run upon completion of the install command.

Alternatively, you can install [npx](https://www.npmjs.com/package/npx) and run `npx ng <command>` within the local directory where `npm install @angular/cli` was run, which will use the locally installed angular-cli.

### Install Specific Version (Example: 6.1.1)
```bash
npm install -g @angular/cli@6.1.1
```

## Usage

```bash
ng help
```

## Angular

```bash
npm install -g @angular/cli
```

To check the version you can check the info on the package.json file and examine the diferent setted packages.

After download the project, and position yourself at the project folder, to deploy the application use the following command:

```bash
ng serve -o
```

For the style section on the frontend I use Angular material.

```bash
ng add @angular/material
```

## License

[MIT](https://github.com/angular/angular-cli/blob/master/LICENSE)


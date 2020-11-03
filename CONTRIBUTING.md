# Contributing

## Stack

| Type            | Tool                                                               |
| --------------- | ------------------------------------------------------------------ |
| Package manager | [Yarn](https://yarnpkg.com/)                                       |
| Linter          | [Eslint](https://eslint.org/) / [Stylelint](https://stylelint.io/) |
| Server Mock     | [MirageJs](https://miragejs.com/)                                  |

## Setup

The application uses version [14.15.0 LTS do nodejs](https://nodejs.org/en/).

### Run the project locally

clone the project:

```sh
$ git clone git@github.com:quero-edu/upa-web.git
$ cd upa-web
```

Install the dependencies

```sh
$ yarn install --frozen-lockfile
```

start the local server

```sh
$ yarn serve
```

The development environment use the mirageJS as a mock server

## Automatic Tasks

- `yarn serve`: Runs the app in the development mode.
- `yarn test`: Launches the test runner in the interactive watch mode.
- `yarn build`: Builds the app for production to the **dist** folder.
- `yarn lint`: Run linter on JS and css files
- `yarn test`: Run application testing
- `yarn commit`: A cli to generate your commit following the gitmoji pattern

## Continuous Integration

each submission in the main branch triggers a pipeline

the pipeline executes the linters, then the tests and, if all goes well, it deploys the demo on github pages

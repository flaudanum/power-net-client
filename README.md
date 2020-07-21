# PowerNet - Client

PowerNet is an application for modeling electrical transmission networks and making power flow computations.

This is the repository of the web client for _Power Net_. This application consumes the API provided by [PowerNet Server](https://github.com/flaudanum/power-net-server). So before running the application be sure that a local instance of it is running and served at `http://localhost:6910`. This URL may be modified by editing `src/main.ts` and changing variable `backUrl`.

## Installation

Clone this repository:

```sh
git clone https://github.com/flaudanum/power-net-client.git ./install-dir
```

or simply click on the _Code_ button and download and extract a `.zip` archive.

In order to install this application you will need the _node package installer_ `npm` that goes with `Node.js`. So install the last version of [Node.js](https://nodejs.org) first and make sure that the `bin/` folder of your install directory is addd to the environment variable `PATH`.

Next change to your local project directory and install dependencies with `npm`:

```sh
cd ./install-dir
npm install
```

## Running tests

Unit testing was developed with [JEST](https://jestjs.io/). Run the tests with:

```sh
npm run test:unit
```

or if you installed jest globally run directly:

```sh
jest --coverage
```

## Deployment

Run the following command for packaging the application for deployment:

```sh
npm run build
```

This operation creates the `dist/` folder which contains the packages application. This folder is aimed at being deployed to any static HTTP server.

If you want to run in _development mode_ execute:

```sh
npm run serve
```

## User guide

The usage is exposed by a tutorial available at the [documentation page](docs/documentation.md).

## ToDos

- [FIX] add voltage angle at buses to the `Bus` interface
- Complete unit test cover
- CRUD operations with forms
- Mising unit tests
- In the page _User Home_, load a summary of available networks instead of loading all the networks
  - An **upgrade** of the server API is required
  - `Summaries` should be a collection of documents nested in documents of the `Users` collection
- Error handling & testing
- Make the navbar and the sidebar stick to their position when scrolling down the page
- End tot end testing

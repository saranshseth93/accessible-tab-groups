# Accessible Tab Groups

Making tab groups accessible with ReactJS and Redux.
Testing it using Cypress.io

## Features

1. The tab groups are completely accessible using the screen reader as well as the keyboard navigation.

2. The tab selection is retained in local storage on refresh and browser navigation.

3. The tabs can be accessed using URL. Just type the tab label at the end of url. Example: http://localhost:3000/#Croc
   Note: The tab label is case sensitive.

4. It works across all major browsers i.e Chrome, Firefox, Edge.

5. It passes all the Cypress tests.

6. More tab groups can be added easily using the react components.

## Installation

Install my-project with npm

```bash
  npm install
```

This project was bootstrapped with Create React App.

## Running the project

To run this project execute

```bash
  npm start
```

or

```bash
  yarn start
```

## Building the project

To run this project execute

```bash
  npm build
```

or

```bash
  yarn build
```

## Running Tests

We are using Cypress for testing.
To run tests, run the following command

```bash
  npx cypress open
```

This will open a new window with the list of tests. Select the appropriate test to run it.

To run the tests in the command line run the following command

```bash
  npx cypress run
```

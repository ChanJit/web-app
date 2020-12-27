# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn`

To install the package

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Desktop view 
![Desktop](https://user-images.githubusercontent.com/20486394/103181510-a8fba080-48dc-11eb-96e3-daef3c82deae.png)

Mobile view
![Mobile](https://user-images.githubusercontent.com/20486394/103181513-ae58eb00-48dc-11eb-9860-e3da439b5bec.png)

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Cypress Test`

Majority test is tested on cypress, run the following code for the test. 

1) yarn start
2) make sure http://localhost:3000 is running
3) open a new tab in terminal. make sure is running the following code in this folder.
4) export NODE_ENV=development 
5) yarn cypress

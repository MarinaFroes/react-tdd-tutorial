<p align="center"><img src="./src/images/mylogo.svg" alt="logo" title="logo" width="80"></p>
<h1 align="center">React TDD Tutorial</h1>

This app was created by following the [CodeItWrong React TDD Livestream](https://www.youtube.com/watch?v=0aAdglT39go&list=PLXXnezSEtvNMlfJFd1Z2wilxymcOaVl9Q&index=2&t=0s) by Josh Justice. My goal is to learn TDD in React.

## Overview

- This livestream consists of 10 videos available on the [CodeItWrong youtube channel](https://www.youtube.com/watch?v=0aAdglT39go&list=PLXXnezSEtvNMlfJFd1Z2wilxymcOaVl9Q&index=1).
- The main goal is to create an app called OpinionAte to allow the user to add new restaurants and evaluate them. 

### Episode 01 - Tool setup
- Goals: 
  - We installed most of the programs we were going to need throughout the series, including: [Parcel](https://parceljs.org), [Cypress](https://www.cypress.io), [Jest](https://jestjs.io), [Enzyme](https://airbnb.io/enzyme) and [EsLint](https://eslint.org).
  - For each program installed, we also created a small mock test for a better understanding of how things would work in the future.

- Challenges: 
  - Considering this videos were recorded in 2018, some of the packages and tools used had some changes on their features or even were outdated. Even though I was following the tutorial, I had to stop from time to time to do some research and fix some breaks.
  - This was the first time I created an app using React without using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html). Josh Justice uses [Parcel](https://parceljs.org), which is a zero configuration bundler. It was interesting to build things from scratch this time, including `index.html`, initializing `git` repository, `package.json` and more. 

### Episode 02 - Our first feature
- Goals:
  - We created a small form to allow us to add restaurants on the page. 
  - We also created end-to-end tests using [Cypress](https://www.cypress.io), where we visit the address of the application, check if the expected behavior is met: the input for adding restaurants should not be in the screen, unless we click on the button, then it should disapear again, after saving the restaurant. Also, the screen should contain the name of the restaurant after it being added.
  - Finally, we also created an unit test to check if the form works as expected, which means: when we click the save button, it fires the saveHandler and when we simulate an onchange event on the input with a specific value, and click on the save button, the saveHandle would have been called with the correct value. 
- Challenges: 
  - At first, understanding the differences between end-to-end and unit tests was not so intuitive, especially when testing only a small feature. But Josh Justice's approach of coding only the very minimum to make the tests pass was really clear and made things run smoothly.

### Episode 03 - Refactor to not ugly
- Goals: 
  - At this point, we added [React Materialize](http://react-materialize.github.io/) to add some styles.
  - Also, we did some code refactoring to make it cleaner and more readable. After every change, we ran both end-to-end and unit tests to make sure the feature was still running.

- Challenges: 
  - The problems we faced on this part of the project were related to a bad or insufficient documentation on the [React Materialize](http://react-materialize.github.io/) website.
  - Also, when using a third part library, it's important to understand what's happening under the hood. The tests started to fail after adding some features from [React Materialize](http://react-materialize.github.io/) and we had to inspect the created elements to understand the new behavior of the app.

### Episode 04 - CI and Cleanup

[IN PROGRESS]


## How to install and run it

- Download the files, cd into root directory and run:
```bash
# Install dependencies
$ yarn install

# Run the app
$ yarn start
```  

## References and Resources

- [CodeItWrong React TDD Livestream](https://www.youtube.com/watch?v=0aAdglT39go&list=PLXXnezSEtvNMlfJFd1Z2wilxymcOaVl9Q&index=2&t=0s) by Josh Justice.
- [Parcel](https://parceljs.org)
- [Cypress](https://www.cypress.io)
- [Jest](https://jestjs.io)
- [Enzyme](https://airbnb.io/enzyme)
- [ESLint](https://eslint.org)
- [React Materialize](https://react-materialize.github.io/react-materialize/?path=/story/react-materialize--welcome)
- [CircleCI](https://circleci.com/)

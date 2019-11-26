# Tweet Project

This repo is a code-along udacity practice , just exprimenting thing with structure way

## Project Setup

* clone the Project - `https://github.com/tharunkumarsk/react-tweet-app.git`
* install the dependencies - `npm install`
* to start the project -`npm start`

# About Store

  * Redux applications have a single store. We have to pass the Root Reducer to our createStore() function 
    in order for the store to know what pieces of state it should have. 

  * The point of creating a store is to allow components to be able to access it without having to pass the data down through multiple components.

  * The Provider component (which comes from the react-redux package) makes it possible for all components to access the store via the connect() function.

# Middleware

  * For Example creating a logger middleware that will help us view the actions and state of the store as we interact with our application.
  * Idf actions are returned as functions rather than Objects then react-thunk come into picture
  * All middleware follows this currying pattern:
        const logger = (store) => (next) => (action) => {
        // ...
        }


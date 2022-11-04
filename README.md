This bootstrap is based on this project, please click me. :) [Web page link](https://thabiso-sov-tech-challange.vercel.app/).

Below you will find some information on how to perform common tasks.

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-dev)
  - [npm start](#npm-start)
  - [npm run link](#npm-run-link)
- [Supported browsers](#supported-browsers)
- [Installing a Dependency](#installing-a-dependency) 
- [Importing a Component](#importing-a-component)
  - [Developer component](#pagescomponentsdeveloperjsx)
  - [Hobby component](#pagescomponentshobbiesjsx)
  - [Self component](#pagescomponentsselfjsx)
  - [Loading component](#pagescomponentsloadingjsx)
- [Data](#data)
  - [Data view](#datadatajs)
- [API](#api)
  - [Developer API](#pagesapideveloperindexjs)
  - [Hobbies API](#pagesapihobbiesindexjs)
  - [Self API](#pagesapiselfindexjs)
- [Styles](#styles)
  - [Global](#globalcss)
  - [Home](#homemodulecss)
- [State handling](#state-handling)
  - [Action](#actions)
  - [Reducer](#reducers)
  - [Store](#store)

## Introduction

```
I'll take you through this project, It's a simple web page where I talk about myself, my hobbies, and why do I want to join sovtech, lastly theres a copyright section on the web page. Its a full stack application where I introduced Redux the project. I also included how to install the whole project and dependencies.
```

## Folder Structure 

```
Thabiso-Portfolio/
  actions/
    dataActions.js
  assets/
    TeachBit-Header.png
  constants/
    dataConstants.js
  data/
    data.js
  pages/
    api/
      developer/
        index.js
      hobbies/
        index.js
      self/
        index.js
      index.js
    components/
      Developer.jsx
      Hobbies.jsx
      Loading.jsx
      Self.jsx
    _app.js
    _document
    index.js
  public/
    favicon.ico
    vercel.svg
  reducers/
    dataReducer.js
  store/
    store.js
  styles/
    global.css
    Home.module.css
  .gitignore
  next.config.js
  package-lock.json
  package.json
  README.md
```

## Installing the project

Make sure you have nodejs installed in your machine. Run this command `npx create-next-app <project-name>` in your terminal.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm start`

Runs a production `build` folder

### `npm run link`

It helps prevent bugs and allow us to write much more readable code


## Supported browsers

NextJS is supported by modern Browsers, this project can either be ran on the below broswers

`Chrome 64+`
`Edge 79+`
`Firefox 67+`
`Opera 51+`
`Safari 12+`

## Installing a Dependency

The generated project includes React, React-Dom and Next as dependencies. It also includes a set of scripts used by Create Next App as a development dependency. You may install other dependencies with `npm` or `yarn`:

You can run the following command to install all the dependencies

`npm install` or if you chose yarn then delete the package-lock.json file and run `yarn install`

or 

run the following commands to install each package

For axios run:

```sh
npm install --save axios
```

Alternatively you may use `yarn`:

```sh
yarn add axios
```

For react-redux run:

```sh
npm install --save react-redux
```

Alternatively you may use `yarn`:

```sh
yarn add react-redux
```

For react-spinners run:

```sh
npm install --save react-spinners
```

Alternatively you may use `yarn`:

```sh
yarn add react-spinners
```

For react-toastify run:

```sh
npm install --save react-toastify
```

Alternatively you may use `yarn`:

```sh
yarn add react-toastify
```

For redux run:

```sh
npm install --save redux
```

Alternatively you may use `yarn`:

```sh
yarn add redux
```


For redux-devtools-extension run:

```sh
npm install --save redux-devtools-extension
```

Alternatively you may use `yarn`:

```sh
yarn add redux-devtools-extension
```

For redux-thunk run:

```sh
npm install --save redux-thunk
```

Alternatively you may use `yarn`:

```sh
yarn add redux-thunk
```

## Importing a Component

This project consists of 4 components

Developer.js

### `pages/components/Developer.jsx`

```js
import React, { useEffect } from 'react'
// ...

const Developer = () => {
  // ...
  return {
    // ...
  }
}

export default Developer 
```

### `pages/components/Hobbies.jsx`


```js
import React, { useEffect } from 'react'
// ...

const Hobbies = () => {
  // ...
  return {
    // ...
  }
}

export default Hobbies 
```

### `pages/components/Self.jsx`


```js
import React, { useEffect } from 'react'
// ...

const Self = () => {
  // ...
  return {
    // ...
  }
}

export default Self 
```

### `pages/components/Loading.jsx`


```js
import React, { useEffect } from 'react'
// ...

const Loading = () => {
  // ...
  return {
    // ...
  }
}

export default Loading 
```

- The `Loading.jsx` component is imported to `Developer.jsx`, `Hobbies.jsx`, and `Self.jsx` files
- The `Developer.jsx`, `Hobbies.jsx`, and `Self.jsx` imported to `pages/index.js` file.

## Data

I used a data instead of a database

### `data/data.js`

```js
export const developerData = [
  // ...
]

export const hobbiesData = [
  // ...
]

export const selfData =[
  // ...
]
```
These data are imported to the 3 API's below

## API

The projects consts of 3 simple API's

### `pages/api/developer/index.js`

```js
const { developerData } = require('../../../data/data')

export default function developerDataHandler(req, res) {
    // ...  
}
```

### `pages/api/hobbies/index.js`

```js
const { hobbiesData } = require('../../../data/data')

export default function hobbiesDataHandler(req, res) {
    // ...  
}
```

### `pages/api/self/index.js`

```js
const { selfData } = require('../../../data/data')

export default function selfDataHandler(req, res) {
    // ...  
}
```

## styles

CSS files which I modified to suit the project design and responsiveness

### global.css

```css
html,
body {
  /* */
}

.developer-loading {
  /* */
}

.self-loading {
  /* */
}

.hobbies-loading {
   /* */
}

@media only screen and (max-width: 768px) {
  .developer-loading {
    /* */
  }

  .self-loading {
     /* */
  }

  .hobbies-loading {
     /* */
  }
}
```

### Home.module.css

```css
.container {
  /* */
}

.wrapper{
  /* */
}

.header { 
  /* */ 
}

.header h3 {
  /* */
}

.header p {
  /* */
}

.aside { 
  /* */
}

.aside h3 {
  /* */
}

.aside p {
  /* */
}

.content { 
  /* */ 
}

.content h3 {
  /* */
}

.content p {
  /* */
}

.footer {
  /* */
}

@media only screen and (max-width: 868px) {
  .container {
    /* */
  }
  
  .header,
  .content {
    /* */
  }

  .aside {
    /* */
  }
}
```

## State handling

This project consists of redux reducers, actions and store

### actions

### `actions/dataActions.js`

```js
import axios from 'axios'
import { 
    /* import constants*/
} from "../constants/dataConstants";

export const developer_action = () => async (dispatch) => {
    // ...
}

export const self_action = () => async (dispatch) => {
   // ...
}

export const hobbies_action = () => async (dispatch) => {
    // ...
}
```

### reducers

### `reducers/dataReducers.js`

```js
import { 
    /* import constants*/
} from "../constants/dataConstants";

export const developerReducer = (state = {data:[]}, action) => {
   // ...
}

export const hobbiesReducer = (state = {data:[]}, action) => {
    // ...
}

export const selfReducer = (state = {data:[]}, action) => {
    ...
}
```

### store

### `store/store.js`

```js
mport { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { 
  /* import reducers */
} from '../reducers/dataReducer'

const reducer = combineReducers({
  /* use reducers */
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
```
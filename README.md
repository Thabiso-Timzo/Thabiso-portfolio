This bootstrap is based on this project, please click me to :) [SovTech Challange](https://thabiso-sov-tech-challange.vercel.app/).

Below you will find some information on how to perform common tasks.

## Folder Structure of the project

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

### `pages/api/hobbies/index.js`

```js
const { selfData } = require('../../../data/data')

export default function selfDataHandler(req, res) {
    // ...  
}
```

## styles

CSS files which I modified to suit the project design and responsiveness

global.css

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

becomes this:

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```


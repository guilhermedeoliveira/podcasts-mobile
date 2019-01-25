# Podcasts

A react native app

## Install

To install, run the following commands:
```bash
yarn
```

## Native dependencies

Check how to link the following libraries

https://github.com/oblador/react-native-vector-icons
https://github.com/react-native-community/react-native-video
https://github.com/kmagiera/react-native-gesture-handler

## Run

Start the server
```
yarn start
```

Use the following scripts to install the app
```
yarn android:dev
yarn ios:dev
```

## Organization

* **api** - api endpoints
* **components** - UI components
* **config** - configuration, should use `.env` files to isolate environments
* **helpers** - helpers function, because components should be as clean as possible
* **modules** - app modules
* **screens** - root level components, represents screens rendered in different routes. Screens should be functional components
* **store** - state management configured with [redux](https://github.com/reduxjs/redux) following [duck pattern](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be), using [redux-saga](https://github.com/redux-saga/redux-saga) for async calls
* **styles** - styling, uses [styled-components](https://github.com/styled-components/styled-components)

## App Features

#### Home

Renders `MainContent` and `Grid` search component.

![MainContent](https://user-images.githubusercontent.com/20259146/49482287-49ba2780-f80d-11e8-86d7-3e22fd06d8c8.png)

![Grid](https://user-images.githubusercontent.com/20259146/49482287-49ba2780-f80d-11e8-86d7-3e22fd06d8c8.png)

#### Details
Presents a carousel and a media player with controls

![DetailsScreen](https://user-images.githubusercontent.com/20259146/49482343-8423c480-f80d-11e8-93c2-22a5d80c2459.png)


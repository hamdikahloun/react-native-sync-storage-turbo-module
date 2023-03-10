# react-native-sync-storage-turbo-module

React Native Sync Storage: Turbo Native Module
```sh
Turbo Native Modules only work with the New Architecture enabled.
```

## Features

* **Fully synchronous** calls, no async/await, no Promises, no Bridge.
* **Faster than AsyncStorage**
* Uses [**JSI**](https://reactnative.dev/docs/the-new-architecture/pillars-turbomodules) instead of the "old" Bridge
* **iOS** and **Android** support

## Installation

```sh
npm install react-native-sync-storage-turbo-module
```

```sh
yarn add react-native-sync-storage-turbo-module
```

## Usage


```js
import { setItem, getItem, getAllKeys } from 'react-native-sync-storage-turbo-module';

// ...

setItem('myKey', 'My Value');

const value = getItem('myKey');

const keys = getAllKeys()

removeItem('myKey')

clear()
```

# redux-persist storage wrapper

If you want to use react-native-sync-storage-turbo-module with [redux-persist](https://github.com/rt2zz/redux-persist), create the following `storage` object:

```ts
import { Storage } from 'redux-persist'
import { setItem, getItem, removeItem } from 'react-native-sync-storage-turbo-module';

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    setItem(key, value)
    return Promise.resolve(true)
  },
  getItem: (key) => {
    const value = getItem(key)
    return Promise.resolve(value)
  },
  removeItem: (key) => {
    removeItem(key)
    return Promise.resolve()
  },
}

//...

const persistConfig = {
  //...
  storage: reduxStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT


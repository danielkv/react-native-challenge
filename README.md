# React Native Challenge

This Project was created as a challenge to Cheesecake. It was develop with `React Native` on top of `Expo` with `Typescript`.

## Features

The app has is a simple news viwer with a list of views and a screen with the details of chosen new. The news list displays which is already seen. When the new is opened it's automatically marked as read.

The state was built with React `Context API` and persistent data with `AsyncStorage`.

The persistence data API can be easily replaced for `remote database` or `server API`

# How to run this project

Since the project was built on top of EXPO, you need to have expo app installed in the smartphone. If you're using Emulator, Expo CLI should install it automatically.

Clone and install dependecies:

```
clone https://github.com/cheesecakelabs-challenges/daniel-guolo-react-native.git
git checkout init-app
yarn
```

Run on Android:

```
yarn android
```

Run on IOS:

```
yarn ios
```

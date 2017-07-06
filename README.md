# Hoodie Server integration with React Native
Integrate Hoodie Server with React Native.

## Motivation

Long story short, when using React Native and making a request to the Hoodie Server, Android somehow adds a media type parameter to the `Content-Type` header `(charset=utf-8)` and, since Hoodie follows the http://jsonapi.org/format/ this effectively breaks requests from Android clients (iOS works fine).

This plugin is basically my first attempt for a hapi plugin that "cleans up" the `Content-Type` header allowing Android requests to get in. I'm working on a project that will use this so expect updates and fixes if I find something else that's broken when integrating RN + Hoodie.

See https://github.com/hoodiehq/hoodie/issues/732 for further details.

## Usage

Just run

```
npm install hoodie-plugin-react-native-server
```

in your already existing Hoodie project and add

```
"hoodie": {
  "plugins": ["hoodie-plugin-react-native-server"]
}
```

to the project's `package.json`. After that, you should be good to go!

# React Native Remix Icon

React native implementation for the popular [RemixIcon](https://remixicon.com) open source library. This library is a fork of (https://github.com/ajayesivan/react-native-remix-icon) since it seemed to be no longer maintained for my use case.

This library includes all the latest icons as per Remix v4.3.0 and is fully typesafe.

### Install

Using yarn

```bash
yarn add remix-icons-rn
```

Using npm

```bash
npm install remix-icons-rn
```

This library relies on the `react-native-svg` package to render svg icons. Install the `react-native-svg` package,

```bash
yarn add react-native-svg
```

or

```bash
npm install react-native-svg
```

### Usage

```javascript
import Icon from "react-native-remix-icon";
```

```javascript
<Icon name="home-fill" size="48" color="red">
```

### Props

| Prop  | Default          | Description                                                                                       |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------- |
| name  | `remixicon-fill` | Name of the icon. Explore the [remixicon](https://remixicon.com) library for all valid icon names |
| size  | `24`             | Size of the icon                                                                                  |
| color | `black`          | Color of the icon                                                                                 |

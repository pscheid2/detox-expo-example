# detox-expo-example

Basic detox test setup for expo demo project generated from `expo init myNewProject`

https://github.com/yaron1m/expo-detox-typescript-example was a big help getting this working.

Uses: Expo SDK 37, Detox 15.5.0

## Setup

1. Run `./scripts/downloadExpoBinaries.sh`. These copies of the expo binaries are a dependency of Detox.
2. Install end to end (e2e) testing tools: `brew tap wix/brew && brew install applesimutils`
3. Run `yarn install`
4. Start the expo app in an iOS simulator by running `yarn ios`
5. Run the tests `detox test`

- You may need to run `detox clean-framework-cache && detox build-framework-cache` if detox fails to load.
- For gray-box testing (finding by ID), Detox looks for a specific `testID` prop on a component to find it. Note that Detox only supports built-in react-native components - you will need to add `testID` as a prop to custom components and pass it through to the react-native component within in order for Detox to work on a custom component.

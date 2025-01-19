# React Native Project

This is a React Native project built with React Native CLI. It demonstrates various components and navigation. The project includes tests using Jest to ensure the functionality works as expected.

## Installation

To get started with the project, follow the steps below:

### 1. Clone the repository

```bash
git clone git@github.com:coyot1904/financial-assets.git
```

### 2. Install dependencies

First, navigate to the project directory:

```bash
cd financial-assets
```

Then, install the project dependencies:

```bash
npm install
```

### 3. Link native dependencies (if needed)

Although React Native 0.60 and above supports auto-linking for most libraries, in some cases, you might need to link dependencies manually. For the required libraries, auto-linking should work, but in case it doesn't, use:

```bash
npx react-native link
```

Install the necessary CocoaPods dependencies:

```bash
cd ios
```

```bash
npx react-native link
```

```bash
cd ..
```

### 4. Run the project

Now that everything is set up, you can run the project on your preferred platform.

For iOS:

```bash
npx react-native run-ios
```

For Android:

```bash
npx react-native run-android
```

### 5. Test the app

To run the Jest tests included with the project:

```bash
npm test
```

This command will run the tests using Jest to ensure the functionality is working as expected.

---

## Dependencies

### `dependencies` used in this project:

- **`@react-native-masked-view/masked-view`**: Provides a component to create masked views, allowing you to apply visual effects like circular or rounded corners on views.
- **`@react-native/js-polyfills`**: Adds JavaScript polyfills to ensure compatibility with older JavaScript engines.

- **`@react-navigation/native`**: A core package for setting up navigation in React Native apps, handling navigation between screens.

- **`@react-navigation/native-stack`**: Provides native stack navigation to switch between different screens with smooth transitions.

- **`@react-navigation/stack`**: Used to configure stack navigation for navigating between screens using stack-based navigation.

- **`react`**: The core React library, which is used to build components and handle the user interface logic.

- **`react-native`**: The React Native framework, allowing you to build mobile apps for iOS and Android using JavaScript and React.

- **`react-native-gesture-handler`**: Used for handling gestures in React Native apps, providing support for swipe, pinch, and drag gestures.

- **`react-native-safe-area-context`**: Provides a way to handle safe area insets on iOS devices, ensuring that UI elements are not obstructed by the device’s screen edges or notches.

- **`react-native-screens`**: Optimizes navigation in React Native apps by using native navigation components for screen transitions, improving performance.

---

## Additional Information

This project is a test to showcase the skills in React Native development. The app has been built using the following features:

- **React Navigation**: For managing screen navigation and transitions.
- **Custom Components**: Created reusable UI components to manage common tasks.
- **Jest Testing**: Ensured functionality with unit tests and component tests using Jest.

If you have any questions or need further clarification, feel free to reach out!

---

## License

This project is open-source and available under the [MIT License](LICENSE).

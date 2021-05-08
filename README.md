# The Shoppies

## Description

The Shoppies is a React Native twist on the [Shopify's Fall 2021 Intern UX & Web Challenge](https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U). The general idea behind the app follows being able to add and remove movies that are searched from the [Open Movie Database](http://www.omdbapi.com/) to a nominations list. The app's appearance was made to mimick [Shopify's Shop app](https://shop.app/). In the process of doing so, the app was designed under the [Shopify's Polaris Design Guidelines](https://polaris.shopify.com/). As of right now the app only supports Android devices.

## Features

- Polaris UX and icons
- Persistent storage of nominations list
- Paginated scrolling through search results
- Two-page navigation
- Dark theme support

## Images

<img src="https://raw.githubusercontent.com/a-arshad/TheShoppies/master/assets/demo_images/splash.png" width="200">
<img src="https://raw.githubusercontent.com/a-arshad/TheShoppies/master/assets/demo_images/light_nominations.png" width="200">
<img src="https://raw.githubusercontent.com/a-arshad/TheShoppies/master/assets/demo_images/dark_nominations.png" width="200">
<img src="https://raw.githubusercontent.com/a-arshad/TheShoppies/master/assets/demo_images/light_search.png" width="200">
<img src="https://raw.githubusercontent.com/a-arshad/TheShoppies/master/assets/demo_images/dark_search.png" width="200">

## Installation

1. Install the [React Native CLI](https://reactnative.dev/docs/environment-setup) for an Android Target OS
2. Clone the project.
3. Install npm packages. Run the following command in a terminal at the project root. 
```
npm i --legacy-peer-deps
```
4. Obtain an [OMDb API key](http://www.omdbapi.com/apikey.aspx)
5. Add the API key to the project's environment variables. Run the following command in a terminal at the project root, but replace `XXXXXXX` with your OMDb API key from the previous step. 
```
echo "OMDB_KEY=XXXXXXX" > .env
```
6. Compile and run the project. Run the following command in a terminal at the project root. 
```
npx react-native run-android --variant=release
```
 
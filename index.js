/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
// import App from './App';
import App from './src/navigations';
import {name as appName} from './app.json';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);

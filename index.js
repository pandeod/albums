//import { AppRegistry } from 'react-native';
//import App from './App';

import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

const App=()=>{
	return(
        <Header headerTextToShow={'Albums'}/>
		);
};

AppRegistry.registerComponent('albums', () => App);

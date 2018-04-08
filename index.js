//import { AppRegistry } from 'react-native';
//import App from './App';

import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
const App=()=>{
	return(
		<View>
        <Header headerTextToShow={'Albums'}/>
        <AlbumList/>
        </View>
		);
};

AppRegistry.registerComponent('albums', () => App);

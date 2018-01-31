import React from 'react';
import {Text,View} from 'react-native';

const Header =(props)=>{
  
  const {textStyle,viewStyle}=styles;
  return(	
  	 <View style={viewStyle}>
      <Text style={textStyle}>{props.headerTextToShow}</Text>
     </View>
  	);
};

const styles ={
  viewStyle:{
  	backgroundColor:'#DDDD00',
  	justifycontent:'center',
  	alignItems:'center',
  	height:50,
  	paddingTop:15,
  	shadowColor:'#000000',
  	shadowOffset:{width:0,height:5},
  	shadowOpacity:0.6,
  	elevation:2
  },
  textStyle:{
  	textSize:20,
  }
};

export default Header;
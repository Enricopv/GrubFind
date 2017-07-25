import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {

    // styles
    const styles = StyleSheet.create({
      mapButton: {
        color: 'white',
        backgroundColor: 'blue',
      },
      browseButton: {
        color: 'white',
        backgroundColor: 'green',
      },
      favoritesButton: {
        color: 'white',
        backgroundColor: 'red',
      },
      buttonGeneral: {
        fontSize: 30,
        width: 150,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
      }
    });
      
    // functions
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'}); 
    // This is where I would want to pass in a location
    const goToBrowse = () => Actions.browse({text: 'Hello World!'}); 

    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: .3}}></View>  
        <View style={{flex: .4, justifyContent: 'space-between'}}>
          <Text style={StyleSheet.flatten([styles.mapButton, styles.buttonGeneral])} onPress={goToPageTwo}>Map</Text>  
          <Text style={StyleSheet.flatten([styles.browseButton, styles.buttonGeneral])} onPress={goToBrowse}>Browse</Text>
          <Text style={StyleSheet.flatten([styles.favoritesButton, styles.buttonGeneral])} onPress={goToPageTwo}>Favorites</Text>
        </View>
        <View style={{flex: .3}}></View>
      </View>
    
    )
  }
}
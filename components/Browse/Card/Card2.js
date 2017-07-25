import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Card2 extends Component {
    render() {
      // styles
      const styles = StyleSheet.create({
        fontGeneral: {
          fontSize: 16,   
        },
        nameSection: {
          flex: .7
        },
        pricesSection: {
          flex: .3
        },
        mapSection: {
          flex: .2
        },
        distanceSection: {
          flex: .5
        },
        ratingSection: {
          flex: .5
        }
      });
      return (
        <View style={{ flex: 1}}>
          <View style={{ flex: .6}}>
            <Image
              style={{ flex: 1, resizeMode: 'cover'}}
              source={{uri: 'https://eatfoodnearme.com/wp-content/uploads/bb-plugin/cache/fish-near-me-landscape.jpg'}}
            />
          </View>
          <View style={{ flex: .4,  flexDirection: 'column' }}>
            <View style={{ flex: .2, flexDirection: 'row' }}>
              <Text style={StyleSheet.flatten([styles.nameSection, styles.fontGeneral])}>
                Cool Food Place
              </Text>
              <Text style={StyleSheet.flatten([styles.pricesSection, styles.fontGeneral])}>
                $$
              </Text>
            </View>            
            <View style={{ flex: .2, flexDirection: 'row'}}>
              <Text style={StyleSheet.flatten([styles.mapSection, styles.fontGeneral])}>
                Map
              </Text>
              <Text style={StyleSheet.flatten([styles.distanceSection, styles.fontGeneral])}>
                3mi
              </Text>
              <Text style={StyleSheet.flatten([styles.ratingSection, styles.fontGeneral])}>
                ******
              </Text>
            </View>
            <View style={{ flex: .6}}>
            </View>
          </View>
        </View>
      )
    }
}
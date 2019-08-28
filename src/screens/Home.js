import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import PokemonList from '../containers/PokemonList';

export default class Home extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={require('../../assets/wallpaper.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
            <PokemonList
            />
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  }
})

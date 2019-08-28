import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PokemonList from '../containers/PokemonList';
import PokedexList from './PokedexList';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <PokemonList />
      </View>
    )
  }
}


import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class PokedexList extends Component {

  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    const { pokemonList } = this.props;
    console.log('list', pokemonList)
    return (
      <View>
        <Text>oli </Text>
      </View>
    )
  }
}

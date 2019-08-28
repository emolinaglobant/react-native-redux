import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import PokemonItem from '../components/PokemonItem';

export default class PokedexList extends Component {

  componentDidMount() {
    this.props.fetchPokemons();
  }

  renderItem = ({item}) => <PokemonItem {...item} />

  renderKey = ({name}) => name

  render() {
    const { pokemonList } = this.props;
    console.log('list', pokemonList)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>List of Pokemons</Text>
        <FlatList 
          data={pokemonList}
          renderItem={this.renderItem}
          keyExtractor={this.renderKey}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    lineHeight: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    width: '100%',
  }
})

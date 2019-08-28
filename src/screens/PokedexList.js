import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, ImageBackground } from 'react-native'
import PokemonItem from '../components/PokemonItem';

export default class PokedexList extends Component {

  componentDidMount() {
    this.props.fetchPokemons();
  }

  renderItem = ({item}) => <PokemonItem {...item} />

  renderKey = ({name}) => name

  render() {
    const { pokemonList } = this.props;

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
          <Text style={styles.title}>List of Pokemons</Text>
          <FlatList 
            data={pokemonList}
            renderItem={this.renderItem}
            keyExtractor={this.renderKey}
          />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50
  },
  container: {
    width: '100%',
    paddingVertical: 20,
  }
})

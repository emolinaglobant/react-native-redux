import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class PokemonItem extends Component {
  render() {
    const { name } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.name}> {name} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    color: 'yellow',
    fontWeight: '500'
  }
})

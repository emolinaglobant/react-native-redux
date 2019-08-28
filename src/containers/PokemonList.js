import { connect } from 'react-redux';
import PokedexList from "../screens/PokedexList";
import { fetchPokemonList } from "../store/actions/fetchPokemonList";



const mapStateToProps = state => ({
  pokemonList: state.pokemonListReducer.payload,
  loadingList: state.pokemonListReducer.loading,
})

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchPokemonList())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokedexList)

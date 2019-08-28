import Home from "../screens/Home";
import PokedexList from "../screens/PokedexList";

const Routes = {
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  PokemonList: {
    screen: PokedexList,
    navigationOptions: { header: null }
  }
}

export default Routes;
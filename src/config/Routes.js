import Home from "../screens/Home";
import PokemonList from "../containers/PokemonList";

const Routes = {
  Home: {
    screen: Home,
    navigationOptions: { header: null }
  },
  PokemonList: {
    screen: PokemonList,
    navigationOptions: { header: null }
  }
}

export default Routes;
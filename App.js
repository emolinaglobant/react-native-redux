import PokedexList from './screens/PokedexList'
import PokedexDetails from './screens/PokedexDetails'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  PokedexList: {
    screen: PokedexList,
    navigationOptions:{
      title:'Pokedex 1.0.0'
    } 
  },
  PokedexDetails: {
    screen: PokedexDetails,
    navigationOptions:  {
        title: 'Pokemon details'
    }
  }
});

export default createAppContainer(AppNavigator);
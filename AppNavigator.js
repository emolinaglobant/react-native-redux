import {createStackNavigator, createAppContainer} from 'react-navigation';
import Routes from './src/config/Routes';

const AppNavigator = createStackNavigator(Routes);

export default AppNavigator; 
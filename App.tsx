import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Register from './src/pages/Register';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomePage' component={Home} />
        <Stack.Screen name='RegisterPage' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

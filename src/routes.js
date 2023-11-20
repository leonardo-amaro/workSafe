import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { Exames } from './pages/Exames';
import { ExamesRealizados } from './pages/ExamesRealizados';
import { Funcionarios } from './pages/Funcionarios';
import { ModalExam } from './components/modalexam';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exames" component={Exames} />
        <Stack.Screen name="ExamesRealizados" component={ExamesRealizados} />
        <Stack.Screen name="Funcionarios" component={Funcionarios} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="ModalExam" component={ModalExam} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
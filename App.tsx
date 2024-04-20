import 'react-native-gesture-handler';
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import NuevaOrden from './Screen/NuevaOrden';
import Menu from './Screen/Menu';
import DetallePlato from './Screen/DetallePlato';
import FormularioPlato from './Screen/FormularioPlato';
import ResumenPedido from './Screen/ResumenPedido';
import ProgresoPedido from './Screen/ProgesoPedido';

import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidoState';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#FFDA00'
                },
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            >
              <Stack.Screen name='NuevaOrden' component={NuevaOrden}
                options={{ title: 'Nueva Orden De Pedido' }}
              />
              <Stack.Screen name='Menu' component={Menu} />
              <Stack.Screen name='DetallePlato' component={DetallePlato} />
              <Stack.Screen name='FormularioPlato' component={FormularioPlato} />
              <Stack.Screen name='ResumenPedido' component={ResumenPedido} />
              <Stack.Screen name='ProgresoPedido' component={ProgresoPedido} />
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </NativeBaseProvider>
  )
}
export default App;
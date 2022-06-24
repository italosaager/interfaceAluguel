import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Home from './pages/Home';
import Detail from './pages/Detail';


const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} options={{title: 'ALUGUE', 
                headerRight: () => (
                    <TouchableOpacity style={{marginRight: 15}}>
                        <Feather name="shopping-bag" size={24} color="black"/>
                    </TouchableOpacity>
                )
                }}/>

                <Stack.Screen name="detail" component={Detail} options={{title: 'DETALHE', 
                headerRight: () => (
                    <TouchableOpacity style={{marginRight: 15}}>
                        <Feather name="shopping-bag" size={24} color="black"/>
                    </TouchableOpacity>
                )
                }}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;

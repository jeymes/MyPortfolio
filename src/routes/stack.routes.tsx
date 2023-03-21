import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from '../screens/Register';
import { TabRoutes } from './tab.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes(){

    return(
        <Navigator screenOptions={{ headerShown: false}} >
            
            <Screen 
                name="tab"
                component={TabRoutes}
             />
             <Screen 
                name="register"
                component={Register}
             />
         
        </Navigator>
    )
}
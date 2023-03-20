import React from 'react';
import  { Platform }  from 'react-native';
import theme from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { BottomTab } from '../components/BottomTab';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes(){

    return(
        <Navigator
        screenOptions={{
            tabBarActiveTintColor: theme.COLORS.SECONDARY,
            tabBarInactiveTintColor: theme.COLORS.BORDER,
            tabBarActiveBackgroundColor: theme.COLORS.PRIMARY,
            tabBarInactiveBackgroundColor:  theme.COLORS.PRIMARY,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 90,
                borderTopWidth: 2,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0
            }
        }}
        >
            <Screen
            name='home'
            component={Home}
            options={{
                tabBarIcon: ({ color}) =>(
                    <BottomTab
                    title='Home' 
                    color={color} 
                    />
                )
            }}
            />
           <Screen
            name='web'
            component={Home}
            options={{
                tabBarIcon: ({ color}) =>(
                    <BottomTab
                    title='Web' 
                    color={color} 
                    />
                )
            }}
            />

            <Screen
            name='orders'
            component={Home}
            options={{
                tabBarIcon: ({ color}) =>(
                    <BottomTab
                    title='Mobile' 
                    color={color} 
                    />
                )
            }}
            />

        </Navigator>
    )
}
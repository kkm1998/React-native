import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import Page from '../screens/Page';
import TodoListScreen from '../screens/TodoListScreen';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: 'purple'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="ToDoList"
                component={TodoListScreen}
                options={{
                    tabBarLabel: 'ToDoList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="clipboard" color={color} size={size} />
                    )
                }}
            />
                        <Tab.Screen
                name="Page"
                component={Page}
                options={{
                    tabBarLabel: 'Page',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="tag" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
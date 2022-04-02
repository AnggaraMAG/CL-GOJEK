import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  PageChat,
  PageHome,
  PageOrder,
  PagePromotion,
} from '../../components/pages';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={PageHome}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <View>
                <Feather
                  name="home"
                  color={focused ? 'green' : 'gray'}
                  size={focused ? 28 : 25}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Promo"
          component={PagePromotion}
          options={{
            tabBarLabel: 'Promo',
            tabBarIcon: ({focused, color}) => (
              <Feather
                name="percent"
                color={focused ? 'green' : 'gray'}
                size={focused ? 28 : 25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pesanan"
          component={PageOrder}
          options={{
            tabBarLabel: 'Pesanan',
            tabBarIcon: ({focused, color}) => (
              <Feather
                name="shopping-bag"
                color={focused ? 'green' : 'gray'}
                size={focused ? 28 : 25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={PageChat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({focused, color}) => (
              <Feather
                name="message-circle"
                color={focused ? 'green' : 'gray'}
                size={focused ? 28 : 25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

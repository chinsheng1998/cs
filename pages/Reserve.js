//This is an example code for Bottom Navigation//
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
//import all the basic component we have used
import ReserveScreen from "../screens/Reservation";
import MyReserveScreen from "../screens/MyReserve";
import ReserveHistoryScreen from "../screens/ReserveHistory";

const AppNavigator = createMaterialTopTabNavigator(
  {
    Reserve: ReserveScreen,
    Upcoming: MyReserveScreen,
    History: ReserveHistoryScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      showIcon: false,
      showLabel: true,
      style: {
        backgroundColor: 'black',
      }
    },
  }
)
export default createAppContainer(AppNavigator);  
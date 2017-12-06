import React, { Component } from "react";
import TabEdu from "./TabEdu.js";
import TabSystem from "./TabSystem.js";
import Detail from "./Detail.js";
import { StackNavigator, TabNavigator } from "react-navigation";

 const Tab = TabNavigator ({
     TabSystem: {screen: TabSystem},
     TabEdu: { screen: TabEdu}
},
     {
         tabBarPosition: 'top',
         tabBarOptions: {
             labelStyle: {
                 fontSize: 20,
             },
             tabStyle: {
                 paddingBottom:10,
             },
         },
     });

 const DrawNav = StackNavigator({
     TabEdu: { screen: Tab },
     Detail: { screen: Detail },
});
export default DrawNav;



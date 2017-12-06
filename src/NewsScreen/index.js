import React, { Component } from "react";
import News from "./News.js";
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
     });

 const DrawNav = StackNavigator({
     TabEdu: { screen: Tab },
     Detail: { screen: Detail },
});
export default DrawNav;



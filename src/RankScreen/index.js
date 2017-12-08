import React, { Component } from "react";
import Rank from "./Rank.js";
import DetailProfile from "./DetailProfile";
import TabMost from "./TabMost";
import TabReport from "./TabReport";
import TabAverage from "./TabAverage";
import TabSearch from "./TabSearch";
// import { StackNavigator } from "react-navigation";
import { StackNavigator, TabNavigator } from "react-navigation";
const Tab = TabNavigator ({
    TabMost: {screen: TabMost},
    TabAverage: { screen: TabAverage},
    TabReport: { screen: TabReport}
    },
    {
        tabBarPosition: 'top',
        tabBarOptions: {
            labelStyle: {
                fontSize: 16,
                fontWeight:'bold',
                color:'white'
            },
            tabStyle: {
                paddingBottom:12,
            },
            inactiveBackgroundColor :'#0078FF',
            activeBackgroundColor:'#0051FF',
        },
    });

const DrawNav = StackNavigator({
    Rank: { screen: Rank },
});

export const DrawNav1 = StackNavigator({
    TabMost: { screen: Tab },
    DetailProfile: { screen: DetailProfile },
    TabSearch :{screen: TabSearch}
});
export default DrawNav;

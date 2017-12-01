import React, { Component } from "react";
import DetailProfile from "./DetailProfile";
import TabMost from "./TabMost";
// import TabAverage from "./TabAverage";
import { StackNavigator } from "react-navigation";

export default (NewsNav = StackNavigator({
    TabMost: { screen: TabMost },
    // TabAverage: { screen: TabAverage },
    DetailProfile: { screen: DetailProfile }
}));

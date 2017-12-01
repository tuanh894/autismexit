import React, { Component } from "react";
import DetailProfile from "./DetailProfile";
import TabAverage from "./TabAverage";
import { StackNavigator } from "react-navigation";

export default (NewsNav = StackNavigator({
    TabAverage: { screen: TabAverage },
    DetailProfile: { screen: DetailProfile }
}));

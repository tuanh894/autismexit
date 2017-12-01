import React, { Component } from "react";
import Detail from "./Detail.js";
import TabSystem from "./TabSystem.js";
import { StackNavigator } from "react-navigation";

export default (NewsNav = StackNavigator({
    TabSystem: { screen: TabSystem },
    Detail: { screen: Detail },
}));

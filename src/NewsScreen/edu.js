import React, { Component } from "react";
import Detail from "./Detail.js";
import TabEdu from "./TabEdu.js";
import { StackNavigator } from "react-navigation";

export default (NewsNav = StackNavigator({
    TabEdu: { screen: TabEdu },
    Detail: { screen: Detail }
}));

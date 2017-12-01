import React, { Component } from "react";
import Rank from "./Rank.js";
import DetailProfile from "./DetailProfile";
import TabMost from "./TabMost";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
    Rank: { screen: Rank },
    DetailProfile: { screen: DetailProfile },
    TabMost: { screen: TabMost },
}));

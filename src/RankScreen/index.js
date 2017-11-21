import React, { Component } from "react";
import Rank from "./Rank.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
    Rank: { screen: Rank }
}));

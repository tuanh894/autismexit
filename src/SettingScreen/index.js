import React, {Component} from "react";
import Setting from "./Setting.js";
import {StackNavigator} from "react-navigation";

export default (DrawNav = StackNavigator({
    Setting: {screen: Setting},
}));

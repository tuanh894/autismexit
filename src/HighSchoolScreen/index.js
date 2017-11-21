import React, {Component} from "react";
import HighSchool from "./HighSchool.js";
import {StackNavigator} from "react-navigation";

export default (DrawNav = StackNavigator({
    HighSchool: {screen: HighSchool}
}));

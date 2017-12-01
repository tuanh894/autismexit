import React, { Component } from "react";
import Take from "./Take.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
    Take: { screen: Take },
}));

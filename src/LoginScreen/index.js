import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Login from "./LoginScreen.js";
export default (DrawNav = StackNavigator({
    Login: { screen: Login }
}));

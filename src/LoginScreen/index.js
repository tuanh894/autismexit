import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Login from "./LoginScreen.js";
import Logout from "./Logout";
export default (DrawNav = StackNavigator({
    Logout: { screen: Logout },
    Login: { screen: Login }
}));

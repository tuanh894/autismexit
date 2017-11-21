import React, { Component } from "react";
import News from "./News.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  News: { screen: News }
}));

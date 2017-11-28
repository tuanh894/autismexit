import React, { Component } from "react";
import News from "./News.js";
import Detail from "./Detail.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  News: { screen: News },
    Detail: { screen: Detail },
}));

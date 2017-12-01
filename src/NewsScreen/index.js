import React, { Component } from "react";
import News from "./News.js";
import TabSystem from "./system.js";
import TabEdu from "./edu.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
    News: { screen: News },
    TabEdu: { screen: TabEdu },
    TabSystem: { screen: TabSystem }
}));

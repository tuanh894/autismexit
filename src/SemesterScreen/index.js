import React, { Component } from "react";
import Semester from "./Semester.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Semester: { screen: Semester }
}));

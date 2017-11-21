import React, { Component } from "react";
import Exam from "./Exam.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  Exam: { screen: Exam }
}));

import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,Tab, Tabs,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";
import DrawNav from './index';
export default class News extends React.Component {

    constructor(props) {
        super(props);
        console.log("++++++++++++++++1 Tab education news...");
        console.log(props);
    }

  render() {
    console.log(this.props);
    return (
      <DrawNav/>
    );
  }
}

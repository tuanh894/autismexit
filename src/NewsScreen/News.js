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
import { StackNavigator } from "react-navigation";
import TabEdu from './TabEdu';
import TabSystem from './TabSystem';
export default class News extends React.Component {
  render() {
    return (
      <Container>
        <Tabs initialPage={1}>
          <Tab heading="Tin hệ thống">
            <TabSystem />
          </Tab>
          <Tab heading="Tin giáo dục">
            <TabEdu />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
News.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Tin tức</Title>
      </Body>
      <Right />
    </Header>
  )
});

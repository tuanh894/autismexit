import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,  
  List,
  ListItem,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";
import { StackNavigator } from "react-navigation";

export default class Rank extends React.Component {
  render() {
    return (
<Container>
        <Header />
        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="user" />
              </Left>
              <Body>
                <Text>Bùi Khánh Băng</Text>
                <Text>Lượt làm đề 669</Text>
                <Text>Tổng điểm 1969</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
Rank.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Bảng xếp hạng</Title>
      </Body>
      <Right />
    </Header>
  )
});

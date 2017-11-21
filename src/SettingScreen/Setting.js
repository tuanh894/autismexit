import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,List, ListItem,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";
import { StackNavigator } from "react-navigation";

export default class Setting extends React.Component {
  componentDidMount() {
    //Alert.alert("No Users Found", "Oops, Looks like you are not signed in");
  }
  render() {
    return (
      <Container>
        <Content padder>
          <List>
            <ListItem icon>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                  <Text>Thông tin của tôi</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </ListItem>
            
            <ListItem icon>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                  <Text>Ví của tôi</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </ListItem>
            
            <ListItem icon>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                  <Text>Lịch sử học tập</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </ListItem>

            <ListItem icon>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                  <Text>Phụ huynh của tôi</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </ListItem>
            <ListItem icon>
                <Left>
                  <Icon name="plane" />
                </Left>
                <Body>
                  <Text>Giáo viên của tôi</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
Setting.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Cài đặt</Title>
      </Body>
      <Right />
    </Header>
  )
});

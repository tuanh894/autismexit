import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Trang chủ</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button block
                  style={{ marginTop: 10 }}
                  onPress={() => this.props.navigation.navigate("News")}
          >
            <Text>Demo Màn hình Tin tức</Text>
          </Button>

          <Button
              block
              success
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text>Demo tab</Text>
          </Button>

          <Button
              warning
              block
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("ListScreen")}
          >
            <Text>Demo List + Tab + stack</Text>
          </Button>
        </Content>


      </Container>
    );
  }
}

import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";
import { StackNavigator } from "react-navigation";

export default class HighSchool extends React.Component {
  componentDidMount() {
    Alert.alert("No Users Found", "Oops, Looks like you are not signed in");
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("EditScreenOne")}
          >
            <Text>Goto EditScreen One</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
HighSchool.navigationOptions = ({ navigation }) => ({
    title: 'Thi học THPT Quốc Gia',
    drawerIcon: ({ tintColor }) => (
        <Icon name = 'ios-school'/>
    ),
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Đề Thi THPT Quốc Gia</Title>
      </Body>
      <Right />
    </Header>
  )
});

import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,List, ListItem, Switch,
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
            <Header />
            <Content>
                <List>
                    <ListItem icon>
                        <Left>
                            <Icon name="plane" />
                        </Left>
                        <Body>
                        <Text>Chia sẻ với bạn bè</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="plane" />
                        </Left>
                        <Body>
                        <Text>Push notification</Text>
                        </Body>
                        <Right>
                            <Switch value={true} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="plane" />
                        </Left>
                        <Body>
                        <Text>FAQ</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Icon name="information" />
                        </Left>
                        <Body>
                        <Text>Về chúng tôi</Text>
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
                        <Text>Cố vấn đồng hành</Text>
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

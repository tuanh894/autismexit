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
import styles from "./style";

export default class Setting extends React.Component {
  componentDidMount() {
    //Alert.alert("No Users Found", "Oops, Looks like you are not signed in");
  }
  render() {
    return (
        <Container>
            <Header />
            <Content style={styles.content}>
                <List>
                    <ListItem icon>
                        <Left>
                            <Button style={styles.people}>
                                <Icon name="ios-people" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Chia sẻ với bạn bè</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={styles.notification}>
                                <Icon  name="notifications" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Push notification</Text>
                        </Body>
                        <Right>
                            <Switch value={true} />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.props.navigation.navigate('Guide')} icon>
                        <Left>
                            <Button style={styles.faq}>
                                <Icon  name="faqs" />
                            </Button>
                        </Left>
                        <Body>
                        <Text >FAQ</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.props.navigation.navigate('About')} icon>
                        <Left>
                            <Button style={styles.information}>
                                <Icon  name="information" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Về chúng tôi</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.props.navigation.navigate('Adviser')} icon>
                        <Left>
                            <Button style={styles.adviser}>
                                <Icon name="call" />
                            </Button>

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

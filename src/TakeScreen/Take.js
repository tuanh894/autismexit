import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
    Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body
} from "native-base";
export default class Take extends React.Component {

    constructor(props) {
        super(props);
        console.log("...........Take a exam.....................................");
        console.log(props);
    }

  render() {
    console.log(this.props);
    return (
      <Container>
          <Content>
              <Card style={{flex: 0}}>
                  <CardItem>
                      <Left>
                          <Thumbnail source={{uri: 'Image URL'}} />
                          <Body>
                          <Text>NativeBase</Text>
                          <Text note>April 15, 2016</Text>
                          </Body>
                      </Left>
                  </CardItem>
                  <CardItem>
                      <Body>
                      <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                      <Text>
                          //Your text here
                      </Text>
                      </Body>
                  </CardItem>
                  <CardItem>
                      <Left>
                          <Button transparent textStyle={{color: '#87838B'}}>
                              <Icon name="logo-github" />
                              <Text>1,926 stars</Text>
                          </Button>
                      </Left>
                  </CardItem>
              </Card>
          </Content>
      </Container>
    );
  }
}
Take.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Làm bài thi</Title>
      </Body>
      <Right />
    </Header>
  )
});

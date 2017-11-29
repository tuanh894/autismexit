import React from "react";
import {AppRegistry, Alert} from "react-native";

import {Container, Header, Content, List, ListItem, Text, Thumbnail, Body,Spinner} from 'native-base';
import HomeScreen from "../HomeScreen";
export default class TabSystem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }

    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/article/system')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    items: responseJson.items,
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if(this.state.isLoading){
            return (
                <Spinner color='red' />
            );
        }
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem onPress={() => this.props.navigation.navigate("Detail")}>
                                  <Thumbnail square size={160} source={{uri: (item.absUrl)}}/>
                                  <Body>
                                  <Text>{item.title}</Text>
                                  <Text note>{item.summary}</Text>
                                  <Text note>{item.published_at}</Text>
                                  </Body>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

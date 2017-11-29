import React from "react";
import {Container, Header, Content, List, ListItem, Text, Thumbnail, Body,Button,Left,Icon,Title,Right,Spinner} from 'native-base';
import Detail from "./Detail.js";
import News from "./News.js";

export default class TabEdu extends React.Component {
    constructor(props) {
        super(props);
        console.log("Tab education news...");
        console.log(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }

    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/article/edu')
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
       // const { navigate } = this.props.navigation;
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
                                  <Thumbnail square large size={160} source={{uri: (item.absUrl)}}/>
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

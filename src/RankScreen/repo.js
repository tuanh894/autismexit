import React from "react";
import {Container, Header, Content, List, ListItem, Text, Thumbnail, Body} from 'native-base';

export default class TabMost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }


    componentDidMount() {
        return fetch('http://192.168.1.7/luyenthivn/frontend/web/api/v1/rank/report')
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

        return (
            <Container>
                <Content>

                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem>

                                  <Body>
                                  <Text>{item.name}</Text>

                                  </Body>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

import React from "react";
import {Container, Header, Content, List, ListItem, Text, Thumbnail, Body,FlatList,TouchableOpacity} from 'native-base';

export default class TabMost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }


    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/rank/most?expand=profile')
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
                                      <Thumbnail square large size={160} source={{uri: (item.absUrl)}}/>
                                      <Body>
                                      <Text>{item.profile.lastname} {item.profile.middlename} {item.profile.firstname}</Text>
                                      <Text note>Tổng điểm: {item.score}</Text>
                                      <Text note>Lượt làm đề: {item.count}</Text>
                                      </Body>
                                  </ListItem>

                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

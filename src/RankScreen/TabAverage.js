import React from "react";
import {Container, Header, Content, List, ListItem, Text, Thumbnail, Body} from 'native-base';
import DetailProfile from './DetailProfile.js';
import styles from './StylesDetail';
export default class TabMost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/rank/index?expand=profile')
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
            <Container style={styles.container} >
                <Content>

                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem
                                  onPress={() => this.props.navigation.navigate("DetailProfile",{item})}>
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

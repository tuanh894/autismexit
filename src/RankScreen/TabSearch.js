import React from "react";
import {Container, Header , Content, List, ListItem, Text,
    Spinner , Thumbnail, Body, FlatList, TouchableOpacity,
    InputGroup, Icon, Input, Button, Item,View}
    from 'native-base';
import styles from './StylesDetail';
export default class TabSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: [],
        };
    }

    componentDidMount() {
        // ?key=${this.state.search}
        // const { params } = this.props.navigation.state;
        // alert(params.search);
        const { params } = this.props.navigation.state;
        return fetch(`http://beta.luyentap.vn/frontend/web/api/v1/rank/search?expand=profile&key=${params.search}`)

            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: false,
                    items: responseJson.items,

                }, function () {
                    // console.log('-----------------');
                    // console.log(this.state.items);
                    // console.log(params.search)
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    static navigationOptions = {
        title: 'Tìm kiếm thông tin'
    }
    render() {

        if(this.state.isLoading){
            return (
                <Spinner color='#2B60AC' />
            );
        }
        const { params } = this.props.navigation.state;
        const {navigate} = this. props.navigation;
        return (

            <Container style={styles.container}>
                <Content>

                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem
                                  onPress={() => navigate("DetailProfile",{item})}
                              >
                                  <Thumbnail style={styles.image} source={{uri: (item.absUrl)}}/>
                                  <Body>
                                  <Text>{item.fullname}</Text>
                                  <Text note>Tổng điểm: {item.score}</Text>
                                  <Text note>User : {item.user_id}</Text>
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

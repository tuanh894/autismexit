import React from "react";
import {Container, Header, Content, List, ListItem, Text,Spinner , Thumbnail, Body,FlatList,TouchableOpacity,InputGroup,Icon,Input,Button} from 'native-base';
import DetailProfile from './DetailProfile.js';
import styles from './StylesDetail';
export default class TabMost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: [],
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
    static navigationOptions = {
        header: null
    }

    render() {

        if(this.state.isLoading){
            return (
                <Spinner color='red' />
            );
        }
        const {navigate} = this. props.navigation;
        return (
            <Container style={styles.container}>
                <Content>
                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem
                                onPress={() => navigate("DetailProfile",{item})}
                              >
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

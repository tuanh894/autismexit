import React from "react";
import {AppRegistry, Alert} from "react-native";

import {
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Tab,
    Tabs,
    Header,
    Left,
    Right,
    Image,
    Icon,
    Title,
    Button,
    H1,
    View,
    Thumbnail,
    Spinner
} from "native-base";
import styles from './StylesDetail';
import {StackNavigator} from "react-navigation";

export default class TabDistrict extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            districts: [],
        }
    }
    componentDidMount(){
        const { params } = this.props.navigation.state;
        fetch(`http://192.168.1.7/luyenthivn/frontend/web/api/v1/rank/district?id=${params.item.id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    school: responseJson,
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });


    }
    static navigationOptions = {
        title:'Quận/Huyện'
    }
    render(){
        if(this.state.isLoading){
            return (
                <Spinner color='#2B60AC' />
            );
        }
        const {navigate} = this. props.navigation;
        return (
            <Container style={styles.container}>
                <Content>
                    <List dataArray={this.state.districts}
                          renderRow={(district) =>
                              <ListItem
                                  // onPress={() => navigate("DetailProfile",{item})}
                              >
                                  <Body>
                                  <Text>{district.name} </Text>
                                  </Body>
                              </ListItem>

                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}


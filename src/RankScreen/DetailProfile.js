import React from "react";
import {AppRegistry, Alert} from "react-native";

import {
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content, Tab, Tabs,
    Header,
    Left,
    Right,Image,
    Icon,
    Title,
    Button,
    H1,View,Thumbnail
} from "native-base";
import styles from './StylesDetail';
import {StackNavigator} from "react-navigation";

export default class DetailProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            school: [],
        }
    }
    componentDidMount(){
        const { params } = this.props.navigation.state;
        fetch(`http://beta.luyentap.vn/frontend/web/api/v1/rank/school?id=${params.item.profile.school_id}`)
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

    render(){
        const { params } = this.props.navigation.state;
        return(
            <Container style={styles.container}>
                <Content>
                    <View>
                        <Thumbnail style={styles.image} source={{uri: (params.item.absUrl)}}/>
                        <Text >Họ tên: {params.item.profile.lastname} {params.item.profile.middlename} {params.item.profile.firstname}</Text>
                        <Text >Lớp: {params.item.profile.grade_id} </Text>
                        <Text >Giới tính:  {params.item.profile.gender == '1' ? 'Nam' : 'Nữ' } </Text>
                        <Text >Trường: {this.state.school.name}</Text>
                        <Text >Địa chỉ: {params.item.profile.address} </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}


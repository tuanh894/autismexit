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
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>Thông tin cá nhân</Title>
                </Body>
                <Right />
            </Header>

        )
    });
    render(){
        const { params } = this.props.navigation.state;
        return(
            <Container style={styles.background}>
                <Content>
                    <View style={styles.wrapperDetail}>
                        <Thumbnail style={styles.imageDetail} source={{uri: (params.item.absUrl)}}/>
                    </View>
                        <Text style={styles.textInfo} ><Text style={styles.firstText}>Họ tên: </Text> <Text style={styles.textBold}>
                                {params.item.profile.lastname} {params.item.profile.middlename} {params.item.profile.firstname}
                            </Text>
                        </Text>
                        <Text style={styles.textInfo} ><Text style={styles.firstText}>Lớp:</Text> <Text style={styles.textBold}>
                                {params.item.profile.grade_id}
                            </Text>
                        </Text>
                        <Text style={styles.textInfo} ><Text style={styles.firstText}>Giới tính:</Text> <Text style={styles.textBold}>
                                {params.item.profile.gender == '1' ? 'Nam' : 'Nữ' }
                            </Text>
                        </Text>
                        <Text style={styles.textInfo} ><Text style={styles.firstText}>Trường:</Text> <Text style={styles.textBold}>
                                {params.item.profile.school_id ? this.state.school.name :'Chưa cập nhật trường'}
                            </Text>
                        </Text>
                        <Text style={styles.textInfo} ><Text style={styles.firstText}>Địa chỉ:</Text> <Text style={styles.textBold}>
                                {params.item.profile.address}
                            </Text>
                        </Text>
                </Content>
            </Container>
        )
    }
}


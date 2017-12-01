import React from "react";
import {AppRegistry, Alert} from "react-native";
import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Spinner,
    Text,
    Thumbnail,
    Title
} from 'native-base';
import {StackNavigator} from "react-navigation";

export default class Exam extends React.Component {
    constructor(props) {
        super(props);
        console.log("Exam screen...");
        this.state = {
            isLoading: true,
            items: []
        }
    }

    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/exam/week')
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
                //items: []
                //console.error(error);
                this.setState({
                    isLoading: false,
                    //items: [],
                    items: [
                        {id:1},
                        {id:2},
                        {id:3},
                        {id:4},
                        {id:5},
                        {id:6},
                        {id:7},
                        {id:8},
                        {id:9},
                        {id:10},
                        {id:11},
                        {id:12},
                        {id:13},
                    ],
                }, function () {
                    // do something with new state
                });
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner color='red'/>
            );
        }

        if(this.state.items.length == 0){
            return(
                <Container>
                    <Content>
                        <Text padding error>Không tải được dữ liệu!</Text>
                    </Content>
                </Container>
            );
        }
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem onPress={() => this.props.navigation.navigate("Take")}>
                                  <Thumbnail square large size={160} source={require("../img/icon-1.png")}/>
                                  <Body>
                                  <Text>Đề luyện tập toán tuần {item.id}</Text>
                                  <Text note>Trạng thái: Chưa mở</Text>
                                  <Text note>Lớp 12</Text>
                                  <Text note>Lượt thi: 12.235</Text>
                                  </Body>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}
Exam.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu"/>
                </Button>
            </Left>
            <Body>
            <Title>Đề luyện tập</Title>
            </Body>
            <Right/>
        </Header>
    )
});

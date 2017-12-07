import React from "react";
import {ActivityIndicator, FlatList,Text ,View} from "react-native";
import {Container, Header , Content, List, ListItem,
    Spinner , Thumbnail, Body, TouchableOpacity,
    InputGroup, Icon, Input, Button, Item, Left, Right, Title} from 'native-base';
import styles from './StylesDetail';
import TabDistrict from './TabDistrict';
export default class TabReport extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            data:[],
            page:1,
            refreshing:false
        };
    }
    componentDidMount(){
        this.makeRemoteRequest();
    }
    static navigationOptions = {
        header: null
    }
    makeRemoteRequest = () =>{
        const {page} = this.state;
        const url =`http://beta.luyentap.vn/frontend/web/api/v1/rank/report?page=${this.state.page}`;
        this.setState ({loading:true});
        setTimeout(()=>{
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        loading: false,
                        data:[...this.state.data,...res.items],

                    }, function () {
                        // do something with new state
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        },2000);


    };

    handleEnd = () =>{
        if(this.state.page < 4){
            this.setState({
                page : this.state.page +1
            }, () => {
                this.makeRemoteRequest();
            })
        }
    };
    render(){
        if(this.state.loading){
            return (
                <Spinner color='#2B60AC' />
            );
        }
        const {navigate} = this. props.navigation;
        return (

            <List style={styles.container}  >
                <FlatList

                keyExtractor={(x, i) => i}
                    onEndReached={() => this.handleEnd()}
                    onEndThreshold={0}
                    // onRefresh = {this.handleRefresh}
                    data={this.state.data}
                    renderItem={({item}) =>
                        <ListItem
                            // onPress={() => navigate("TabDistrict",{item})}
                            >
                            <Body>
                            <Text>{item.name}</Text>
                            <Text note>Tổng số học sinh: {item.totals}</Text>
                            </Body>
                        </ListItem>}
                />

            </List>


        )
    }
}
TabReport.navigationOptions = ({ navigation }) => ({
    title: 'Thống kê',
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Bảng xếp hạng</Title>
            </Body>
            <Right />
        </Header>
    )
});


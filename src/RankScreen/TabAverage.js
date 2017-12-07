import React from "react";
import {Container, Header , Content, List, ListItem, Text,
    Spinner , Thumbnail, Body, FlatList,
    InputGroup, Icon, Input, Button, Item, Left, Right, Title, View} from 'native-base';
import {TouchableOpacity,} from 'react-native';
import DetailProfile from './DetailProfile.js';
import styles from './StylesDetail';
export default class TabAverage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: [],
            // iconName: "ios-people"
        }
    }
    // static navigationOptions = {
    //     header: null
    // }

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
    static navigationOptions = {
        header: null
    }
    // _handleChange(){
    //     if(this.state.text){
    //         this.setState({
    //             iconName:"ios-close"
    //         })
    //     }else{
    //         this.setState({
    //             iconName:"ios-people"
    //         })
    //
    //     }
    // }
    //
    // //off header
    //
    //
    // //clear text
    // clearText(textSearch) {
    //     this.refs['textSearch'].setNativeProps({text: ''});
    //     this.setState({
    //         text: '',
    //         iconName:"ios-people"
    //     })
    // }
    render() {
        if(this.state.isLoading){
            return (
                <Spinner color='#2B60AC' />
            );
        }
        // const {navigate} = this.props.navigation;
        return (

            <Container style={styles.container} >
                <Content>
                    {/*<Header style={styles.headerWrap} >*/}

                        {/*<View style={styles.itemWrap}>*/}

                            {/*<View style={styles.itemWrapSearch}>*/}
                                {/*/!*<Item style={styles.itemSearch}>*!/*/}
                                {/*<Icon name="ios-search"/>*/}

                                {/*<Input style={styles.searchPlace} placeholder="Tìm kiếm "*/}
                                       {/*ref={'textSearch'}*/}
                                       {/*value={this.state.search}*/}
                                       {/*onChangeText={(text => this.setState({text}))}*/}
                                       {/*onChange={()=>this._handleChange()}*/}
                                {/*/>*/}

                                {/*<TouchableOpacity onPress={() => this.clearText()}*/}
                                {/*>*/}
                                    {/*<Icon style={styles.itemIcon} name={this.state.iconName}/>*/}
                                {/*</TouchableOpacity>*/}
                                {/*/!*</Item>*!/*/}

                            {/*</View>*/}

                            {/*<View style={styles.itemWrapButton}>*/}

                                {/*<Button transparent style={styles.itemButtonSearch}*/}
                                        {/*onPress={() => navigate("TabSearch", {search: this.state.text})}*/}
                                {/*>*/}
                                    {/*<Text style={styles.itemButton}>Tìm kiếm</Text>*/}
                                {/*</Button>*/}

                            {/*</View>*/}
                        {/*</View>*/}
                    {/*</Header>*/}
                    <List dataArray={this.state.items}
                          renderRow={(item) =>
                              <ListItem
                                  onPress={() => this.props.navigation.navigate("DetailProfile",{item})}>
                                  <Thumbnail style={styles.image} source={{uri: (item.absUrl)}}/>
                                  <Body>
                                  <Text>{item.profile.lastname} {item.profile.middlename} {item.profile.firstname}</Text>
                                  {/*<Text note>Tổng điểm: {item.score}</Text>*/}
                                  {/*<Text note>Lượt làm đề: {item.count}</Text>*/}
                                  </Body>
                                  <View style={styles.RightRank}>
                                      <Text style={styles.points}>{item.score}</Text>
                                      <Text note>Tổng điểm</Text>
                                  </View>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

TabAverage.navigationOptions = ({ navigation }) => ({
    title: 'Điểm TB',
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

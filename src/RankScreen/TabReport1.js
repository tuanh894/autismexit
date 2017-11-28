import React from "react";
import {ActivityIndicator, FlatList, View} from "react-native";
import {Container, Header, Content, List, ListItem, Text, Thumbnail, Body} from 'native-base';

export default class TabReport extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoading: true,
    //         items: []
    //     }
    // }
    //
    // state = {
    //     page: 1,
    //     loading: false,
    // }
    //
    // componentDidMount() {
    //
    //     return fetch('http://192.168.1.7/luyenthivn/frontend/web/api/v1/rank/report?page=${this.state.page}')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState(state => ({
    //
    //                 items: [...state.items, ...responseJson.items],
    //                 loading: false,
    //             }), function () {
    //                 // do something with new state
    //             });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }
    state = {
        data: [],
        page: 1,
        loading: false
    };

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({refresh: true});
        const response = await fetch(
            'http://192.168.1.7/luyenthivn/frontend/web/api/v1/rank/report?page=${this.state.page}'
        );
        const json = await response.json();
        this.setState(state => ({
            data: [...state.data, ...json.items],
            loading: false
        }));

    };
    handleEnd = () => {

        this.setState(state => ({page: state.page + 1}), () => this.fetchData());
        alert(this.state.page);
    };

    render() {

        return (

            <List>
                <FlatList

                    keyExtractor={(x, i) => i}
                    onEndReached={() => this.handleEnd()}
                    onEndReachedThreshold={100}
                    data={this.state.data}
                    // ListFooterComponent={() =>
                    //     this.state.loading
                    //         ? null
                    //         : <ActivityIndicator size="large" animating />}
                    renderItem={({item}) =>
                        <ListItem>
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

import React from "react";

import {
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,List, ListItem, Switch,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H3
} from "native-base";
import styles from './style.js';
import DetailGuide from './DetailGuide.js';

export default class Guide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }


    componentDidMount() {
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/guide')
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
        const {navigate} = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <H3 style={styles.h3}>Câu hỏi thường gặp</H3>
                </Header>
                <Content>

                    <List
                        dataArray={this.state.items}
                        renderRow={(item) =>

                            <ListItem onPress={() => navigate("DetailGuide", { item})}>
                                <Body>
                                    <Text>{item.title}</Text>
                                </Body>
                            </ListItem>
                        }
                    >
                    </List>
                </Content>
            </Container>
        );
    }
}

Guide.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() =>  navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
            <Title>FAQ</Title>
            </Body>
            <Right/>
        </Header>
    )
});

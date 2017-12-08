import React from "react";
import {StatusBar} from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content, Form, Item, Input, Label,
    Header,
    Title,
    Left,
    Icon,
    Right
} from "native-base";

export default class Logout extends React.Component {
    render() {
        return (
            <Container>

            </Container>
        );
    }
}

Logout.navigationOptions = ({ navigation }) => ({
    title: 'Đăng xuất',
    drawerIcon: ({ tintColor }) => (
        <Text><Icon name = 'md-power'/> </Text>
    ),
});

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

export default class LoginScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Đăng ký</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nhập email hoặc tên đăng nhâp</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Nhập mật khẩu</Label>
                            <Input />
                        </Item>
                    </Form>

                    <Button full>
                        <Text>Đăng nhập</Text>
                    </Button>

                    <Button full transparent>
                        <Text>Quên mật khẩu</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

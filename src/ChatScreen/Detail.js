import React, { Component } from 'react';
import { Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    H1,
    Header,
    Icon,
    Left,
    Right,
    Text,
    Title
} from 'native-base';

export  default class Detail extends Component{
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return(
            <Container>

                <Content>
                    <Body>
                    <Text>Test</Text>
                    <Text note>test</Text>
                    <Text note>tesst</Text>
                    </Body>
                </Content>
            </Container>
        );
    }

}
Detail.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
            <Title>Detail</Title>
            </Body>
            <Right />
        </Header>
    )
});
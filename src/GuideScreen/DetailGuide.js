import React from "react";

import {
    Text,
    Container,
    Body,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H3
} from "native-base";
import HTMLView from 'react-native-htmlview';
import styles from './style';


export default class DetailGuide extends React.Component {
    render(){
        const { params } = this.props.navigation.state;
        return(
            <Container style={ styles.container}>
                <Content style={styles.content}>
                    <Body>
                        <H3 style={styles.h3}> {params.item.title}</H3>
                        <HTMLView value={params.item.content}/>
                        <HTMLView value={params.item.detail}/>
                    </Body>
                </Content>
            </Container>
        )
    }
}

DetailGuide.navigationOptions = ({navigation}) => ({
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
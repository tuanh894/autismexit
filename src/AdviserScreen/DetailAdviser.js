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
    H1,
    Thumbnail
} from "native-base";
import {View} from 'react-native';
import styles from './style';
import HTMLView from 'react-native-htmlview';

export default class DetailAdviser extends React.Component {
    render(){
        const { params } = this.props.navigation.state;
        return(
            <Container style={styles.container}>
                <Content>
                    <View style = {styles.position}>
                        <Thumbnail style={styles.image} source={{uri: (params.item.absUrl)}}/>
                    </View>
                    <Body>
                    <Text style={styles.text}>{params.item.name}</Text>
                    <HTMLView value={params.item.info}/>
                    </Body>
                </Content>
            </Container>
        )
    }
}
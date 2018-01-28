import React from "react";
import {Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import {Animated, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';

// var song = null;
export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null
    };
    onPress(evt) {
        const {locationX, locationY} = evt.nativeEvent;
        console.log(locationX, locationY);
    }

    onMove(evt) {
        console.log('Im moving');
    }

    onRelease(evt) {
        console.log('stop')
    }

    render() {
        return (
            <Container style={styles.container}>
                <Image style={styles.images}
                       onStartShouldSetResponder={() => true}
                       onMoveShouldSetResponder={() => true}
                       onResponderMove={this.onMove.bind(this)}
                       onResponderRelease={this.onRelease.bind(this)}
                       onResponderGrant={this.onPress.bind(this)}
                       source={require('../img/bg_ip6.png')}>
                    <View/>
                </Image>
                <View style={styles.view1}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity
                                onPress={() => this.goBack()}
                            >
                                <Image style={styles.imagesLeft} source={require('../img/back.png')}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.main}>

                    </View>
                </View>
            </Container>

        );
    }
}



import React from "react";
import {Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import {Animated, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';

// var song = null;
export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,
            marginLeft: new Animated.Value(0),
            marginTop: new Animated.Value(0),

        }
    }

    static navigationOptions = {
        header: null
    };

    onPress(evt) {
        const {locationX, locationY} = evt.nativeEvent;
        this.setState({
            x: locationX,
            y: locationY
        });
        console.log(locationX, locationY);
    }

    onMove(evt) {
        const {locationX, locationY} = evt.nativeEvent;
        const {x, y} = this.state;
        const marginLeft = new Animated.Value(locationX - x);
        const marginTop = new Animated.Value(locationY - y);
        this.setState({marginLeft, marginTop});
        console.log('Im moving');
    }

    onRelease(evt) {
        const {locationX, locationY} = evt.nativeEvent;
        const {x, y} = this.state;
        const marginLeft = new Animated.Value(locationX - x);
        const marginTop = new Animated.Value(locationY - y);
        this.setState({ x: locationX,
            y: locationY,marginLeft, marginTop});
    }

    goBack() {
        this.props.navigation.navigate("Home")
    }

    render() {
        const {marginLeft, marginTop} = this.state;
        return (
            <Container style={styles.container}>
                <Image style={styles.images}
                       onStartShouldSetResponder={() => true}
                       onMoveShouldSetResponder={() => true}
                       onResponderMove={this.onMove.bind(this)}
                       onResponderRelease={this.onRelease.bind(this)}
                       onResponderGrant={this.onPress.bind(this)}
                       source={require('../img/bg_ip6.png')}>
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
                            <Animated.Image style={{width: 70, height: 50, marginLeft, marginTop}}
                                            source={require('../img/1/keo_do.png')}/>
                        </View>
                    </View>

                </Image>

            </Container>

        );
    }
}



import React from "react";
import {StatusBar} from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
} from "native-base";
import {Image, View, TouchableOpacity, Animated} from 'react-native';
import styles from './style';

// var song = null;
export default class Game11_1 extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            status1: 1,
            status2: 1,
            status3: 1,
            status4: 1,
            status5: 1,
        }
    }
    static navigationOptions = {
        header: null
    };

    hideIma1(){
        this.setState({
            status1:1
        });
        this.props.navigation.navigate("Game11_2")
    }
    getMyStyle1() {
        if (this.state.status1==1) {
            return {
                width: 75,
                height: 95,
                resizeMode: 'contain',
            }
        }
    }

    hideIma2(){
        this.setState({
            status2:1
        });
        alert('wrong')
    }
    getMyStyle2() {
        if (this.state.status2 == 1) {
            return {
                width: 75,
                height: 95,
                resizeMode: 'contain',
            }
        }
    }


    goBack(){
        this.props.navigation.navigate("Home")
    }
    render() {
        return (
            <Container style={styles.container}>
                <Image style={styles.images} source={require('../img/bg_ip6.png')}></Image>
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
                        <TouchableOpacity
                            onPress={() => this.hideIma1()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle1()} source={require('../img/11/tivi.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.hideIma2()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle2()} source={require('../img/11/oto.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}



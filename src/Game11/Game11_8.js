import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import styles from './style';

export default class Game11_8 extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            status1 : 1,
            status2 : 1,
            status3 : 1,
            status4 : 1,
            status5 : 1,
            status6 : 1,
        }
    }

    static navigationOptions = {
        header: null
    };
    hideIma1(){
        this.setState({
            status1:1
        });

    }
    getMyStyle1() {
        if (this.state.status1==1) {
            return {
                width: 55,
                height: 75,
                resizeMode: 'contain',
            }
        }
    }

    hideIma2(){
        this.setState({
            status2:1
        });

    }
    getMyStyle2() {
        if (this.state.status2 == 1) {
            return {
                width: 55,
                height: 75,
                resizeMode: 'contain',
            }
        }
    }
    hideIma5() {
        this.setState({
            status5: 1
        });

    }
    getMyStyle5() {
        if (this.state.status5==1) {
            return {
                width: 55,
                height: 75,
                resizeMode: 'contain',
            }
        }
    }
    hideIma3(){
        this.setState({
            status3:2
        });
        this.props.navigation.navigate("Home")

    }
    getMyStyle3() {
        if (this.state.status3 ==2 ) {
            return {
                width: 55,
                height: 75,
                resizeMode: 'contain',
                marginBottom:'30%'
            }
        } else {
            return {
                width: 55,
                height: 75,
                resizeMode: 'contain',
            }
        }
    }
    hideIma4(){
        this.setState({
            status4:1
        });

    }
    getMyStyle4() {
        if (this.state.status4==1) {
            return {
                width: 55,
                height: 75,
                resizeMode: 'contain',
            }
        }
    }
    hideIma6(){
        this.setState({
            status6:1
        });

    }
    getMyStyle6() {
        if (this.state.status6==1) {
            return {
                width: 55,
                height: 75,
                resizeMode: 'contain',
            }
        }
    }
    goBack() {
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
                                <Image style={this.getMyStyle1()} source={require('../img/6/coc.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma2()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle2()} source={require('../img/6/ghe.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma3()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle3()} source={require('../img/6/meo.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma4()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle4()} source={require('../img/6/khanmat.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma5()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle5()} source={require('../img/6/giuong.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma6()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle6()} source={require('../img/6/maysaytoc.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}



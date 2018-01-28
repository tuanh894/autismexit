import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import {Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import styles from './style';

export default class Game9 extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            status1 : false,
            status2 : false,
            status3 : false,
            status4 : false,
            status5 : false,
            status6 : false,
        }
    }

    static navigationOptions = {
        header: null
    };
    hideIma1(){
        this.setState({
            status1:true
        });
    }

    getMyStyle1() {
        if (this.state.status1) {
            return {

                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma2(){
        this.setState({
            status2:true
        });
    }
    getMyStyle2() {
        if (this.state.status2) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma3(){
        this.setState({
            status3:true
        });
    }
    getMyStyle3() {
        if (this.state.status3) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma4(){
        this.setState({
            status4:true
        });
    }
    getMyStyle4() {
        if (this.state.status4) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma5(){
        this.setState({
            status5:false
        });
        alert('wrong')
    }
    getMyStyle5() {
        if (this.state.status5) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
                resizeMode: 'contain',
            }
        }
    }
    hideIma6(){
        this.setState({
            status6:true
        });
        this.props.navigation.navigate("Game9_1")
    }
    getMyStyle6() {
        if (this.state.status6) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:55,
                height:65,
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
                                <Image style={this.getMyStyle1()} source={require('../img/9/tui1keo.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma2()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle2()} source={require('../img/9/tui1keo.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma3()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle3()} source={require('../img/9/tui1keo.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma4()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle4()} source={require('../img/9/tui1keo.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma5()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle5()} source={require('../img/9/tui15keo.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideIma6()}
                            style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle6()} source={require('../img/9/tui1keo.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}



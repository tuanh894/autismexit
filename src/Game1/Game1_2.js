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
import {Image, View, TouchableOpacity} from 'react-native';
import styles from './style';

export default class Game1_2 extends React.Component {
    constructor(props) {
        super(props);
        this.hideIma3 = this.hideIma3.bind(this);
        this.goBack = this.goBack.bind(this);
        this.state ={
            status1:1,
            status2:1,
            status3:1,
            handleHand:1,

        }
    }

    static navigationOptions = {
        header: null
    };

    hideIma1(){
        this.setState({
            status1:2,
            handleHand:2
        });

    }
    hand(){
        if(this.state.handleHand == 1){
            return{
                width:60,
                height:60,
                resizeMode:'contain'
            }
        }else if(this.state.handleHand == 2){
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                transform: [{ rotate: '325deg'}]
            }
        } else{
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                transform: [{ rotate: '75deg'}]
            }
        }
    }
    getMyStyle1() {
        if (this.state.status1 == 2) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:75,
                height:95,
                resizeMode: 'contain',
            }
        }
    }
    hideIma2(){
        if(this.state.status1==1){
            // Bam  vi tri 1
        } else if(this.state.status1==2){
            this.setState({
                status2:2,
                handleHand:3
            });
        }


    }
    getMyStyle2() {
        if (this.state.status2 ==2 && this.state.status1 ==2) {
            return {
                display: 'none'
            }
        }else{
            return{
                width:75,
                height:95,
                resizeMode: 'contain',
            }
        }
    }
    hideIma3(){
        if(this.state.status2==1){
            // Bam  vi tri 1
        } else if(this.state.status2==2){
            this.props.navigation.navigate("Game1_4")
        }
    }
    getMyStyle3(){
        return{
            width:75,
            height:95,
            resizeMode: 'contain',
        }
    }
    goBack(){
        this.props.navigation.navigate("Home")
    }
    render() {

        return (
            <Container style={styles.container}>
                <Image style={styles.images} source={require('../img/bg_ip6.png')}></Image>
                <View style={styles.view}>
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
                        <TouchableOpacity onPress={() => this.hideIma2()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle2()} source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma1()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle1()} source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma3()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle3()}  source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.main1}>
                        <View style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.hand()} source={require('../img/1/tay.png')}></Image>
                            </View>
                        </View>


                    </View>
                </View>

            </Container>
        );
    }
}



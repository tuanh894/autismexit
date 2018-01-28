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

export default class Game1_5 extends React.Component {
    constructor(props) {
        super(props);
        this.hideIma5 = this.hideIma5.bind(this);
        this.goBack = this.goBack.bind(this);
        this.state ={
            status1:1,
            status2:1,
            status3:1,
            status4:1,
            status5:1,
            handleHand:1,

        }
    }

    static navigationOptions = {
        header: null
    };

    hideIma1(){
        if(this.state.status4==1){
            // Bam  vi tri 1
        } else if(this.state.status4==2){
            this.setState({
                status1:2,
                handleHand:7
            });
        }
    }
    getMyStyle1(){
        if (this.state.status1 ==2) {
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
        if(this.state.status6==1){
            // Bam  vi tri 1
        } else if(this.state.status6==2){
            this.setState({
                status2:2,
                handleHand:5
            });
        }
    }
    getMyStyle2() {
        if (this.state.status2 ==2) {
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
        if(this.state.status7==1){
            // Bam  vi tri 1
        } else if(this.state.status7==2){
            this.setState({
                status3:2,
                handleHand:3
            });
        }
    }
    getMyStyle3(){
        if (this.state.status3 ==2) {
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
    hideIma4(){
        if(this.state.status2==1){
            // Bam  vi tri 1
        } else if(this.state.status2==2){
            this.setState({
                status4:2,
                handleHand:6
            });
        }
    }
    getMyStyle4() {

        if (this.state.status4 ==2) {
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
    hideIma5(){
        if(this.state.status1 ==1 ){
            // Bam  vi tri 1
        } else if(this.state.status1 == 2){
            this.props.navigation.navigate("Home")
        }
    }
    getMyStyle5() {

        return{
            width:75,
            height:95,
            resizeMode: 'contain',
        }

    }
    hideIma6(){
        if(this.state.status3==1){
            // Bam  vi tri 1
        } else if(this.state.status3==2){
            this.setState({
                status6:2,
                handleHand:4
            });
        }
    }
    getMyStyle6() {

        if (this.state.status6 ==2) {
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
    hideIma7(){
        this.setState({
            status7:2,
            handleHand:2
        });

    }
    getMyStyle7() {
        if (this.state.status7 ==2) {
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
    hand(){
        if(this.state.handleHand == 1){
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                transform: [{ rotate: '80deg'}]
            }
        }else if(this.state.handleHand == 2){
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                transform: [{ rotate: '-20deg'}]
            }
        } else if(this.state.handleHand == 3){
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                transform: [{ rotate: '75deg'}]
            }
        } else if(this.state.handleHand == 4){
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                transform: [{ rotate: '325deg'}]
            }
        }
        else if(this.state.handleHand == 5){
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                // transform: [{ rotate: '75deg'}]
            }
        }
        else if(this.state.handleHand == 6){
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                transform: [{ rotate: '-55deg'}]
            }
        }
        else if(this.state.handleHand == 7){
            return{
                width:60,
                height:60,
                resizeMode:'contain',
                transform: [{ rotate: '55deg'}]
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
                        <TouchableOpacity onPress={() => this.hideIma1()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle1()} source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma2()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle2()} source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma3()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle3()}  source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.hideIma4()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle4()} source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.hideIma5()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle5()} source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.hideIma6()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle6()} source={require('../img/1/Boling.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.hideIma7()} style={styles.mainItem}>
                            <View style={styles.mainImgView}>
                                <Image style={this.getMyStyle7()} source={require('../img/1/Boling.png')}></Image>
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



import React, {Component} from "react";
import {Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import {   StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Easing,Image,TouchableOpacity,
    Dimensions} from 'react-native';


export default class Test extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            showDraggable   : true,
            dropZoneValues  : null,
            pan             : new Animated.ValueXY()
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder    : () => true,
            onPanResponderMove              : Animated.event([null,{
                dx  : this.state.pan.x,
                dy  : this.state.pan.y
            }]),
            onPanResponderRelease           : (e, gesture) => {
                if(this.isDropZone(gesture)){
                    this.setState({
                        showDraggable: false

                    });

                    }else{
                        Animated.spring(
                            this.state.pan,
                            {toValue:{x:0,y:0}}
                        ).start();
                    }
                }
            });
    }

    isDropZone(gesture){
        var dz = this.state.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;

    }

    setDropZoneValues(event){
        this.setState({
            dropZoneValues : event.nativeEvent.layout
        });
    }
    goBack(){
        this.props.navigation.navigate("Home")
    }
    static navigationOptions = {
        header: null
    };
    render(){
        return (

            <Container style={styles.container}>
                <Image style={styles.images} source={require('../img/bg_ip6.png')}>
                    <View style={styles.view1}>
                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <TouchableOpacity onPress={() => this.goBack()}>
                                    <Image style={styles.imagesLeft} source={require('../img/back.png')}></Image>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.main} onLayout={this.setDropZoneValues.bind(this)} >

                            <Image style={{width: 80,height:110,marginRight:'20%',marginLeft:'10%', alignItems: "center"}}
                                   source={require('../img/3/lo_den.png')}/>

                            <Image style={{width: 80, height: 110,marginRight:'20%', alignItems: "center"}}
                                   source={require('../img/3/lo_cam.png')}/>

                            <View >
                                <Image style={{width: 80, height: 110,marginRight:'20%', alignItems: "center"}}
                                       source={require('../img/3/lo_do.png')}/>
                            </View>

                        </View>
                        <View style={styles.main2}>
                            {this.renderDraggable()}
                        </View>
                    </View>

                </Image>

            </Container>
        );
    }

    renderDraggable(){
        if(this.state.showDraggable){
            return (
                <View style={styles.draggableContainer}>
                    <Animated.Image
                        {...this.panResponder.panHandlers}
                        source={require('../img/3/bi_do.png')}
                        style={[this.state.pan.getLayout(),styles.images_bi]}
                    />
                </View>
            );
        }
    }
}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height  : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    },
    container: {
        flex: 1
    },
    view:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    view1:{
        position: 'absolute',
        top: 0,
        bottom: '30%',
        left: 0,
        right: 0,
    },
    images: {
        flex: 1,
        width: null,
    },
    header: {
        flex: 1,
        flexDirection: "row",
    },
    headerLeft: {
        flex: 1,
        flexDirection: "row",
    },

    headerMain: {
        flex: 2
    },
    imagesLeft: {
        width: 60,
        height: 50,
        marginTop: 10,
        marginLeft: 20
    },
    main: {
        flex: 1,
        flexDirection: "row",
        paddingLeft:30,
        paddingRight:30,

    },
    main2:{

        flex: 1,
        flexDirection: "row",
        paddingLeft:30,
        paddingRight:30,
    },
    mainItem: {
        flex: 3,
        width: '100%',
        height: 120,
        // borderColor: '#E24816',
        // borderWidth: 3,
        margin: 10,
        position:'relative',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingBottom:20
    },
    // dropZone:{
    //     width: 70, height: 50
    // },
    images_bi:{
        width: 40, height: 37,
    },
});
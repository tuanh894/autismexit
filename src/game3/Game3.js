import React from "react";
import {Button, Card, CardItem, Container, Image, Content, Header, Icon, Left, Right, Title} from "native-base";
import {
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Easing,
    Dimensions,
    Platform,
    TouchableOpacity,
} from 'react-native';
// import styles from './style';

// var song = null;
let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');

export default class Game3 extends React.Component {
    constructor(props){
        super(props);

        this.dataDrag = [1,2,3,4];
        this.pan = this.dataDrag.map( () => new Animated.ValueXY() );

        this.state = {
            showDraggable   : true,
            dropZoneValues  : null,
        };
    }

    getPanResponder(index) {
        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove              : Animated.event([null,{
                dx  : this.pan[index].x,
                dy  : this.pan[index].y
            }]),
            onPanResponderRelease           : (e, gesture) => {
                if(this.isDropZone(gesture)){
                    this.setState({
                        showDraggable : false
                    });
                }else{
                    Animated.spring(
                        this.pan[index],
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

    render(){
        return (
            <View style={styles.mainContainer}>
                <View
                    onLayout={this.setDropZoneValues.bind(this)}
                    style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
                </View>

                {this.dataDrag.map((d, index) => (
                    <Animated.View
                        key={index}
                        {...this.getPanResponder(index).panHandlers}
                        style={[styles.draggableContainer, this.pan[index].getLayout(), styles.circle]}>
                        <Text style={styles.text}>Drag {index}</Text>
                    </Animated.View>
                ))}
            </View>
        );
    }
}

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
        marginTop         : Window.height/2 - CIRCLE_RADIUS,
        marginLeft        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    },
});
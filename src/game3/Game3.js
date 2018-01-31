import React, {Component} from "react";
import {Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import {Animated, View, Image, TouchableOpacity, PanResponder} from 'react-native';
import styles from './style';

class Draggable1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDraggable: true,
            dropAreaValues: null,
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(1)
        };
    }

    componentWillMount() {
        this._val = { x:0, y:0 }
        this.state.pan.addListener((value) => this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderGrant: (e, gesture) => {
                this.state.pan.setOffset({
                    x: this._val.x,
                    y:this._val.y
                })
                this.state.pan.setValue({ x:0, y:0})
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (e, gesture) => {
                if (this.isDropArea(gesture)) {
                    Animated.timing(this.state.opacity, {
                        toValue: 0,
                        duration: 1000
                    }).start(() =>
                        this.setState({
                            showDraggable: false
                        })
                    );
                }
            }
        });
    }

    isDropArea(gesture) {
        return gesture.moveY < 200;
    }

    render() {
        return (
            <View style={{ width: "100%",marginTop:'20%', alignItems: "center"}}>
                {this.renderDraggable()}
            </View>
        );
    }

    renderDraggable() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        if (this.state.showDraggable) {
            return (
                <View style={{ position: "absolute" }}>
                    <Animated.Image
                        {...this.panResponder.panHandlers}
                        source={require('../img/3/bi_den.png')}
                        style={[panStyle,styles.images_bi, {opacity:this.state.opacity}]}
                    />
                </View>
            );
        }
    }
}





export default class Game3 extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);

        this.state = {
            lo1: false,
            lo2: false,
            lo3: false,
        };
    }
    goBack() {
        this.props.navigation.navigate("Home")
    }

    render() {
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
                        <View style={styles.main}>
                            <Image style={{width: 80,height:110,marginRight:'20%',marginLeft:'10%', alignItems: "center"}}
                                   source={require('../img/3/lo_den.png')}/>

                            <Image style={{width: 80, height: 110,marginRight:'20%', alignItems: "center"}}
                                   source={require('../img/3/lo_cam.png')}/>

                            <Image style={{width: 80, height: 110,marginRight:'20%', alignItems: "center"}}
                                   source={require('../img/3/lo_do.png')}/>
                        </View>
                        <View style={styles.main2}>
                            <Draggable1/>

                        </View>
                    </View>

                </Image>

            </Container>

        );
    }
}



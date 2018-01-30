import React, {Component} from "react";
import {Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import {Animated, View, Image, TouchableOpacity, PanResponder} from 'react-native';
import styles from './style';

class Draggable1 extends Component {
    constructor(props) {
        super(props);
        this.top = 0;
        this.left = 0;
        this.view = null;
        this.customStyle = {
            style: {
                showDraggable: true,

                top: this.top,
                left: this.left,
                opacity: new Animated.Value(1)
            }
        }
        this.state = {
            showDraggable   : true,     //Step 1
            dropZoneValues  : null,
            pan             : new Animated.ValueXY()
        };

    }

    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
            onMoveShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderMove: this._onPanResponderMove.bind(this),
            onPanResponderRelease: this._onPanResponderRelease.bind(this),
        })
    }

    _onPanResponderRelease(event, gestureState) {
        this.top += gestureState.dy;
        this.left += gestureState.dx;
        // if (this.isDropArea(gestureState)) {
        //     Animated.timing(this.state.opacity, {
        //         toValue: 0,
        //         duration: 1000
        //     }).start(() =>
        //         this.setState({
        //             showDraggable: false
        //         })
        //     );
        // }
    }

    _onPanResponderGrant(event, gestureState) {

    }

    updateNativeProps() {
        this.view && this.view.setNativeProps(this.customStyle);
    }

    _onPanResponderMove(event, gestureState) {
        this.customStyle.style.top = this.top + gestureState.dy;
        this.customStyle.style.left = this.left + gestureState.dx;
        this.updateNativeProps()
    }

    render() {
        return (
            <Image ref={view => this.view = view} style={{width: 35, height: 35}}
                   {...this.panResponder.panHandlers}
                   source={require('../img/3/bi_do.png')}/>
        );
    }
}

class Draggable3 extends Component {
    constructor(props) {
        super(props);
        this.top = 0;
        this.left = 0;
        this.view = null;

        this.customStyle = {
            style: {
                showDraggable: true,
                top: this.top,
                left: this.left,
                opacity: new Animated.Value(1)
            }
        }
    }

    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
            onMoveShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderMove: this._onPanResponderMove.bind(this),
            onPanResponderRelease: this._onPanResponderRelease.bind(this),
        })
    }

    _onPanResponderRelease(event, gestureState) {
        this.top += gestureState.dy;
        this.left += gestureState.dx;
        // if (this.isDropArea(gestureState)) {
        //     Animated.timing(this.state.opacity, {
        //         toValue: 0,
        //         duration: 1000
        //     }).start(() =>
        //         this.setState({
        //             showDraggable: false
        //         })
        //     );
        // }
    }

    _onPanResponderGrant(event, gestureState) {

    }

    updateNativeProps() {
        this.view && this.view.setNativeProps(this.customStyle);
    }

    _onPanResponderMove(event, gestureState) {
        this.customStyle.style.top = this.top + gestureState.dy;
        this.customStyle.style.left = this.left + gestureState.dx;
        this.updateNativeProps()
    }

    render() {
        return (
            <Image ref={view => this.view = view} style={{width: 35, height: 35}}
                   {...this.panResponder.panHandlers}
                   source={require('../img/3/bi_den.png')}/>
        );
    }
}

class Draggable2 extends Component {
    constructor(props) {
        super(props);
        this.top = 0;
        this.left = 0;
        this.view = null;
        this.customStyle = {
            style: {
                showDraggable: true,
                top: this.top,
                left: this.left,
                opacity: new Animated.Value(1)
            }
        }
    }

    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
            onMoveShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderMove: this._onPanResponderMove.bind(this),
            onPanResponderRelease: this._onPanResponderRelease.bind(this),
        })
    }

    _onPanResponderRelease(event, gestureState) {
        this.top += gestureState.dy;
        this.left += gestureState.dx;
        // if (this.isDropArea(gestureState)) {
        //     Animated.timing(this.state.opacity, {
        //         toValue: 0,
        //         duration: 1000
        //     }).start(() =>
        //         this.setState({
        //             showDraggable: false
        //         })
        //     );
        // }
    }

    _onPanResponderGrant(event, gestureState) {

    }

    updateNativeProps() {
        this.view && this.view.setNativeProps(this.customStyle);
    }

    _onPanResponderMove(event, gestureState) {
        this.customStyle.style.top = this.top + gestureState.dy;
        this.customStyle.style.left = this.left + gestureState.dx;
        this.updateNativeProps()
    }

    render() {
        return (
            <Image ref={view => this.view = view} style={{width: 35, height: 35}}
                   {...this.panResponder.panHandlers}
                   source={require('../img/3/bi_cam.png')}/>
        );
    }
}

export default class Test_1 extends React.Component {
    static navigationOptions = {
        header: null
    };

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
                            <Image style={{width: 80, height: 110}}
                                   source={require('../img/3/lo_do.png')}/>

                            <Image style={{width: 80, height: 110}}
                                   source={require('../img/3/lo_cam.png')}/>

                            <Image style={{width: 80, height: 110}}
                                   source={require('../img/3/lo_den.png')}/>
                        </View>
                        <View style={styles.main}>
                            <Draggable1/>
                            <Draggable2/>
                            <Draggable3/>
                        </View>
                    </View>

                </Image>

            </Container>

        );
    }
}



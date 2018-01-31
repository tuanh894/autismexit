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

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sound : 'sound1.png'
            // iconName: "ios-people"
        }
    }
    static navigationOptions = {
        header: null
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Image style={styles.images} source={require('../img/bg_ip6.png')}></Image>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <TouchableOpacity>
                                <Image style={styles.imagesLeft} source={require('../img/sound1.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.imagesLeft} source={require('../img/rate.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.imagesLeft} source={require('../img/fb.png')}></Image>
                            </TouchableOpacity>

                        </View>
                        {/*<View style={styles.headerMain}>*/}
                        {/*<Image style={styles.imagesMain} source={require('../img/name.png')}></Image>*/}
                        {/*</View>*/}
                    </View>
                    {/*1   */}
                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game1")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma1st} source={require('../img/Boling.png')}></Image>
                                <Image style={styles.mainImaHand} source={require('../img/tay.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game2")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma2nd} source={require('../img/2/bong_xanhlam.png')}></Image>
                                <Image style={styles.mainIma2_2nd} source={require('../img/2/bongbay_do.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Chọn màu</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Test")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >

                                <Image style={styles.mainIma2nd} source={require('../img/3/lo_do.png')}></Image>
                                <Image style={styles.mainIma3_2nd} source={require('../img/3/bi_do.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Nhặt đồ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game4")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma4nd} source={require('../img/4/banh_mau_do.png')}></Image>
                                <Image style={styles.mainIma4_2nd} source={require('../img/4/banh_mau_do.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Giống nhau</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game5")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma4nd} source={require('../img/5/cho.png')}></Image>
                                <Image style={styles.mainIma4_2nd} source={require('../img/5/lon_1.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Khác loại</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/*2*/}
                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game6")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma4nd} source={require('../img/6/ghe.png')}></Image>
                                <Image style={styles.mainIma4_2nd} source={require('../img/6/maysaytoc_background.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Phân nhóm</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game7")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma7nd} source={require('../img/7/balo.png')}></Image>
                                <Image style={styles.mainIma7_2nd} source={require('../img/7/balo.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>To nhỏ</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game8")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma4nd} source={require('../img/8/hinhvuong.png')}></Image>
                                <Image style={styles.mainIma4_2nd} source={require('../img/8/hinhtron.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Vuông tròn</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game9")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma4nd} source={require('../img/9/tui1keo.png')}></Image>
                                <Image style={styles.mainIma4_2nd} source={require('../img/9/tui15keo.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Một, Nhiều</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate("Game10")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma10nd} source={require('../img/10/coc.png')}></Image>
                                <Image style={styles.mainIma10nd_1} source={require('../img/10/bi_do.png')}></Image>
                                <Image style={styles.mainIma10_2nd} source={require('../img/10/coc.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Có, Không</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/*3*/}
                    <View style={styles.main}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Game11")} style={styles.mainItem}>
                            <View style={styles.mainImgView} >
                                <Image style={styles.mainIma4nd} source={require('../img/11/ga.png')}></Image>
                                <Image style={styles.mainIma4_2nd} source={require('../img/11/tao.png')}></Image>
                            </View>
                            <View style={styles.mainTextView}>
                                <Text style={styles.mainNameGame}>Phủ định</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity  style={styles.mainItem}>
                            <View style={styles.mainImgView} >

                            </View>
                            <View style={styles.mainTextView}>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.mainItem}>
                            <View style={styles.mainImgView} >

                            </View>
                            <View style={styles.mainTextView}>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity  style={styles.mainItem}>
                            <View style={styles.mainImgView} >

                            </View>
                            <View style={styles.mainTextView}>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.mainItem}>
                            <View style={styles.mainImgView} >

                            </View>
                            <View style={styles.mainTextView}>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </Container>
        );
    }
}



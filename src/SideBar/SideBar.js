import React from "react";
import { AppRegistry, Image, StatusBar, View,  } from "react-native";
import {
    Button,
    Text,
    Container,
    List,Left, Right,Body,
    ListItem,
    Content,
    Icon, Thumbnail,Header
} from "native-base";
import {DrawerItems} from "react-navigation";

import styles from './style';


const routes = [
    ["Home","Trang chủ"],
    ["Exam","Đề luyện tập"],
    ["Semester","Thi học kỳ"],
    ["HighSchool","Thi học THPT Quốc Gia"],
    ["Rank","Bảng xếp hạng"],
    ["News","Tin tức giáo dục"],
    ["Profile","Thông tin tài khoản"],
    ["Setting","Cài đặt"],
    ["Login","Đăng nhập"],
    ["Logout","Thoát"]
];

export default class SideBar extends React.Component {
    render() {
        return (
            <Container>

                <Content>
                    <View style = {styles.header}>
                        <View style = {styles.left}>
                            <Thumbnail style={styles.image} source={require("../img/student.png")} />
                        </View>
                        <View style = {styles.right}>
                            <Text style={styles.text}>Bùi Khánh Băng</Text>
                            <Text style={styles.text}>Email: </Text>
                            <Text style={styles.text}>Ví của tôi: 10 coin</Text>
                        </View>
                    </View>
                    <View style = {styles.content}>
                        {/*<List*/}
                        {/*dataArray={routes}*/}
                        {/*renderRow={data => {*/}
                        {/*return (*/}
                        {/*<ListItem*/}
                        {/*button*/}
                        {/*onPress={() => this.props.navigation.navigate(data[0])}*/}
                        {/*>*/}
                        {/*</ListItem>*/}
                        {/*);*/}
                        {/*}}*/}
                        {/*/>*/}

                        <DrawerItems {...this.props} />

                    </View>

                </Content>
            </Container>

        );
    }
}

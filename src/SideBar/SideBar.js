import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,Left, Right,
  ListItem,
  Content,
  Icon
} from "native-base";

const routes = [
  ["Home","Trang chủ"], 
  ["Exam","Đề luyện tập"],
  ["Semester","Thi học kỳ"],
  ["HighSchool","Thi học THPT Quốc Gia"],
  ["Rank","Bảng xếp hạng"],
  ["News","Tin tức giáo dục"],
  ["Profile","Thông tin tài khoản"],
  ["Setting","Cài đặt"],
  ["Logout","Thoát"]
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
          <Left>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </Left>
          <Right>
              <Text>Bùi Khánh Băng</Text>
              <Text>Lớp 9 - THCS Marie Curie</Text>
              <Text>Ví của tôi: 10 coin</Text>
          </Right>
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data[0])}
                >
                  <Text>{data[1]}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

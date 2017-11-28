import React from "react";
import {AppRegistry, Alert} from "react-native";

import {
    Text,
    Tab, Tabs,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    List,
    ListItem,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H1,
} from "native-base";
import {StackNavigator} from "react-navigation";
import TabMost from './TabMost';
import TabAverage from './TabAverage';
import TabReport from './TabReport';
// import Detail from './Detail';
export default class Rank extends React.Component {
    render() {
        return (
            <Container>
                <Tabs >
                    <Tab heading="Chuyên cần">
                        <TabMost />
                    </Tab>
                    <Tab heading="Điểm trung bình">
                        <TabAverage />
                    </Tab>

                    <Tab heading="Thống kê">
                        <TabReport />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
Rank.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
                    <Icon name="menu"/>
                </Button>
            </Left>
            <Body>
            <Title>Bảng xếp hạng</Title>
            </Body>
            <Right/>
        </Header>
    )
});

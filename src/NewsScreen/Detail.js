import React, { Component } from 'react';
import { Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    H1,
    Header,
    Icon,
    Left,
    Right,
    Text,
    Title,
    List,
    ListItem
} from 'native-base';
import styles from './style';
import HTMLView from 'react-native-htmlview';


export  default class Detail extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isLoading: true,
            item: [],
        }
    }

    componentDidMount() {
        const { params } = this.props.navigation.state;
        let Url = 'http://beta.luyentap.vn/frontend/web/api/v1/article/view?id='+params.item.id;
        return fetch(Url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    item: responseJson,
                }, function () {
                    // do something with new state
                    console.log("Lay du lieu thanh cong");
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                <Title>Detail</Title>
                </Body>
                <Right />
            </Header>

        )
    });
    render() {

        return(
            <Container style={styles.container}>
                <Content style={styles.content}>
                  <Body>
                     <Text style={styles.title}>{this.state.item.title}</Text>
                     <HTMLView value={this.state.item.body} StyleSheet = {styles}/>
                  </Body>
                </Content>
            </Container>
        );
    }

}

import React from "react";

import {
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,List, ListItem, Switch,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H1,
    Thumbnail
} from "native-base";
import styles from './style';

export default class Adviser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }
    componentDidMount(){
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/adviser')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    items: responseJson.items,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render(){
        const {navigate} = this.props.navigation;
        return(
          <Container style={styles.container}>
              <Content>
                  <List dataArray={this.state.items}
                        renderRow={(item) =>
                            <ListItem onPress={() => navigate("DetailAdviser", { item})}>
                                <Thumbnail square large size={160} source={{uri: (item.absUrl)}}/>
                                <Body>
                                <Text>{item.name}</Text>
                                </Body>
                            </ListItem>
                        }>
                  </List>
              </Content>
          </Container>
        );
    }
}
Adviser.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
            <Title>Cố vấn đồng hành</Title>
            </Body>
            <Right/>
        </Header>
    )
});
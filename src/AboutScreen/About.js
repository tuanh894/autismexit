import React from "react";

import {
    Text,
    Container,
    Body,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H1,List,ListItem
} from "native-base";
import HTMLView from 'react-native-htmlview';
import styles from './style';

export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }
    componentDidMount(){
        return fetch('http://beta.luyentap.vn/frontend/web/api/v1/about')
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
        return(
          <Container style={styles.container}>
            <Content>
                <List
                    dataArray={this.state.items}
                    renderRow={(item) =>

                        <ListItem >
                            <Body>
                                <HTMLView value={item.body}/>
                            </Body>
                        </ListItem>
                    }
                >
                </List>
            </Content>
          </Container>
        );
    }
}

About.navigationOptions = ({navigation}) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
            <Title>Về chúng tôi</Title>
            </Body>
            <Right/>
        </Header>
    )
});
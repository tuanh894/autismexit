import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon} from 'native-base';

export  default class Detail extends Component{
    render() {
        return(
            <Container>

                <Content>
                    <Body>
                    <Text>{params.title}</Text>
                    <Text note>{params.summary}</Text>
                    <Text note>{params.published_at}</Text>
                    </Body>
                </Content>
            </Container>
        );
    }

}

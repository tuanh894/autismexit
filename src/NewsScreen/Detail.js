import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon} from 'native-base';
import {connect} from 'react-redux';

import { Actions } from 'react-native-router-flux';

export  default class Detail extends Component{
    render() {
        const { params } = this.props.navigation.state;
        const {goBack} = this.props.navigation;
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

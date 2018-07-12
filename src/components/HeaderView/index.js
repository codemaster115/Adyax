import React, { Component } from 'react';
import styles from './style';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { Header, Left, Right, Body, Title, Input, Icon, Button, Text } from 'native-base'

export default class HeaderView extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#2F5191' }}>
                <View style={{ height: 20 }} />
                <View style={{ flexDirection: 'row', height: 60 }}>
                    <Left style={styles.Left}>
                        <Button
                            transparent
                            onPress={this.props.onPressBack}
                        >
                            <Icon type='Ionicons' name='md-arrow-back' style={styles.Icon} />
                        </Button>
                    </Left>
                    <View style={styles.Body}>
                        <Title>News Feed</Title>
                    </View>
                    <Right style={styles.Right}>
                        <Button transparent>
                            <Icon name='ios-search' style={styles.Icon} />
                        </Button>
                    </Right>
                </View>
            </View>
        )
    }
}

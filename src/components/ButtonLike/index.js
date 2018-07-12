import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { Icon, View } from 'native-base';

export default class MyText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonClicked: false,
        }
    }

    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={styles.buttonLike}
                onPress={() => {
                    this.setState({ buttonClicked: !this.state.buttonClicked });
                }}
            >
                <Icon
                    type={this.props.iconType}
                    name={this.props.iconName}
                    style={[this.state.buttonClicked == false ? styles.iconLike : styles.iconLikeSel,
                    this.props.iconSmall == true ? { fontSize: 16 } : { fontSize: 24 }]}
                />
                <View style={{ width: 5 }} />
                <Text
                    style={this.state.buttonClicked == false ? styles.font : styles.fontSel}
                >
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}
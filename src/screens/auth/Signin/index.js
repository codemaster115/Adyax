import React, { Component } from 'react';
import { View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import { Button, Text, Label, Input, Form, Item } from 'native-base';
import AnimationButton from '../../../components/AnimationButton';
import { getNewsFeed } from '../../../actions/feed';

class SignInPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onPressSignIn() {
        this.props.navigation.navigate('AdyaxNavigator');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#008ABA' }}>
                <View style={{ flex: 1, margin: 30 }}>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Label style={{ textAlign: 'center', fontFamily: 'Comfortaa-Regular', fontSize: 32, color: 'white' }}>Adyax</Label>
                    </View>
                    <KeyboardAvoidingView style={{ flex: 4, justifyContent: 'space-between' }} behavior="padding" >
                        <Form>
                            <Item floatingLabel style={{ marginLeft: 0, marginBottom: 10 }}>
                                <Label style={{ color: 'white' }}>Email</Label>
                                <Input
                                    style={{ color: 'white' }}
                                    selectionColor="white"
                                    value={this.state.email}
                                    onChangeText={(value) => this.setState({ email: value })}
                                />
                            </Item>
                            <Item floatingLabel style={{ marginLeft: 0, marginBottom: 10 }}>
                                <Label style={{ color: 'white' }}>Password</Label>
                                <Input
                                    style={{ color: 'white' }}
                                    selectionColor="white"
                                    secureTextEntry
                                    value={this.state.password}
                                    onChangeText={(value) => this.setState({ password: value })}
                                />
                            </Item>
                        </Form>
                        <View style={{ height: 30 }} />
                        <AnimationButton
                            buttonText="Sign In"
                            textColor="white"
                            onPress={this.onPressSignIn.bind(this)}
                        />
                        <TouchableOpacity
                            style={{ height: 30, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => this.props.navigation.navigate('Signup')}
                        >
                            <Text style={{ fontSize: 14, color: 'white' }}> Sign Up </Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />
                    </KeyboardAvoidingView>
                </View>
            </View >
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};

export default connect()(SignInPage);
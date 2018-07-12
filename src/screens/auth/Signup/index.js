import React, { Component } from 'react';
import { View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import { Button, Text, Label, Input, Form, Item } from 'native-base';
import AnimationButton from '../../../components/AnimationButton';
import { getNewsFeed } from '../../../actions/feed';
import { Signup } from '../../../actions/auth';

class SignupPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onPressSignup() {
        let SignupData = {
            email: this.state.email,
            password: this.state.password,
            connection: "News"
        }
        this.props.dispatch(Signup(SignupData));
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
                            buttonText="Sign Up"
                            textColor="white"
                            isAnimating={this.props.auth.isFetching}
                            onPress={this.onPressSignup.bind(this)}
                        />
                        <TouchableOpacity
                            style={{ height: 30, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => this.props.navigation.navigate('SignIn')}
                        >
                            <Text style={{ fontSize: 14, color: 'white' }}> Sign In </Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />

                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(SignupPage);
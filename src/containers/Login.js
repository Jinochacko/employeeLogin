import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../common/Styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { LOGIN_COVER } from '../common/constants';
import { isEmail } from '../common/formHelper';

class Login extends Component {
    static propTypes = {
        navigation: PropTypes.shape({}),
        login: PropTypes.func,
        isLogged: PropTypes.bool,
        isLoginSubmitted: PropTypes.bool
    };

    static defaultProps = {
        navigation: {},
        login: () => {},
        isLogged: false,
        isLoginSubmitted: false
    };

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            emailError: false,
            passwordError: false
        }
    }

    submit = () => {
        const { email, password } = this.state;
        const { login } = this.props;
        let isValid = true;
        if(!isEmail(email)){
            this.setState({emailError: true});
            isValid = false;
        } else {
            this.setState({emailError: false});
        }
        if(!password){
            this.setState({passwordError: true});
            isValid = false;
        } else {
            this.setState({passwordError: false});
        }
        if(isValid){
            login({username: email, password});
        }
    }

    render(){
        const { email, password, emailError, passwordError } = this.state;
        
        return (
            <View style={{flex: 1, backgroundColor: '#0a468f'}}> 
                <View style={{flex: 1, backgroundColor: '#0a468f', justifyContent: 'center'}}>
                    <Image style={styles.loginCover} source={{uri: LOGIN_COVER}} />
                </View>
                <View style={{flex: 2, backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{width: '50%', marginTop: 20}}>
                        <Text>Email</Text>                        
                        <TextInput
                            style={styles.input}
                            onChangeText={text=>{this.setState({email: text})}}
                            value={email}
                            placeholder="User email id"
                        />
                        {emailError && <Text style={styles.error}>Please enter valid email</Text>}
                    </View>
                    <View style={{width: '50%', marginTop: 20}}>
                        <Text>Password</Text>                        
                        <TextInput
                            style={styles.input}
                            onChangeText={text=>{this.setState({password: text})}}
                            value={password}
                            placeholder="User password"
                            secureTextEntry={true}
                        />
                        {passwordError && <Text style={styles.error}>Please enter password</Text>}
                    </View>
                    <View style={{width: '50%', marginTop: 20}}>
                        <TouchableOpacity onPress={this.submit} style={{borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a468f', padding: 10}}>
                            <Text style={{color: '#fff'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function bindAction(dispatch) {
    return {
        login: obj => dispatch(login(obj))
    };
}
const mapStateToProps = state => ({
    isLogged: state.login.isLogged,
    isLoginSubmitted: state.login.isLoginSubmitted
});

export default connect(
    mapStateToProps,
    bindAction,
)(Login);
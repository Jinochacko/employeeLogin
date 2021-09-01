import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from "./containers/Login";
import EmployeesList from "./containers/EmployeesList";

const Stack = createNativeStackNavigator();

class AppNavigation extends Component {
    static propTypes = {
        isLogged: PropTypes.bool,
    };

    static defaultProps = {
        isLogged: false,
    };

    render(){      
        const { isLogged } = this.props;  
        return (            
            <NavigationContainer>
              <Stack.Navigator>
                {isLogged ? 
                    <Stack.Screen name="Employees" component={EmployeesList} />: 
                    <Stack.Screen name="Login" component={Login} />
                }                
              </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

function bindAction(dispatch) {
    return { };
}
const mapStateToProps = state => ({
    isLogged: state.login.isLogged
});

export default connect(
    mapStateToProps,
    bindAction,
)(AppNavigation);
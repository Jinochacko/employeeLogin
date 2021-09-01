import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import styles from '../common/Styles';
import AnimateList from '../components/AnimateList';
import ListItem from '../components/ListItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';

class EmployeesList extends Component {
    static propTypes = {
        navigation: PropTypes.shape({}),
        users: PropTypes.array,
        getUsers: PropTypes.func
    };

    static defaultProps = {
        navigation: {},
        users: [],
        getUsers: () => {}
    };

    componentDidMount(){
        this.loadData();
    }

    loadData = (item) => {
        const { getUsers } = this.props;
        getUsers();
    }
    
    renderItem = ({item, index}) => (
        <AnimateList
            index={index}
            direction="x"
            renderContent={<ListItem item={item} />}
        />
    );

    render(){
        const { users } = this.props;
        
        return (
            <View style={styles.page}> 
                {users.length > 0 && (
                    <FlatList data={users} keyExtractor={item=>'employee'+item.id} renderItem={this.renderItem} />
                )}
            </View>
        );
    }
}

function bindAction(dispatch) {
    return {
        getUsers: () => dispatch(getUsers())
    };
}
const mapStateToProps = state => ({
    users: state.users.list.data
});

export default connect(
    mapStateToProps,
    bindAction,
)(EmployeesList);
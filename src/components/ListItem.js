import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../common/Styles';
import {NO_AVATAR} from '../common/constants';

export default class ListItem extends Component {
    
    render(){
        const {item: { name, email, phoneNo, gender, age }} = this.props;
        return (<View style={[styles.mainWrap, styles.rowContent]}>
                    <View style={styles.profileInfo}>
                        <View style={[styles.rowContent, styles.alignCenter]}>
                            <View style={[styles.alignCenter, styles.avatarWrap]}>
                                <View style={styles.avatarStyle}>
                                    <Image style={styles.listAvatar} source={{uri: NO_AVATAR}} />
                                </View>
                            </View>
                            <View style={styles.nameWrap}>
                                <Text style={[styles.textBold]}>{name}</Text>
                                <Text>{gender} | {age} years</Text>
                                <Text>{email}</Text>
                                <Text style={styles.phone}>{phoneNo}</Text>
                            </View>
                        </View>
                    </View>
                </View>);
    }
}
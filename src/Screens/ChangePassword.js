// PROJECT STARTING DATE IS : 02/11/2023


import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';

export default function VerifyOTP(props) {
    const { navigation } = props;
    return (
        <SafeAreaView style={styles.wholeView}>
            <View>
                <Text style={styles.notificationStyle}>Change Password </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Icons name="arrow-left"
                        style={styles.leftArrow}
                    />
                </TouchableOpacity>
                <Text style={styles.labelTextTop}>Old Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder='Type Here'
                    style={styles.inputField}>
                </TextInput>
                <TouchableOpacity>
                    <Icon name="eye"
                        style={styles.icons}
                    />
                </TouchableOpacity>
                <Text style={styles.labelText}>New Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder='Type Here'
                    style={styles.inputField}>
                </TextInput>
                <TouchableOpacity>
                    <Icon name="eye"
                        style={styles.icons}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveText}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1,
        backgroundColor: '#eff2f5',
        margin: 16
    },
    labelText: {
        color: '#969aaa',
        fontSize: 18,
        marginTop: 15
    },
    saveText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16
    },
    saveButton: {
        backgroundColor: '#102689',
        paddingVertical: 12,
        marginTop: 30,
        borderRadius: 5,
    },
    labelTextTop: {
        color: '#969aaa',
        fontSize: 18,
        marginTop: 35
    },
    inputField: {
        backgroundColor: '#f7f9fb',
        borderRadius: 10,
        paddingLeft: 15,
        marginTop: 15
    },
    icons: {
        alignSelf: 'flex-end',
        paddingRight: 15,
        marginTop: -38,
        fontSize: 25,
        color: '#9e9fa0'
    },
    leftArrow: {
        fontSize: 25,
        fontWeight: '600',
        marginTop: -25
    },
    notificationStyle: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000000',
        fontWeight: '700',
    },
});


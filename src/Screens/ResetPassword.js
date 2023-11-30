// PROJECT STARTING DATE IS : 02/11/2023


import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';


export default function VerifyOTP(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('verifyOTP')}>
                <Icons name="arrow-left"
                    style={styles.leftArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../../images/tailor-logo.jpg')}
                style={styles.imageStyling}
            />
            <Text style={styles.headingStyle}>Reset Password.</Text>
            <Text style={styles.forgetText}>Enter a new password.</Text>
            <Text style={styles.labelText}>Password</Text>
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
            <TouchableOpacity style={styles.loginBackground}>
                <Text style={styles.loginbuttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff2f5',
        margin: 16
    },
    forgetText: {
        color: '#aaa9a9',
        fontSize: 20,
        lineHeight: 25,
        marginVertical: 20,
        paddingRight: 25
    },
    leftArrow: {
        fontSize: 25,
        fontWeight: '600',
        marginTop: 50
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
    labelTextEmail: {
        color: '#969aaa',
        fontSize: 18,
        marginTop: 40
    },
    labelText: {
        color: '#969aaa',
        fontSize: 18,
        marginTop: 15
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    donthaveAccount: {
        fontSize: 16,
        color: '#505050'
    },
    signUp: {
        fontSize: 16,
        color: '#102689',
        fontWeight: '600'
    },
    spaceBetweenSignup: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonStyleCustomer: {
        marginTop: 25,
        backgroundColor: '#a6a5a5',
        width: '47%',
        padding: 11,
        borderRadius: 10
    },
    buttonStyleTailor: {
        marginTop: 25,
        backgroundColor: '#102689',
        width: '47%',
        padding: 11,
        borderRadius: 10
    },
    loginbuttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500'
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500'
    },
    loginBackground: {
        backgroundColor: '#102689',
        marginTop: 40,
        padding: 10,
        borderRadius: 10
    },
    headingStyle: {
        color: '#000000',
        fontSize: 28,
        fontWeight: '700',
        marginTop: 40
    },
    imageStyling: {
        alignSelf: 'center',
        marginTop: -40
    },
    forgetPass: {
        fontSize: 16,
        textAlign: 'right',
        marginTop: 15,
        color: '#102689'
    }

});


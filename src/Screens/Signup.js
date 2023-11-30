// PROJECT STARTING DATE IS : 02/11/2023


import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Signup(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icons name="arrow-left"
                    style={styles.leftArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../../images/tailor-logo.jpg')}
                style={styles.imageStyling}
            />
            <Text style={styles.headingStyle}>Greeting!!!</Text>
            <View style={styles.spaceBetween}>
                <TouchableOpacity style={styles.buttonStyleCustomer}>
                    <Text style={styles.buttonText}>Customer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyleTailor}>
                    <Text style={styles.buttonText}>Tailor</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.labelTextEmail}>Username</Text>
            <TextInput
                placeholder='Type Here'
                style={styles.inputField}
            />
            <Text style={styles.labelText}>Email</Text>
            <TextInput
                placeholder='Type Here'
                style={styles.inputField}
            />
            <Text style={styles.labelText}>Password</Text>
            <TextInput
                placeholder='Type Here'
                style={styles.inputField}>
            </TextInput>
            <TouchableOpacity>
                <Icon name="eye"
                    style={styles.icons}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBackground}>
                <Text style={styles.loginbuttonText}>Create Account</Text>
            </TouchableOpacity>
            {/* <View style={styles.spaceBetweenSignup}>
                <Text style={styles.donthaveAccount}>Don't have an account? </Text>
                <TouchableOpacity>
                    <Text style={styles.signUp}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff2f5',
        margin: 16
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


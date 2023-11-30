// PROJECT STARTING DATE IS : 02/11/2023


import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

export default function Home(props) {
    const { navigation } = props;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View>
                <Image
                    source={require('../../images/tailor-logo.jpg')}
                    style={styles.imageStyling}
                />
                <Text style={styles.headingStyle}>Welcome back</Text>
                <View style={styles.spaceBetween}>
                    <TouchableOpacity style={styles.buttonStyleCustomer}>
                        <Text style={styles.buttonText}>Customer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyleTailor}>
                        <Text style={styles.buttonText}>Tailor</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.labelTextEmail}>Email</Text>
                <TextInput
                    placeholder='Type Here'
                    style={styles.inputField}
                // value={text}
                />
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
                <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                    <Text style={styles.forgetPass}>Forget Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBackground} onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.loginbuttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.spaceBetweenSignup}>
                    <Text style={styles.donthaveAccount}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.signUp}>
                            SignUp
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff2f5',
        marginHorizontal: 15,
        justifyContent: 'center',
        paddingBottom: 150
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
        color: '#505050',
        textAlign: 'center'
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
        marginTop: 30
    },
    forgetPass: {
        fontSize: 16,
        textAlign: 'right',
        marginTop: 15,
        color: '#102689'
    }

});


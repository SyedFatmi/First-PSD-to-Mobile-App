// PROJECT STARTING DATE IS : 02/11/2023


import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome5';

export default function VerifyOTP(props) {
    const { navigation } = props;
    return (
        <SafeAreaView style={styles.wholeView}>
            <View style={styles.container}>
                <Text style={styles.notificationStyle}>Privacy Policy </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icons name="arrow-left"
                        style={styles.leftArrow}
                    />
                </TouchableOpacity>
                <Text style={styles.paraText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </Text>
                <Text style={styles.paraText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </Text>
                <Text style={styles.paraText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1
    },
    paraText: {
        fontSize: 16,
        color: '#000000',
        lineHeight: 20,
        marginTop: 20
    },
    leftArrow: {
        fontSize: 25,
        fontWeight: '600',
        marginTop: -25
    },
    topView: {
        marginTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#eff2f5',
        margin: 16
    },
    iconStyle: {
        color: '#bec6d6',
        fontSize: 32,
        paddingRight: 20
    },
    sideMenuText: {
        fontSize: 16,
        color: '#000000',
        fontWeight: '500',
        paddingTop: 5
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 15,
    },
    notificationStyle: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000000',
        fontWeight: '700',
    },
});


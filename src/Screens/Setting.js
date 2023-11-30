// PROJECT STARTING DATE IS : 02/11/2023


import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Notifications = [
    { id: 1, name: 'Change Password', icon: 'lock', link: 'ChangePassword' },
    { id: 2, name: 'Deactivate Account', icon: 'trash', link: 'DeactivateAccount' }
];

export default function VerifyOTP(props) {
    const { navigation } = props;
    return (
        <SafeAreaView style={styles.wholeView}>
            <View style={styles.container}>
                <Text style={styles.notificationStyle}>Settings </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icons name="arrow-left"
                        style={styles.leftArrow}
                    />
                </TouchableOpacity>
                <FlatList
                    style={styles.topView}
                    showsVerticalScrollIndicator={false}
                    data={Notifications}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View >
                            <View style={styles.horizontalView}>
                                <Icons
                                    name={item.icon}
                                    style={styles.iconStyle} />
                                <TouchableOpacity onPress={() => navigation.navigate(item.link)}>
                                    <Text style={styles.sideMenuText}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1
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


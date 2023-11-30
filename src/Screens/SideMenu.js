// PROJECT STARTING DATE IS : 02/11/2023


import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Notifications = [
    { id: 1, name: 'Setting', icon: 'cog', link: 'Setting' },
    { id: 2, name: 'Privacy Policy', icon: 'info-circle', link: 'PrivacyPolicy' },
    { id: 3, name: 'Support', icon: 'headset', link: 'Support' },
    { id: 4, name: 'Sign out', icon: 'sign-out-alt', link: 'Home' },
];

export default function VerifyOTP(props) {
    const { navigation } = props;
    return (
        <SafeAreaView style={styles.wholeView}>
            <View style={styles.container}>
                <Text style={styles.notificationStyle}>Side Menu</Text>

                <FlatList
                    style={styles.topView}
                    showsVerticalScrollIndicator={false}
                    data={Notifications}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View>
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


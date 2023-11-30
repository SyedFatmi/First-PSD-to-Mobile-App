// PROJECT STARTING DATE IS : 02/11/2023


import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';

const Orders = [
    { id: 15, name: 'New Orders', color: '#ffd682' },
    { id: 30, name: 'Ongoing Orders', color: '#87d8ff' },
    { id: 16, name: 'Sent Orders', color: '#ffa29b' },
    { id: 70, name: 'Completed Orders', color: '#4cb588' },
    { id: 130, name: 'Total Orders', color: '#bfc7d7' },
    { id: 19, name: 'Orders', color: '#ffd682' },
];

const Ratings = [
    { id: 48, name: 'Average Rating', color: '#ffd682' },
    { id: 128, name: 'Total Reviews', color: '#87d8ff' },
    { id: 323, name: 'Target Audience', color: '#ffa29b' },

];

export default function ForgetPassword(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Icons name="bell"
                    style={styles.leftArrow}
                />
            </TouchableOpacity>
            <Image
                source={require('../../images/tailor-logo.jpg')}
                style={styles.imageStyling}
            />
            <Text style={styles.OrdersText}>
                Orders
            </Text>
            <View>
                <FlatList
                    data={Orders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.horizontalView, { backgroundColor: item.color }]}>
                            <Text style={styles.myFlatlistText}>
                                {item.name}
                            </Text>
                            <Text style={styles.myFlatlistId}>
                                {item.id}
                            </Text>
                        </View>
                    )}
                />
                <Text style={styles.OrdersText}>
                    Ratings
                </Text>
                <FlatList
                    data={Ratings}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.horizontalView, { backgroundColor: item.color }]}>
                            <Text style={styles.myFlatlistText}>
                                {item.name}
                            </Text>
                            <Text style={styles.myFlatlistId}>
                                {item.id}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff2f5',
        margin: 16
    },
    OrdersText: {
        fontSize: 24,
        color: '#000000',
        marginTop: 30,
        fontWeight: '500'
    },
    horizontalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
        padding: 5,
        borderRadius: 5,
    },
    myFlatlistText: {
        fontSize: 18,
        paddingTop: 7,
        fontWeight: '500',
        color: '#000000',

    },
    myFlatlistId: {
        fontSize: 32,
        color: '#000000',
        fontWeight: '700'
    },
    leftArrow: {
        fontSize: 25,
        fontWeight: '600',
        marginTop: 50,
        textAlign: 'center',
        paddingRight: 10,
        color: '#ffffff',
        backgroundColor: '#102689',
        width: '15%',
        flexDirection: 'row',
        paddingTop: 12,
        paddingLeft: 10,
        alignSelf: 'flex-end',
        borderRadius: 100,
        height: 50
    },
    imageStyling: {

        marginTop: -55
    },


});


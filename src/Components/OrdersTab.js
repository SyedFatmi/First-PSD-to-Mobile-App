import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Ratings = [
    {
        Order: 'Order#: PSJ73Y8',
        Date: '15 sep 22 | 4:45',
        Name: 'Customer: John Doe',
        Type: 'Wedding Gown',
        Delivery: 'Delivery: 15 Sep 22',
        Dress: 'Cotton',
        Price: 'Total PKR: 8500',
        details: 'Details',
    },
    {
        Order: 'Order#: PSJ73Y9',
        Date: '15 sep 22 | 4:45',
        Name: 'Customer: John Doe',
        Type: 'Wedding Gown',
        Delivery: 'Delivery: 15 Sep 22',
        Dress: 'Cotton',
        Price: 'Total PKR: 8500',
        details: 'Details',
    },
    {
        Order: 'Order#: PSJ73Y7',
        Date: '15 sep 22 | 4:45',
        Name: 'Customer: John Doe',
        Type: 'Wedding Gown',
        Delivery: 'Delivery: 15 Sep 22',
        Dress: 'Cotton',
        Price: 'Total PKR: 8500',
        details: 'Details',
    },
    {
        Order: 'Order#: PSJ73Y6',
        Date: '15 sep 22 | 4:45',
        Name: 'Customer: John Doe',
        Type: 'Wedding Gown',
        Delivery: 'Delivery: 15 Sep 22',
        Dress: 'Cotton',
        Price: 'Total PKR: 8500',
        details: 'Details',
    },
];

export default function OrdersTab(props) {
    const { title } = props;

    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                textAlign: 'center',
                marginTop: 25,
                marginBottom: 15,
                color: '#000000',
                fontSize: 20,
                fontWeight: '500'
            }}>{title}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Ratings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.container}>
                            <View style={styles.inOneRow}>
                                <Text style={styles.orderStyle}>
                                    {item.Order}
                                </Text>
                                <Text style={styles.dateStyle}>
                                    {item.Date}
                                </Text>
                            </View>
                            <View style={styles.inOneRow}>
                                <Text style={styles.orderStyle}>
                                    {item.Name}
                                </Text>
                                <Text style={styles.dateStyle}>
                                    {item.Type}
                                </Text>
                            </View>
                            <View style={styles.inOneRowBorder}>
                                <Text style={styles.orderStyle}>
                                    {item.Delivery}
                                </Text>
                                <Text style={styles.dateStyle}>
                                    {item.Dress}
                                </Text>
                            </View>
                            <View style={[styles.inOneRow, { marginTop: 5 }]}>
                                <Text style={styles.orderStyle}>
                                    {item.Price}
                                </Text>
                                <Text style={styles.dateStyle}>
                                    {title}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
                }
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 7,
        backgroundColor: '#ffd682',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    inOneRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    inOneRowBorder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingBottom: 15
    },
    orderStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500'
    },
    dateStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500'
    }
});
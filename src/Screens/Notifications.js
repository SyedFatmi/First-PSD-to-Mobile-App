// PROJECT STARTING DATE IS : 02/11/2023

import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';

// const [data, setData] = useState([]);

const Notifications = [
    { id: 1, notification: 'Lorem ipsum dolor sit amet, consettetur adf sadipscing elitr, sed diam nonumy aushtio eirmod tempor invidunt ut labore et.', dateTime: '9:41 am  | 3-6-2023', DeleteButton: 'Delete' },
    { id: 2, notification: 'Lorem ipsum dolor sit amet, consettetur adf sadipscing elitr, sed diam nonumy aushtio eirmod tempor invidunt ut labore et.', dateTime: '9:41 am  | 3-6-2023', DeleteButton: 'Delete' },
    { id: 3, notification: 'Lorem ipsum dolor sit amet, consettetur adf sadipscing elitr, sed diam nonumy aushtio eirmod tempor invidunt ut labore et.', dateTime: '9:41 am  | 3-6-2023', DeleteButton: 'Delete' },
    { id: 4, notification: 'Lorem ipsum dolor sit amet, consettetur adf sadipscing elitr, sed diam nonumy aushtio eirmod tempor invidunt ut labore et.', dateTime: '9:41 am  | 3-6-2023', DeleteButton: 'Delete' },
    { id: 5, notification: 'Lorem ipsum dolor sit amet, consettetur adf sadipscing elitr, sed diam nonumy aushtio eirmod tempor invidunt ut labore et.', dateTime: '9:41 am  | 3-6-2023', DeleteButton: 'Delete' },
    { id: 6, notification: 'Lorem ipsum dolor sit amet, consettetur adf sadipscing elitr, sed diam nonumy aushtio eirmod tempor invidunt ut labore et.', dateTime: '9:41 am  | 3-6-2023', DeleteButton: 'Delete' },
    { id: 7, notification: 'Lorem ipsum dolor sit amet, consettetur adf sadipscing elitr, sed diam nonumy aushtio eirmod tempor invidunt ut labore et.', dateTime: '9:41 am  | 3-6-2023', DeleteButton: 'Delete' },
    { id: 8, notification: 'Lorem ipsum dolor sit amet, consettetur adf sadipscing elitr, sed diam nonumy aushtio eirmod tempor invidunt ut labore et.', dateTime: '9:41 am  | 3-6-2023', DeleteButton: 'Delete' },

];

// const deleteItem = (id) => {
//     setData(prevData => prevData.filter(item => item.id !== id));
// };

export default function VerifyOTP(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.notificationStyle}>Notifications</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons name="arrow-left"
                    style={styles.leftArrow}
                />
            </TouchableOpacity >

            <FlatList
                showsVerticalScrollIndicator={false}
                data={Notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.wholeFlatlist}>
                        <Text style={styles.myFlatlistText}>
                            {item.notification}
                        </Text>
                        <View style={styles.horizontalAlign}>
                            <Text style={styles.myFlatlistDate}>
                                {item.dateTime}
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.myFlatlistDelete}>
                                    {item.DeleteButton}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff2f5',
        margin: 16
    },
    myFlatlistDelete: {
        color: 'red'
    },
    myFlatlistDate: {
        fontSize: 12
    },
    horizontalAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10
    },
    wholeFlatlist: {
        marginBottom: 20
    },
    myFlatlistText: {
        fontSize: 16,
        marginTop: 20,
        marginHorizontal: 20
    },
    leftArrow: {
        fontSize: 25,
        fontWeight: '600',
        marginTop: -30,
    },
    notificationStyle: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000000',
        fontWeight: '700',
        marginTop: 50
    },
});


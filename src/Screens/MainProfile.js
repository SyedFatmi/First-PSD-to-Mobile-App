import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import Star1 from 'react-native-vector-icons/FontAwesome';

const Orders = [
    { id: 1, title: 'My Prize Winner Dress', description: 'Lorem ipsum dolor sit amet, consectetur.', date: '9:41 am | today' },
    { id: 2, title: 'My Prize Winner Dress', description: 'Lorem ipsum dolor sit amet, consectetur.', date: '9:41 am | today' },
    { id: 3, title: 'My Prize Winner Dress', description: 'Lorem ipsum dolor sit amet, consectetur.', date: '9:41 am | today' },
    { id: 4, title: 'My Prize Winner Dress', description: 'Lorem ipsum dolor sit amet, consectetur.', date: '9:41 am | today' },
    { id: 5, title: 'My Prize Winner Dress', description: 'Lorem ipsum dolor sit amet, consectetur.', date: '9:41 am | today' },

];

export default function MainProfile(props) {
    const { navigation } = props;
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.mainHeading}>My Profile</Text>
            <TouchableOpacity>
                <Icons name="pencil-square-o"
                    style={styles.rightArrow}
                />
            </TouchableOpacity>
            <View style={styles.InARow}>
                <Image
                    source={require('../../images/profile-image.jpg')}
                    style={styles.imageStyling}
                />
                <View style={styles.InOneRow}>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}> John Doe</Text>
                    <Text style={{ color: '#000000', fontSize: 14, }}> Experience</Text>
                </View>
                <View style={styles.InRow}>
                    <View style={{
                        flexDirection: 'row', marginLeft: 3, marginTop: 5
                    }}>
                        <Star1 name="star" style={styles.iconStyle} />
                        <Star1 name="star" style={styles.iconStyle} />
                        <Star1 name="star" style={styles.iconStyle} />
                        <Star1 name="star" style={styles.iconStyle} />
                        <Star1 name="star-o" style={styles.iconStyle} />
                    </View>
                    <Text style={{ color: '#000000', fontSize: 14, }}> 10 Years</Text>
                </View>
                <Text style={styles.parastyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</Text>
                <Text style={{ color: '#000000', paddingTop: 5 }}>Location: Karachi, Sindh</Text>
                <Text style={{ color: '#000000', paddingTop: 5 }}>Specialization: Ladies, Wear</Text>
                <View style={styles.spaceBetween}>
                    <TouchableOpacity style={styles.buttonStyleCustomer}>
                        <Text style={styles.buttonText}>Portfolio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyleTailor}>
                        <Text style={styles.buttonText}>Reviews</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{ textAlign: 'right', color: '#102689', marginTop: 10, fontWeight: '500' }}>+ Add New</Text>
                </TouchableOpacity>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Orders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 2 }}>
                            <View>
                                <Image
                                    source={require('../../images/portfolio.jpg')}
                                    style={styles.profileImage}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10 }}>
                                <Text style={{ fontWeight: '600', color: '#000000', fontSize: 16 }}>{item.title}</Text>
                                <Text style={{ color: '#000000', fontSize: 14 }}>{item.description}</Text>
                                <Text style={{ textAlign: 'right', paddingTop: 10, color: '#000000' }}>{item.date}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonStyleTailor: {
        marginTop: 25,
        backgroundColor: '#102689',
        width: '47%',
        padding: 11,
        borderRadius: 10
    },
    buttonStyleCustomer: {
        marginTop: 25,
        backgroundColor: '#a6a5a5',
        width: '47%',
        padding: 11,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '500'
    },
    mainHeading: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 50
    },
    rightArrow: {
        alignSelf: 'flex-end',
        fontSize: 25,
        marginTop: -30,
        marginRight: 20
    },
    imageStyling: {

    },
    InARow: {
        marginTop: 20,
        marginHorizontal: 20
    },
    iconStyle: {
        fontSize: 16,
        color: '#000000',
        marginRight: 3
    },
    InOneRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10
    },
    InRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    parastyle: {
        fontSize: 16,
        paddingTop: 10,
        color: 'grey',
        letterSpacing: 1,
        lineHeight: 22
    },
    profileImage: {
        width: 70,
        height: 70,
    }
});
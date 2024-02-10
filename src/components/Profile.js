import { Dimensions, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { scale } from 'react-native-size-matters'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


const Profile = () => {
    const [formData, setFormData] = useState([
        {
            categoryName: 'Profile',
            catogoryValue: 'Full Name',
        },
        {
            categoryName: 'Dare of Birth',
            catogoryValue: '12-10-1990',
        },
        {
            categoryName: 'Gmail',
            catogoryValue: 'example123@gmail.com',
        },
        {
            categoryName: 'Country',
            catogoryValue: 'Pakistan',
        },
        {
            categoryName: 'City',
            catogoryValue: 'Faislabad ',
        },
        {
            categoryName: 'Profession',
            catogoryValue: 'Kitchen Expert',
        },
        {
            categoryName: 'Food Preferences ',
            catogoryValue: 'Meal type',
        },
       
        
    ])

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle='dark-content'
            />

            <View style={styles.pageTitleContainer}>
                <Text style={styles.pageTitle}>Saved Receipe</Text>

            </View>

            <Image source={require('../assets/profile-pic.png')} style={styles.profilepic} />
            <Text style={styles.profilename}>Profile</Text>
            <View style={{marginBottom:scale(330)}}>

            <FlatList
            scrollEnabled
                data={formData}
                keyExtractor={(data, index) => index}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>

                        <Text style={styles.fullName}>{item?.categoryName}e</Text>
                        <TextInput value={item?.catogoryValue} style={styles.nameInput} />
                    </View>
                )}
            />
            </View>
            <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: 'center',
    },
    pageTitle: {
        fontSize: scale(15),
        fontWeight: '600',
        color: '#0B0B0B',

    },
    pageTitleContainer: {
        height: scale(60),
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#C9C9C9',
        borderBottomWidth: scale(1),
        width,
        marginBottom: scale(24),
    },
    profilepic: {
        height: scale(68.5),
        width: scale(68.5),
        marginTop: 0,
        marginBottom: scale(13.5),
    },
    profilename: {
        marginTop: 0,
        color: '#D84327',
        fontWeight: '500',
        fontSize: scale(12),
        marginBottom: scale(13.5),
        marginBottom: scale(13.5),
    },
    fullName: {
        color: '#919191',
        fontWeight: '300',
        fontSize: scale(10),
        // position: 'absolute',
        marginLeft: scale(5),
        marginBottom:0,
        width: scale(289),
        marginTop: scale(24),

    },
    nameInput: {
        color: '#0B0B0B',
        fontSize: scale(12),
        fontWeight: '500',
        width: scale(294),
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 0,
        height:scale(22),
        marginTop: scale(9),
    },
    saveBtn:{
        backgroundColor:'#D84327',
        position:'absolute',
        bottom:scale(89),
        height:scale(40),
        width:scale(265),
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:scale(18)
    },
    saveBtnText:{
        color:'#FFFFFF',
        fontSize:scale(12),
        fontWeight:'300',

    }
})
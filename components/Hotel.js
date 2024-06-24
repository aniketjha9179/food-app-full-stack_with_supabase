import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Foundation, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Hotel = ({ item }) => {
    const router = useRouter()
    return (
        <Pressable
            onPress={() => router.push({
                pathname: '/hotel',
                params: {
                    id: item.id,
                    name: item.name,
                    adress: item.adress,
                    smalladress: item.smalladress,
                    cuisines: item.cuisines,
                    aggregate_rating: item.aggregate_rating,
                }
            })}
            style={{
                marginHorizontal: 6,
                marginVertical: 12,
                borderRadius: 20,
                backgroundColor: 'white'
            }}>
            <Image source={{ uri: item?.featured_image }}
                style={{
                    width: '100%',
                    aspectRatio: 6 / 4,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6
                }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{}} >
                    <Text style={{
                        paddingHorizontal: 10,
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: '600'
                    }}
                    >{item?.name} </Text>
                    <Text style={{
                        paddingHorizontal: 10,
                        marginTop: 3,
                        fontSize: 15,
                        fontWeight: '500',
                        color: 'gray'
                    }}
                    >Thai, European, Mexican  </Text>
                    <Text
                        style={{
                            paddingHorizontal: 10,
                            marginTop: 3,
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#505050',

                        }}
                    >{item?.time} </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#006A4E',
                        borderRadius: 4,
                        paddingHorizontal: 4,
                        paddingVertical: 5,
                        marginRight: 10,
                        gap: 3

                    }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>{item?.aggregate_rating} </Text>
                    <Foundation name="star" size={15} color="white" />
                </View>
            </View>
            <View style={{
                borderWidth: 0.5,
                borderColor: '#c8c8c8',
                marginHorizontal: 10,
                marginVertical: 4,
            }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginHorizontal: 8, marginVertical: 5 }}>
                <MaterialCommunityIcons name="brightness-percent" size={24} color="#4895ef" />
                <Text style={{ backgroundColor: '#4895ef', color: 'white', borderRadius: 6, paddingHorizontal: 2, paddingVertical: 2 }}> <Text style={{ fontWeight: 'bold' }}>20% OFF</Text> Upto <Text style={{ fontWeight: 'bold' }}>Rs 100</Text> </Text>
            </View>


        </Pressable>
    )
}

export default Hotel

const styles = StyleSheet.create({})
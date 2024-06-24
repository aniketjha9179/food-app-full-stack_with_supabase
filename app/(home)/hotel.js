import { Pressable, ScrollView, StyleSheet, Text, View, Animated, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import FoodItem from '../../components/FoodItem'
import { useSelector } from 'react-redux'
import Modal from "react-native-modal";


const hotel = () => {
  const router = useRouter()
  const params = useLocalSearchParams()
  const cart = useSelector((state) => state.cart.cart);
  const [modalVisible, setModalVisible] = useState(false)
  console.log(cart);



  const menu = [
    {
      id: "20",
      name: "Recommended",
      items: [
        {
          id: "101",
          name: "Paneer 65",
          price: 275,
          description:
            "This is served with Raita and gravy and has loaded with chilli paste mixed chicken Kebabs",
          rating: 4.1,
          ratings: 43,
          image:
            "https://vaya.in/recipes/wp-content/uploads/2018/03/Paneer-65.jpg",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "102",
          name: "Chilly Chicken (Boneless)",
          price: 285,
          description:
            "E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)",
          rating: 4.3,
          ratings: 34,
          image:
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/boneless_chilli_chicken_zdish.png",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "103",
          name: "Spl Veg Biryani",
          price: 250,
          description:
            "E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)",
          rating: 4.5,
          ratings: 56,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6MQBR-F5sYTACC0OKlgxzaDhefm1NN6law&s",
          veg: true,
          bestSeller: false,
          quantity: 1,
        },
        {
          id: "104",
          name: "Chilly Paneer",
          price: 220,
          description:
            "E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams",
          rating: 3.8,
          ratings: 22,
          image:
            "https://spicecravings.com/wp-content/uploads/2022/01/Chilli-Paneer-Featured-2.jpg",
          veg: true,
          bestSeller: true,
          quantity: 1,
        },
        {
          id: "105",
          name: "Chicken 65",
          price: 300,
          description:
            "E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)",
          rating: 4.5,
          ratings: 45,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3eRLaCNAbPl2rvjolTh9JnAVhXi9qak_ew&s",
          veg: false,
          bestSeller: true,
          quantity: 1,
        },
      ],
    },
    {
      id: "11",
      name: "Rice",
      items: [
        {
          id: "201",
          name: "Chicken Fried Rice",
          price: 260,
          description:
            "E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)",
          rating: 4.3,
          ratings: 34,
          image:
            "https://www.allrecipes.com/thmb/P_PgxWliuXXRXVxLBq-5lKfFGdo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16954-chineese-chicken-fried-rice-ii-ddmfs-3X4-0240-3db2550810b1464a965a89a55cc95c7a.jpg",
          veg: false,
          bestSeller: true,
        },
        {
          id: "202",
          name: "Egg Fried Rice",
          price: 220,
          description:
            "E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)",
          rating: 4.3,
          ratings: 52,
          image:
            "https://www.seriouseats.com/thmb/BJjCEDw9OZe95hpZxmNcD3rJnHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg",
          veg: false,
          bestSeller: false,
        },
        {
          id: "203",
          name: "Veg Fried Rice",
          price: 190,
          description:
            "E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)",
          rating: 4.6,
          ratings: 56,
          image:
            "https://slurrp.club/wp-content/uploads/2022/04/DSC_0286-2-2-750x481.jpg",
          veg: true,
          bestSeller: true,
        },
        {
          id: "204",
          name: "Jeera Rice",
          price: 195,
          description:
            "E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)",
          rating: 4.5,
          ratings: 48,
          image:
            "https://www.whiskaffair.com/wp-content/uploads/2021/06/Jeera-Rice-2-3-1.jpg",
          veg: true,
          bestSeller: false,
        },
      ],
    },
  ];
  const scrollViewRef = useRef(null);
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const ITEM_HEIGHT = 650;
  const scrollToCategory = (index) => {
    const yOffset = index * ITEM_HEIGHT;
    Animated.timing(scrollAnim, {
      toValue: yOffset,
      duration: 500,
      useNativeDriver: true,
    }).start();
    scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
  };

  return (
    <>
      <ScrollView ref={scrollViewRef} style={{ backgroundColor: 'white' }}>
        <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Ionicons
            onPress={() => router.back()}
            style={{ padding: 5 }} name='arrow-back' size={24} color={'black'} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, gap: 10 }}>
            <Feather name="camera" size={24} color="black" />
            <Ionicons name="bookmark-outline" size={24} color="black" />
            <MaterialCommunityIcons name="share-outline" size={24} color="black" />
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 12, }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{params?.name} </Text>
          <Text style={{ marginTop: 5, color: 'gray', fontWeight: '500', fontSize: 15 }}>North Indian Fast Food 100 for one </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#006a4e', borderRadius: 4, paddingHorizontal: 4, paddingVertical: 5, gap: 4 }} >
              <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>{params?.aggregate_rating} </Text>
              <Ionicons name="star" size={15} color="white" />
            </View>
            <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 5 }}>
              3.2k Ratings
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0f0c0', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, marginTop: 12 }}>
            <Text>30-40 mins - 6Km | Bhopal </Text>
          </View>
        </View>
        {
          menu?.map((item, index) => (
            <FoodItem key={index} item={item} />
          ))
        }
      </ScrollView>
      <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
        {
          menu?.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => scrollToCategory(index)}
              style={{ paddingHorizontal: 7, paddingVertical: 5, marginVertical: 10, borderRadius: 7, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', borderColor: '#181818', borderWidth: 1 }}>
              <Text style={{ fontWeight: '500' }}>{item?.name} </Text>
            </Pressable>
          ))
        }

      </View>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{ backgroundColor: '#fd5c63', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 25, bottom: cart?.length > 0 ? 70 : 35 }} >
        <Ionicons style={{ textAlign: 'center', }} name="fast-food-outline" size={24} color="white" />
        <Text style={{ textAlign: 'center', color: "white", fontWeight: '500', fontSize: 11, marginTop: 3 }}>MENU</Text>
      </Pressable>
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(!modalVisible)}>
        <View style={{ backgroundColor: 'black', height: 190, width: 250, position: 'absolute', bottom: 35, borderRadius: 7, right: 10 }}>
          {menu?.map((item, index) => (
            <View
              key={index}
              style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: '#d0d0d0', fontWeight: '600', fontSize: 18 }}>{item?.name} </Text>
              <Text style={{ color: '#d0d0d0', fontWeight: '600', fontSize: 18 }}>{item?.items.length} </Text>
            </View>
          ))}
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Image style={{ width: 120, height: 70, resizeMode: 'stretch' }}
              source={{ uri: "https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/16165408/swiggy.jpeg" }}
            />


          </View>
        </View>
      </Modal>



      {cart?.length >= 1 && (
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/cart",
              params: {
                name: params.name,
              },
            })
          }
          style={{
            backgroundColor: "#fd5c63",
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {cart.length} items added
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              marginTop: 5,
              fontWeight: "600",
            }}
          >
            Add items(s) worth 240 to reduce Delivery charge by Rs 40.
          </Text>
        </Pressable>

      )}

    </>
  )
}

export default hotel

const styles = StyleSheet.create({})

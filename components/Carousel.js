import React, { useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const images = [
  { id: '1', uri: 'https://www.foodandwine.com/thmb/QqinPDSGc2krV8XDgZWwoxVgi5s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/palak-paneer-with-pressed-ricotta-FT-RECIPE0322-4c6f0e411c6444bd81152cb2d078f2bd.jpg' },
  { id: '2', uri: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg' },
  { id: '3', uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '4', uri: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: '5', uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const HorizontalFlatList = () => {
  const flatListRef = useRef(null);

  const onScrollEnd = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const contentWidth = e.nativeEvent.layoutMeasurement.width;
    const totalWidth = e.nativeEvent.contentSize.width;
    const threshold = totalWidth - contentWidth;

    if (contentOffsetX >= threshold) {
      flatListRef.current.scrollToIndex({ animated: true, index: 0 });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  imageContainer: {
    width: width - 40,
    height: 200,
    marginHorizontal: 20,
    justifyContent:'center',
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default HorizontalFlatList;

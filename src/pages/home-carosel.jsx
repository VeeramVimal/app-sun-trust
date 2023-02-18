import React, {useEffect, useState, useRef, useCallback} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Text} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import images from '../utils/imageUtils';

const HomeCarousel = () => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef();
  let intervalId = null;

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      // Dimensions.removeEventListener('change', onChange);
    };
  });

  const onSlideChange = useCallback(() => {
    // Calculate newIndex here and use it to update your state and to scroll to the new slide
    const newIndex =
      selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: dimension.width * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 3000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      // Clear the interval when component unmounts, otherwise you could have memory leaks
      clearInterval(intervalId);
    };
  }, [onSlideChange]);

  const onTouchStart = () => {
    // As soon as the user touches the slide, stop the automatic sliding
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    // As soon as the user stops touching the slide, releases it, start the automatic sliding again
    startInterval();
  };

  const carouselImages = [
    {
      url: 'https://t4.ftcdn.net/jpg/03/94/54/51/240_F_394545104_Kcqxdw2i6gUyK3xfN4OtHxI804sXDSNO.jpg',
      // url: 'https://t4.ftcdn.net/jpg/05/28/19/37/240_F_528193785_KUtAVzX2ml5sH0PNLhNkLPzjWgGz9uNa.jpg',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/05/33/89/23/240_F_533892320_8towvNmPCwWyunfCMpok9e9rKmm96oEA.jpg',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/00/86/46/93/240_F_86469387_wVMCF3G9y7tu8CPCjHfL1QKR9i6xDKU0.jpg',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/05/18/50/62/240_F_518506284_rkyWcqDIj2susJ1L6kagRu0g9oW3ipWq.jpg',
      // url: 'https://t3.ftcdn.net/jpg/05/62/45/50/240_F_562455094_OO7t0RdW6ns3j3U8dRkBHELsZrOnZnTb.jpg',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/04/69/27/22/240_F_469272218_Sq71lRqjMiyyVDwS38otH5hhAZiWAzyp.jpg',
    },
  ];
  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };
  return (
    <View style={{width: dimension.width}}>
      <ScrollView
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={setIndex}
        showsHorizontalScrollIndicator={false}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        pagingEnabled>
        {/* <Image source={images.view_1} style={styles.cardImage} alt="banner-1" /> */}
        {carouselImages.map((value, key) => (
          <Image
            source={{uri: `${value.url}`}}
            style={{width: dimension?.width, height: 250, resizeMode: 'cover'}}
            PlaceholderContent={<ActivityIndicator />}
            alt="banner-images"
          />
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {carouselImages.map((val, key) => (
          <Text
            key={key}
            style={key === selectedIndex ? {color: 'white'} : {color: '#888'}}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    borderRadius: 10,
  },
});
export default HomeCarousel;

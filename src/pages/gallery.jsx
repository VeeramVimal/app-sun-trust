import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppBarHeader from '../components/appBarHeader';
import imageUtils from '../utils/imageUtils';
// type SessionProps = PropsWithChildren<{
//   props: any;
// }>;
const GalleryPage = props => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      // Dimensions.removeEventListener('change', onChange);
    };
  });
  const imagesData = [
    {url: imageUtils.Gallery_img_1},
    {url: imageUtils.Gallery_img_2},
    {url: imageUtils.Gallery_img_3},
    {url: imageUtils.Gallery_img_4},
  ];
  return (
    <View>
      <AppBarHeader menu={true} title="Gallery" url={'Home'} />
      <ScrollView>
        <View style={styles.Gallery_container}>
          {imagesData.map((image, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() =>
                  props.navigation.navigate('ShowImage', {url: image.url})
                }>
                <Image
                  source={image.url}
                  style={{
                    height: dimension.height / 3,
                    width: dimension.width / 3 - 6,
                    borderRadius: 10,
                    margin: 2,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Gallery_container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default GalleryPage;

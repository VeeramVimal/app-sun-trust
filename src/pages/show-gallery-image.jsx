import React, {PropsWithChildren} from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
// type SessionProps = PropsWithChildren<{
//   props: any;
// }>;
const showImages = props => {
  var dimensions = Dimensions.get('window');
  // var dimentionHeight = Math.round((dimensions.width * 9) / 16);
  var dimentionHeight = dimensions.height;
  var dimentionWidth = dimensions.width;
  return (
    <View>
      <ImageBackground
        source={props.route.params.url}
        style={{height: dimentionHeight, width: dimentionWidth}}
      />
    </View>
  );
};

export default showImages;
// * 0.8

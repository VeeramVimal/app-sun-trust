import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {AppColors, AppFonts} from '../themes';
import Images from '../utils/imageUtils';

const CustomButton = ({
  buttonTitle,
  onPress,
  isArrowShow = true,
  isSubmit,
  color = AppColors.background.primary,
}) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle(color, isArrowShow)}
      onPress={onPress}
      disabled={isSubmit === true}>
      <Text style={[styles.textStyle, AppFonts.big14SemiBold]}>
        {buttonTitle}
      </Text>
      {isArrowShow && (
        <Image source={Images.leftArrow} style={styles.arrowMark} />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: (color, isArrowShow) => ({
    bottom: Platform.OS === 'ios' ? 30 : 15,
    width: '100%',
    backgroundColor: color,
    height: 50,
    borderRadius: 8,
    justifyContent: isArrowShow ? 'space-between' : 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  }),
  textStyle: {
    color: AppColors.textSecondary,
    letterSpacing: 0.3,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  arrowMark: {
    width: 20,
    height: 20,
    tintColor: AppColors.textSecondary,
  },
});

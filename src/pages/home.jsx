import React from 'react';
import {ScrollView, StyleSheet, View, Text, Image, Button} from 'react-native';
import AppBarHeader from '../components/appBarHeader';
import {AppColors, AppFonts} from '../themes';
import HomeCarousel from './home-carosel';
// import images from '../utils/imageUtils';
// import {Appbar, Card} from 'react-native-paper';
const Home = () => {
  return (
    <>
      <AppBarHeader menu={true} title="SunTrust" />
      <HomeCarousel />

      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text>
            At Mudichur and Pallikaranai Akshaya Trust runs two old age homes
            simultaneously. At Mudichur, Pallikaranai and Valasaravakkam,
            Akshaya Trust runs three old age homes, all together serving 120
            senior citizens under the banner of Akshaya Homes. Trust care for
            these old aged people as their own parents. We have limited power
            but with this we want to stretch our wing to the fullest and bring
            the happiness back in the life our inmates. Inmates are also feel
            safe and protected here with us and we take it as our achievement
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background.white,
  },
  bannerImage: {},
  contentHeader: {
    flexDirection: 'column',
    // marginTop: '2%',
  },
  nameStyle: {
    fontFamily: AppFonts.family.semibold,
    fontSize: AppFonts.sizes.small,
    lineHeight: 16,
    fontWeight: AppFonts.weight.semiBold,
    color: AppColors.black,
    marginLeft: '10%',
    // textAlign: 'left'
  },
  cardContainer: {
    flexDirection: 'row',
    width: '100%',
    height: null,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  cardStyle: {
    width: '85%',
    height: null,
    marginTop: '8%',
    marginHorizontal: '2%',
  },
  cardImage: {
    width: '100%',
    borderRadius: 10,
  },
  // appbarHeader: {
  //   backgroundColor: AppColors.background.white,
  //   elevation: 0,
  // },
  // headerViewStyle2: {
  //   flexDirection: 'row',
  // },
  content: {
    fontFamily: AppFonts.family.semibold,
    fontWeight: AppFonts.weight.semiBold,
    fontSize: AppFonts.sizes.bigger,
    lineHeight: 32,
    color: AppColors.black,
    marginTop: '5%',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '5%',
  },
  // headerViewStyle: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginHorizontal: '3%',
  //   width: '55%',
  //   marginTop: '5%',
  // },
});
export default Home;

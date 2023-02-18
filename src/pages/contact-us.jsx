import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Icon} from 'react-native-elements';
import AppBarHeader from '../components/appBarHeader';
import {AppColors, AppFonts} from '../themes';
// import CustomInput from '../components/CustomInput';
// import CustomButton from '../components/CustomButton';

const addressDetails = [
  {
    iconName: 'home-outline',
    headlineName: 'India, Tamilnadu.',
    underName: 'Aruppukottai, TN 626101',
  },
  {
    iconName: 'call-outline',
    headlineName: '+91 9524970441',
    underName: 'Mon to Fri 9am to 6pm',
  },
  {
    iconName: 'mail-outline',
    headlineName: 'info@vkdigitalmarketing.in',
    underName: 'Send us your query anytime!',
  },
];
const ContactUs = () => {
  const [data, setData] = useState({
    name: '',
  });
  const handleChange = event => {
    setData({...preProps, [event.target.name]: event.target.value});
  };
  return (
    <View>
      <AppBarHeader menu={true} title="Contact" url="Home" />
      <ScrollView style={styles.contact_style}>
        <View
          style={{
            flex: 8,
            justifyContent: 'flex-start',
          }}>
          <Text style={styles.heading}> Get in Touch</Text>

          <TextInput
            style={styles.inputStyles}
            name="name"
            value={data.name}
            placeholder="Enter your name"
            onChangeText={handleChange}
          />
        </View>
        <View style={{marginTop: '15%'}}>
          {addressDetails.map((item, key) => {
            return (
              <View style={styles.contact_container}>
                <Icon
                  name={item.iconName}
                  size={30}
                  color={AppColors.background.tertiary}
                  type="ionicon"
                />
                <View style={styles.nameContainer}>
                  <View style={styles.nameView}>
                    <Text style={styles.headName}>{item.headlineName}</Text>
                    <Text style={styles.addressStyle}>{item.underName}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contact_style: {
    width: '85%',
    height: null,
    marginTop: '8%',
    marginHorizontal: '2%',
  },
  contact_container: {
    flexDirection: 'row',
    marginVertical: '4%',
    marginHorizontal: '2%',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  nameView: {
    marginLeft: '4%',
    marginTop: '3%',
  },
  heading: {
    fontWeight: AppFonts.weight.extraLight,
    fontSize: AppFonts.sizes.big25Size,
    lineHeight: 32,
    color: AppColors.black,
    fontFamily: AppFonts.family.extraLight,
  },

  headName: {
    fontWeight: AppFonts.weight.medium,
    fontSize: AppFonts.sizes.medium,
    lineHeight: 16,
    color: AppColors.black,
    fontFamily: AppFonts.family.medium,
  },
  addressStyle: {
    fontWeight: AppFonts.weight.regular,
    fontSize: AppFonts.sizes.medium,
    lineHeight: 21,
    color: AppColors.silver,
    fontFamily: AppFonts.family.regular,
  },
  inputStyles: {
    justifyContent: 'center',
    includeFontPadding: false,
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: AppColors.background.white,
    marginTop: 10,
    marginStart: 10,
    padding: 0,
    borderRadius: 4,
    width: '85%',
  },
});
export default ContactUs;

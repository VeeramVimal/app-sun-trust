import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import AppBarHeader from '../components/appBarHeader';
import {AppColors, AppFonts} from '../themes';
import {Card, TextInput} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

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
  const [isSubmited, setIsSubmited] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      message: '',
    },
  });
  const commonProps = {
    errors,
    control,
  };
  // const handleChange = event => {
  //   setData({...preProps, [event.target.name]: event.target.value});
  // };
  const togglePostCard = () => {
    setIsSubmited(false);
  };
  const onSubmit = data => {
    console.log('data============', data);
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
          <Card style={styles.postCard}>
            {isSubmited ? (
              <View>
                <Icon
                  active
                  name="ios-checkmark-circle"
                  style={{
                    fontSize: 30,
                    marginLeft: 5,
                    marginRight: 10,
                  }}
                  color={AppColors.background.tertiary}
                  type="ionicon"
                />
                <View style={styles.contentHeader}>
                  <Text style={styles.heading}>
                    {' '}
                    Thanks. We will get in touch with you as soon as possible
                  </Text>
                </View>
                <View>
                  <TouchableOpacity success onPress={() => togglePostCard()}>
                    <Icon
                      active
                      name="refresh"
                      style={{fontSize: 40, color: '#64DD17', marginLeft: 10}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}>
                  <CustomInput
                    Name={'Name'}
                    keyName={'name'}
                    {...commonProps}
                    placeholder="Enter your name"
                    mode="outlined"
                    required={false}
                  />
                  <CustomInput
                    Name={'Email'}
                    keyName={'email'}
                    {...commonProps}
                    placeholder="Enter your Email"
                    mode="outlined"
                    required={false}
                  />
                  <CustomInput
                    Name={'Mobile'}
                    keyName={'mobile'}
                    {...commonProps}
                    placeholder="Enter your mobile number"
                    mode="outlined"
                    required={false}
                  />
                  <CustomInput
                    Name={'Message'}
                    keyName={'message'}
                    {...commonProps}
                    placeholder="Type your message"
                    mode="outlined"
                    required={false}
                  />
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <View style={styles.buttonStyle}>
                    <CustomButton
                      buttonTitle={'Submit'}
                      isSubmit={isSubmited}
                      onPress={handleSubmit(onSubmit)}
                      color={AppColors.background.tertiary}
                      isArrowShow={true}
                    />
                  </View>
                </View>
              </View>
            )}
          </Card>
          {/* <TextInput
            style={styles.inputStyles}
            name="name"
            value={data.name}
            placeholder="Enter your name"
            onChangeText={handleChange}
          /> */}
        </View>
        <View style={{marginTop: 10, marginLeft: 25}}>
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
    alignContent: 'center',
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
  postCard: {
    marginLeft: 25,
    // marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  contentHeader: {
    flexDirection: 'row',
    marginTop: '4%',
  },
  buttonStyle: {
    width: '90%',
    marginTop: '10%',
    marginHorizontal: '5%',
  },
});
export default ContactUs;

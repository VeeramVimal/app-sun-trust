import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import AppBarHeader from '../components/appBarHeader';
import {AppColors} from '../themes';
import images from '../utils/imageUtils';
const Payment = () => {
  var dimensions = Dimensions.get('window');
  // var dimentionHeight = Math.round((dimensions.width * 9) / 16);
  var dimentionHeight = dimensions.height;
  var dimentionWidth = dimensions.width;
  const paymentHandler = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png', // logo in your app
      currency: 'INR',
      key: 'rzp_test_1DP5mmOlF5G5ag', // Your api key
      amount: '5000', // these are in paise wo have to convert it in rupees
      name: 'Sample',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <ScrollView>
      <AppBarHeader menu={true} title="Payment" url={'Home'} />
      <View style={{marginTop: '50%'}}>
        <Image
          source={images.upi}
          style={{
            height: dimentionHeight / 3,
            width: dimentionWidth,
            borderRadius: 10,
            marginTop: 2,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: AppColors.white,
        }}>
        <Button
          style={styles.buttonStyle}
          title={'Pay with Razorpay'}
          onPress={() => {
            paymentHandler();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    bottom: Platform.OS === 'ios' ? 30 : 15,
    width: '100%',
    backgroundColor: AppColors.background.primary,
    height: 50,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
export default Payment;

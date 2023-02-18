import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import DrawerNavigation from './DrawerNavigation';
import AboutUs from '../pages/about-us';
import Payment from '../pages/payment';
import GalleryPage from '../pages/gallery';
import showImages from '../pages/show-gallery-image';
import ContactUs from '../pages/contact-us';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About-us" component={AboutUs} />
      <Stack.Screen name="Contact" component={ContactUs} />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{title: 'Payments'}}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryPage}
        options={{title: 'Gallery'}}
      />
      <Stack.Screen
        name="ShowImage"
        component={showImages}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

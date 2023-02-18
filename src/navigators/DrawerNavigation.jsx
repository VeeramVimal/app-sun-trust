import React, {PropsWithChildren} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
// import Home from '../pages/home';
import TopNavigator from './TabNavigatore';
import AboutUs from '../pages/about-us';
import Payment from '../pages/payment';
import GalleryPage from '../pages/gallery';
import ContactUs from '../pages/contact-us';

const Drawer = createDrawerNavigator(); // create the drawer constantly

export const CustomDrawerContent = props => {
  const getActiveRouteState = (routes, index, pageName) => {
    const text = routes[index].name.toLowerCase();
    if (text === pageName.toLowerCase()) {
      return true;
    }
  };
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Home"
        focused={getActiveRouteState(
          props.state.routes,
          props.state.index,
          'Home',
        )}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <DrawerItem
        label="About-us"
        focused={getActiveRouteState(
          props.state.routes,
          props.state.index,
          'About-us',
        )}
        onPress={() => {
          props.navigation.navigate('About-us');
        }}
      />
      <DrawerItem
        label="Payment"
        focused={getActiveRouteState(
          props.state.routes,
          props.state.index,
          'Payment',
        )}
        onPress={() => {
          props.navigation.navigate('Payment');
        }}
      />
      <DrawerItem
        label="Gallery"
        focused={getActiveRouteState(
          props.state.routes,
          props.state.index,
          'Gallery',
        )}
        onPress={() => {
          props.navigation.navigate('Gallery');
        }}
      />
      <DrawerItem
        label="Contact"
        focused={getActiveRouteState(
          props.state.routes,
          props.state.index,
          'Contact',
        )}
        onPress={() => {
          props.navigation.navigate('Contact');
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={TopNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="About-us"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Gallery"
        component={GalleryPage}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactUs}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;

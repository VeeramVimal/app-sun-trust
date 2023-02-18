import {DrawerActions, useNavigation} from '@react-navigation/core';
import React, {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {AppColors} from '../themes';
type SectionProps = PropsWithChildren<{
  menu: boolean;
  title: any;
  url: String;
}>;
const AppBarHeader = ({menu, title, url}: SectionProps): JSX.Element => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.appBarHeader}>
      {url !== undefined && (
        <Appbar.BackAction
          onPress={(): void => {
            navigation.navigate(url);
          }}
        />
      )}
      <Appbar.Content title={title} style={styles.AppbarContent} />

      {menu && (
        <Appbar.Action
          icon="menu"
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: AppColors.background.white,
    elevation: 0,
  },
  AppbarContent: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
export default AppBarHeader;

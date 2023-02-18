import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Image } from "react-native";
import { AppColors } from "../themes"; // styles for font and color
import imageUtils from "../utils/imageUtils"; // image consta

const SplashScreen = () : JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Image source={imageUtils.splash_logo} style={{ marginBottom: '4%'}}/>
            <Image source={imageUtils.sunTrust} style={{marginTop: '10%' }}/> */}
            <Image source={imageUtils.sunTrust} style={{ marginBottom: '4%'}}/>
            <View style={styles.viewStyle}>
                <Image source={imageUtils.secure}/>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.background.white,
        fontFamily: 'PlusJakartaSans-SemiBold'
    },
    viewStyle: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 25
    }
})
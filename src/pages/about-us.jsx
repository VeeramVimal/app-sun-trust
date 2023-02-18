import React from "react";
import { ScrollView, StyleSheet, View, Image ,Text} from "react-native";
import AppBarHeader from "../components/appBarHeader";
import { AppColors, AppFonts } from "../themes";

const AboutUs = () => {

    return (
        <View>
            <AppBarHeader menu={true} title="About Us"/>
            <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                <View style={styles.about_container}>
                    <Text style={styles.about_us_heading}>AboutUs</Text>
                    {/* <Image source={images.sun_logo} style={ styles.logo_image }/> */}
                    <View style={styles.contents}>
                    <View style={styles.content_1}>
                        <Text> Akshaya Trust, a trustworthy old-age home in Chennai spreading its wings for last 20 years. 
                        Many aged men and women found their home here. 
                        In Mudichur and Pallikaranai we have our homes where almost 75 destitute senior citizens get their shelter, food and medical care at free of cost.</Text>
                    </View>
                    <View style={styles.content_2}>
                            <Text>
                            Akshaya Trust works as a trust (non-government organization) and has its own board members. 
                            We are registered with unique ID TN/2017/0181614 and have registration number 619/2001. 
                            We also have 80G available.
                            </Text>
                    </View>
                    <View style={styles.content_3}>
                        <Text>
                        Here we try to provide a quality life with all comfortability, healthy and nutritious food. 
                            To engage them we provide all facilities like TV, audio system, newspaper, 
                            magazines to enjoy tv-shows, music etc.
                        </Text>
                    </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default AboutUs;

const styles = StyleSheet.create({
    about_container: {
        flex: 8,
        justifyContent: "flex-start"
    },
    about_us_heading: {
        fontFamily: AppFonts.family.semibold,
        fontWeight: AppFonts.weight.semiBold,
        fontSize: AppFonts.sizes.big,
        lineHeight: 32,
        color: AppColors.black,
        marginTop: '5%',
        marginLeft: '5%',
    },
    contents: {
        fontWeight: AppFonts.weight.regular,
        fontSize: AppFonts.sizes.small,
        color: AppColors.black,
        lineHeight: 16,
    },
    content_1: {

        marginLeft: '5%',
        marginTop: '5%',
    },
    content_2: {
        marginLeft: '5%',
        marginTop: '2%',
    },
    content_3:{
        marginLeft: '5%',
        marginTop: '2%',  
    }
    // logo_image: {
    //     width: "80%",
    //     borderRadius: 2
    // }
})
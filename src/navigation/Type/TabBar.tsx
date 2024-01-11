// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import { TabNav } from '../NavigationKeys';
import { TabRoute } from '../NavigationRoutes';
import { TouchableOpacity, View ,StyleSheet,Image} from 'react-native';
import {isAndroid, moderateScale} from '../../common/constants';
import {
  ContactUs,
  ContactUsSelected,
  FindADoctor,
  FindADoctorSelected,
  Home,
  HomeSelected,
  Medicines,
  MedicineSelected,
} from '../../assets/svgs';
import CText from '../../components/common/CText';
import { colors, styles } from '../../themes';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import images from '../../assets/images';

const selectedSvgWH = moderateScale(30);
const svgHW = moderateScale(23);

const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();


interface TabTextProps {
    text: boolean;
    routeName: string;
    selectedTab: string;
    style: any | undefined;
  }

  interface TabBarProps {
    routeName: string;
    selectedTab: string;
    navigate: any;
  }

export default function TabBarNew() {

    // const TabText = ({
    //     text,
    //     routeName,
    //     selectedTab,
    //     style,
    //   }: TabTextProps): JSX.Element => {
    //     let icon;
    //     switch (routeName) {
    //       case TabNav.Home:
    //         icon =
    //           routeName == selectedTab ? (
    //             <HomeSelected width={selectedSvgWH} height={selectedSvgWH} />
    //           ) : (
    //             <Home width={svgHW} height={svgHW} />
    //           );
    //         break;
    //       case TabNav.FindADoctor:
    //         icon =
    //           routeName == selectedTab ? (
    //             <FindADoctorSelected width={selectedSvgWH} height={selectedSvgWH} />
    //           ) : (
    //             <FindADoctor width={svgHW} height={svgHW} />
    //           );
    //         break;
    //       case TabNav.Medicines:
    //         icon =
    //           routeName == selectedTab ? (
    //             <MedicineSelected width={selectedSvgWH} height={selectedSvgWH} />
    //           ) : (
    //             <Medicines width={svgHW} height={svgHW} />
    //           );
    //         break;
    //       case TabNav.ContactUs:
    //         icon =
    //           routeName == selectedTab ? (
    //             <ContactUsSelected width={selectedSvgWH} height={selectedSvgWH} />
    //           ) : (
    //             <ContactUs width={svgHW} height={svgHW} />
    //           );
    //         break;
    //     }
    //     return (
    //       <View style={[localStyles.tabViewContainer, style]}>
    //         {icon}
    //         {!!text && (
    //           <CText
    //             type={'m14'}
    //             numberOfLines={1}
    //             style={styles.mt5}
    //             color={routeName == selectedTab ? colors.primary : colors.gray4}>
    //             {routeName}
    //           </CText>
    //         )}
    //       </View>
    //     );
    //   };
    // const renderTabBar = ({routeName, selectedTab, navigate}: TabBarProps) => {
    //     return (
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigate('routeName', routeName);
    //         }}>
    //         <TabText
    //           text={true}
    //           routeName={routeName}
    //           selectedTab={selectedTab}
    //           style={undefined}
    //         />
    //       </TouchableOpacity>
    //     );
    //   };
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({focused,color,size}) => {
            let iconName;

            if(route.name === TabNav.Home){
         
                iconName = focused ?<HomeSelected width={selectedSvgWH} height={selectedSvgWH} /> : <Home width={svgHW} height={svgHW} />
                return (
                    <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:responsiveHeight(2.5)}}>
                      {iconName}
                
                        <CText
                          type={'m14'}
                          numberOfLines={1}
                          style={{...styles.mt5,}}
                          color={focused  ? colors.primary : colors.gray4}>
                          {route.name}
                        </CText>
                       
                    </View>
                  );
            }else if (route.name === TabNav.FindADoctor){
              
                iconName = focused ?<FindADoctorSelected width={selectedSvgWH} height={selectedSvgWH} /> : <FindADoctor width={svgHW} height={svgHW} />
                return (
                    <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:responsiveHeight(2.5)}}>
                      {iconName}
                
                        <CText
                          type={'m14'}
                          numberOfLines={1}
                          style={{...styles.mt5,}}
                          color={focused  ? colors.primary : colors.gray4}>
                          {route.name}
                        </CText>
                       
                    </View>
                  );
            }else if (route.name === TabNav.Medicines){
                
         
                iconName = focused ?<MedicineSelected width={selectedSvgWH} height={selectedSvgWH} /> : <Medicines width={svgHW} height={svgHW} />
                return (
                    <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:responsiveHeight(2.5)}}>
                      {iconName}
                
                        <CText
                          type={'m14'}
                          numberOfLines={1}
                          style={{...styles.mt5,}}
                          color={focused  ? colors.primary : colors.gray4}>
                          {route.name}
                        </CText>
                       
                    </View>
                  );
            }else if (route.name === TabNav.ContactUs){
         
                iconName = focused ?<ContactUsSelected width={selectedSvgWH} height={selectedSvgWH} /> : <ContactUs width={svgHW} height={svgHW} />
                return (
                    <View style={{alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:responsiveHeight(2.5)}}>
                      {iconName}
                
                        <CText
                          type={'m14'}
                          numberOfLines={1}
                          style={{...styles.mt5,}}
                          color={focused  ? colors.primary : colors.gray4}>
                          {route.name}
                        </CText>
                       
                    </View>
                  );
            }else if (route.name === TabNav.AskVirtualVaidya){
         
                // iconName = focused ?<ContactUsSelected width={selectedSvgWH} height={selectedSvgWH} /> : <ContactUs width={svgHW} height={svgHW} />
                return (
                    <TouchableOpacity onPress={() => {}}>
                    <View style={localStyles.btnCircleUp}>
                      <Image
                        source={images.askVirtualVaidya}
                        style={localStyles.askVirtualVaidyaImageStyle}
                      />
                    </View>
                  </TouchableOpacity>
                  );
            }

       
        },tabBarLabel:  ()=>{
        return<CText></CText>
            
        },
        tabBarStyle:{
            backgroundColor:'white',
            height:moderateScale(65),
            borderTopRightRadius:responsiveWidth(5),
            borderTopLeftRadius:responsiveWidth(5),
            position:'absolute',
            bottom:0,
            right:0,
            left:0,

        }
       
        
       

    })

        
    } 
    // activeIndicatorStyle={{backgroundColor:'white'}}
    // barStyle={{backgroundColor:'white',position:'absolute',borderRadius:40,bottom:0,borderTopRightRadius:50,right:0,left:0,height:moderateScale(70),}}

>
      <Tab.Screen name={TabNav.Home} component={TabRoute.Home} />
      <Tab.Screen name={TabNav.FindADoctor} component={TabRoute.FindADoctor} />
      <Tab.Screen name={TabNav.AskVirtualVaidya} component={TabRoute.AskVirtualVaidya} />
      <Tab.Screen name={TabNav.Medicines} component={TabRoute.Medicines} />

      <Tab.Screen name={TabNav.ContactUs} component={TabRoute.ContactUs} />
    </Tab.Navigator>
  );
}

const localStyles = StyleSheet.create({
    root: {
      ...styles.flex,
      backgroundColor: colors.white,
    },
    tabViewContainer: {
      ...styles.center,
    },
    shadow: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    btnCircleUp: {
      bottom: moderateScale(25),
      backgroundColor: colors.primary,
      borderRadius: moderateScale(30),
      width: moderateScale(60),
      height: moderateScale(60),
      ...styles.center,
      
    },
    askVirtualVaidyaImageStyle: {
      width: moderateScale(50),
      height: moderateScale(50),
      resizeMode: 'contain',
    },
  });
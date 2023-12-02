// Library import
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

// Local import
import {StackRoute, TabRoute} from '../NavigationRoutes';
import {StackNav, TabNav} from '../NavigationKeys';
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
import {colors, styles} from '../../themes';
import CText from '../../components/common/CText';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import images from '../../assets/images';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const selectedSvgWH = moderateScale(30);
const svgHW = moderateScale(23);

const tabRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={TabNav.FindADoctor}>
      <Stack.Screen
        name={TabNav.FindADoctor}
        component={TabRoute.FindADoctor}
      />
      <Stack.Screen
        name={StackNav.CategoryDoctorList}
        component={StackRoute.CategoryDoctorList}
      />
    </Stack.Navigator>
  );
};

export default function TabBarNavigation({}) {
  const Tab = createBottomTabNavigator();
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

  const TabText = ({
    text,
    routeName,
    selectedTab,
    style,
  }: TabTextProps): JSX.Element => {
    let icon;
    switch (routeName) {
      case TabNav.Home:
        icon =
          routeName == selectedTab ? (
            <HomeSelected width={selectedSvgWH} height={selectedSvgWH} />
          ) : (
            <Home width={svgHW} height={svgHW} />
          );
        break;
      case TabNav.FindADoctor:
        icon =
          routeName == selectedTab ? (
            <FindADoctorSelected width={selectedSvgWH} height={selectedSvgWH} />
          ) : (
            <FindADoctor width={svgHW} height={svgHW} />
          );
        break;
      case TabNav.Medicines:
        icon =
          routeName == selectedTab ? (
            <MedicineSelected width={selectedSvgWH} height={selectedSvgWH} />
          ) : (
            <Medicines width={svgHW} height={svgHW} />
          );
        break;
      case TabNav.ContactUs:
        icon =
          routeName == selectedTab ? (
            <ContactUsSelected width={selectedSvgWH} height={selectedSvgWH} />
          ) : (
            <ContactUs width={svgHW} height={svgHW} />
          );
        break;
    }
    return (
      <View style={[localStyles.tabViewContainer, style]}>
        {icon}
        {!!text && (
          <CText
            type={'m14'}
            numberOfLines={1}
            style={styles.mt5}
            color={routeName == selectedTab ? colors.primary : colors.gray4}>
            {routeName}
          </CText>
        )}
      </View>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}: TabBarProps) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('routeName', routeName);
        }}>
        <TabText
          text={true}
          routeName={routeName}
          selectedTab={selectedTab}
          style={undefined}
        />
      </TouchableOpacity>
    );
  };
  return (
    <CSafeAreaView style={localStyles.root}>
      <CurvedBottomBar.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: isAndroid ? true : false,
        }}
        height={moderateScale(75)}
        borderTopLeftRight
        circleWidth={moderateScale(60)}
        circlePosition="CENTER"
        type="DOWN"
        shadowStyle={localStyles.shadow}
        renderCircle={({selectedTab, navigate}) => (
          <TouchableOpacity onPress={() => navigate(TabNav.AskVirtualVaidya)}>
            <View style={localStyles.btnCircleUp}>
              <Image
                source={images.askVirtualVaidya}
                style={localStyles.askVirtualVaidyaImageStyle}
              />
            </View>
          </TouchableOpacity>
        )}
        bgColor="white"
        tabBar={renderTabBar}
        initialRouteName={TabNav.Home}>
        <Tab.Screen
          position="LEFT"
          name={TabNav.Home}
          component={TabRoute.Home}
        />
        <Tab.Screen
          position="LEFT"
          name={TabNav.FindADoctor}
          component={tabRoute}
        />
        <Tab.Screen
          position="CIRCLE"
          name={TabNav.AskVirtualVaidya}
          component={TabRoute.AskVirtualVaidya}
        />
        <Tab.Screen
          position="RIGHT"
          name={TabNav.Medicines}
          component={TabRoute.Medicines}
        />
        <Tab.Screen
          position="RIGHT"
          name={TabNav.ContactUs}
          component={TabRoute.ContactUs}
        />
      </CurvedBottomBar.Navigator>
    </CSafeAreaView>
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

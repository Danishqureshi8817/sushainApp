import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

// local imports
import SubHeader from '../common/CommonComponent/SubHeader';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import {getHeight, moderateScale} from '../../common/constants';
import CText from '../common/CText';
import {RightArrow} from '../../assets/svgs';
import BannerList from './BannerList';
import {BASE_IMG_NEW_PATH} from '../../api/constant';
import { useNavigation } from '@react-navigation/native';
import { StackNav } from '../../navigation/NavigationKeys';



export default function ExclusiveTherapy({bannerData}: any) {

const navigation = useNavigation()

  console.log('bannerData', bannerData, BASE_IMG_NEW_PATH + bannerData);
  const RenderCardComponent = ({style, title, image}: any) => {
    return (
      <TouchableOpacity onPress={()=>{navigation.navigate(StackNav.ClinicDoctorDetailCard)}} style={[localStyles.subContainerStyle, style]}>
        <View style={localStyles.titleTextStyle}>
          <Image source={image} style={localStyles.iconImageStyle} />
          <CText
            type="s12"
            style={[styles.mh10, styles.flex]}
            numberOfLines={2}
            color={colors.primary2}>
            {title}
          </CText>
        </View>
        <TouchableOpacity>
          <RightArrow />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <SubHeader
        title={strings.ourExclusiveTherapyServices}
        isViewHide={false}
      />
      <View style={styles.mh20}>
        <Image
          source={images.exclusiveTherapyImage}
          style={localStyles.exclusiveTherapyImageStyle}
        />
      </View>
      <View style={localStyles.midelContainer}>
        <RenderCardComponent
          title="PanchKarma"
          image={images.panchKarma}
          style={localStyles.width50}
        />
        <RenderCardComponent
          title="Disease Specific Yoga "
          image={images.yogaImage}
          style={localStyles.width50}
        />
      </View>
      <RenderCardComponent
        title="Want to Visit Clinic ?"
        image={images.hospitalImage}
        style={[styles.mh20, styles.mb10]}
      />
      <BannerList bannerData={bannerData} />
    </View>
  );
}

const localStyles = StyleSheet.create({
  exclusiveTherapyImageStyle: {
    width: '100%',
    height: getHeight(150),
    resizeMode: 'contain',
    ...styles.mv5,
  },
  subContainerStyle: {
    ...styles.p10,
    ...styles.rowSpaceBetween,
    backgroundColor: colors.white,
    borderColor: colors.bColor2,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  iconImageStyle: {
    width: moderateScale(50),
    height: getHeight(50),
    resizeMode: 'contain',
  },
  titleTextStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.flex,
  },
  midelContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.mv15,
  },
  width50: {
    width: '48%',
  },
});

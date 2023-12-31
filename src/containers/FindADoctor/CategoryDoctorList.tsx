import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// local imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import images from '../../assets/images';
import {getHeight, moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import {
  DigitalPrecereption,
  FilterIcon,
  FreeFollowUp,
  SortIcon,
} from '../../assets/svgs';
import CText from '../../components/common/CText';
import CButton from '../../components/common/CButton';
import strings from '../../i18n/strings';
import DoctorDetailCard from './DoctorDetailCard';

interface Props {
  route: any;
  navigation: any;
}

export default function CategoryDoctorList(props: Props) {
  const {route} = props;
  const {itm} = route.params;
  console.log('itm', itm);

  return (
    <CSafeAreaView>
      <CHeader title={itm + ' Doctors'} />
      <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={localStyles.bannerContaienr}>
          <Image
            source={images.exclusiveTherapyImage}
            style={localStyles.bannerImageStyle}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={localStyles.bottomBanerContainer}>
          <FreeFollowUp />
          <CText type="m8" style={styles.pl5}>
            Free follow up
          </CText>
          <CText type="s12" color={colors.dividerColor} style={styles.ph5}>
            {' | '}
          </CText>
          <DigitalPrecereption />
          <CText type="m8" style={styles.pl5}>
            {'Get Digital Prescription'}
          </CText>
          <CText type="s12" color={colors.dividerColor} style={styles.ph5}>
            {' | '}
          </CText>
          <DigitalPrecereption />
          <CText type="m8" numberOfLines={1} style={[styles.pl5, styles.flex]}>
            {'Toxin-Free Natural Medications '}
          </CText>
        </View>
        <View style={localStyles.buttonContinerStyle}>
          <CButton
            title={strings.sort}
            onPress={() => {}}
            containerStyle={localStyles.btnContainerStyle}
            bgColor={colors.white}
            color={colors.black}
            style={styles.ml5}
            type="r12"
            frontIcon={<SortIcon />}
          />
          <CButton
            title={strings.filter}
            onPress={() => {}}
            containerStyle={localStyles.btnContainerStyle}
            bgColor={colors.white}
            color={colors.black}
            style={styles.ml5}
            type="r12"
            frontIcon={<FilterIcon />}
          />
        </View>
        <DoctorDetailCard title={itm} />
        <View style={{height: 120}} />
      </ScrollView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  bannerImageStyle: {
    width: '100%',
    height: moderateScale(140),
    ...styles.mv10,
    borderRadius: moderateScale(10),
  },
  bannerContaienr: {
    ...styles.center,
    ...styles.mh20,
  },
  bottomBanerContainer: {
    ...styles.ph10,
    ...styles.pv10,
    backgroundColor: colors.lightOrange,
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.flex,
  },
  buttonContinerStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.justifyEnd,
    ...styles.mh20,
    ...styles.mv10,
  },
  btnContainerStyle: {
    ...styles.ml10,
    ...styles.ph10,
    borderWidth: moderateScale(1),
    borderColor: colors.bColor2,
    height: getHeight(28),
    borderRadius: moderateScale(10),
  },
});

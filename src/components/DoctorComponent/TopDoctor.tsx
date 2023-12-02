import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

// local imports
import CText from '../common/CText';
import {colors} from '../../themes';
import {styles} from '../../themes';
import {getHeight, moderateScale} from '../../common/constants';
import images from '../../assets/images';
import RatingComponent from '../HomeComponent/RatingComponent';
import SubHeader from '../common/CommonComponent/SubHeader';
import strings from '../../i18n/strings';

const RenderItem = () => {
  return (
    <View style={localStyles.cardMainContainer}>
      <View style={styles.flexRow}>
        <Image
          source={images.ayurvedicImage}
          style={localStyles.doctorImgStyle}
        />
        <View style={localStyles.rightContainer}>
          <CText type="s12">{'Dr. Rajesh Singh'}</CText>
          <CText type="r10" numberOfLines={4} style={styles.mt5}>
            {'Gynae and Fertility, General Medicine'}
          </CText>
        </View>
      </View>
      <View style={styles.rowStart}>
        <View style={localStyles.starContainer}>
          <RatingComponent star={5} style={localStyles.straStyle} />
        </View>
        <CText type="r10" color={colors.textColor2}>
          {'201 reviews'}
        </CText>
      </View>
    </View>
  );
};

export default function TopDoctor(props:any) {
  const {subHeader} = props
  return (
    <View>
      { subHeader==='true' && <SubHeader title={strings.topRatedDoctors} />}
      <FlashList
        data={[1, 2, 3, 4, 5]}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.ph20}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  cardMainContainer: {
    ...styles.mr20,
    ...styles.mv10,
    ...styles.p10,
    backgroundColor: colors.white4,
    borderRadius: moderateScale(10),
    ...styles.shadowStyle,
  },
  doctorImgStyle: {
    height: getHeight(80),
    width: moderateScale(70),
    borderRadius: moderateScale(10),
    resizeMode: 'contain',
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
    ...styles.mb5,
  },
  straStyle: {
    height: moderateScale(10),
    width: moderateScale(10),
    marginHorizontal: moderateScale(1),
  },
  rightContainer: {
    ...styles.ml10,
    ...styles.itemsStart,
    width: moderateScale(110),
  },
  starContainer: {
    ...styles.center,
    ...styles.mr10,
    width: moderateScale(70),
  },
});

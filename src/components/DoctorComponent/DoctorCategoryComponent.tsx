import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

//  local imports
import SubHeader from '../common/CommonComponent/SubHeader';
import {shopByategoryData} from '../../api/constant';
import {colors, styles} from '../../themes';
import {DoctorSpecialityListData} from '../../types/Types';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';

const RenderDSpecialities = ({item}: {item: DoctorSpecialityListData}) => {
  return (
    <TouchableOpacity style={localStyles.rootContaienr}>
      <View style={localStyles.imgOuterContaiener}>
        <Image source={item?.image} style={localStyles.imgStyle} />
      </View>
      <View style={localStyles.titleContainer}>
        <CText type="m12" align="center" style={styles.ph5} numberOfLines={2}>
          {item?.title}
        </CText>
      </View>
    </TouchableOpacity>
  );
};

export default function DoctorCategoryComponent({title}: {title: string}) {
  const renderItem = ({item}: {item: DoctorSpecialityListData}) => {
    return <RenderDSpecialities item={item} />;
  };

  return (
    <View>
      <SubHeader title={title} isViewHide={false} />
      <FlashList
        data={shopByategoryData}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.ph20}
        showsHorizontalScrollIndicator={false}
        justifyContent="space-between"
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  imgStyle: {
    width: moderateScale(50),
    height: moderateScale(50),
    resizeMode: 'contain',
  },
  rootContaienr: {
    width: moderateScale(84),
    ...styles.center,
  },
  imgOuterContaiener: {
    width: moderateScale(62),
    height: moderateScale(62),
    borderRadius: moderateScale(31),
    ...styles.mv10,
    ...styles.center,
    backgroundColor: colors.lightBlue,
  },
  titleContainer: {
    height: moderateScale(34),
  },
});

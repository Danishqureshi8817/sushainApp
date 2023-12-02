import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {Dropdown} from 'react-native-element-dropdown';

// local imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {BottomIcon, MorningSlotIcon} from '../../assets/svgs';
import CText from '../../components/common/CText';
import {colors, styles} from '../../themes';
import typography from '../../themes/typography';
import {moderateScale} from '../../common/constants';
import CInput from '../../components/common/CInput';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {genderData, sampleData} from '../../api/constant';

export default function SelectTimeSlot() {
  const [bookingFor, setBookingFor] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientNumber, setPatientNumber] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientWeight, setPatientWeight] = useState('');
  const [patientGender, setPatientGender] = useState('');

  const onChangeBooking = (item: any) => setBookingFor(item.value);
  const onChangePatientName = (item: any) => setPatientName(item);
  const onChangePatientNumber = (item: any) => setPatientNumber(item);
  const onChangePatientAge = (item: any) => setPatientAge(item);
  const onChangePatientWeight = (item: any) => setPatientWeight(item);
  const onChangePatientGender = (item: any) => setPatientGender(item.value);

  const renderSlotItem = ({item, index}: any) => {
    return (
      <TouchableOpacity style={localStyles.slotContainer}>
        <CText type="m10">{'9:30AM'}</CText>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.selectTimeSlot} />
      <KeyBoardAvoidWrapper contentContainerStyle={localStyles.mainRoot}>
        <CText type="s12" style={localStyles.labelStyle}>
          {'Booking For'}
        </CText>
        <Dropdown
          style={localStyles.dropdown}
          placeholderStyle={localStyles.placeholderStyle}
          selectedTextStyle={localStyles.selectedTextStyle}
          data={sampleData}
          labelField="label"
          valueField="value"
          placeholder={'Select item'}
          value={bookingFor}
          onChange={onChangeBooking}
          renderRightIcon={() => <BottomIcon />}
          itemTextStyle={localStyles.selectedTextStyle}
          itemContainerStyle={localStyles.itemContainerStyle}
        />
        <CText type="s12" style={localStyles.labelStyle}>
          {strings.patientName}
        </CText>
        <CInput
          toGetTextFieldValue={onChangePatientName}
          _value={patientName}
          inputBoxStyle={localStyles.placeSty}
          inputContainerStyle={localStyles.patientNameTxt}
          placeholder={strings.enterPatientName}
          inputStyle={styles.mt5}
        />
        <CText type="s12" style={styles.mt5}>
          {strings.patientMobileNo}
        </CText>
        <CInput
          toGetTextFieldValue={onChangePatientNumber}
          _value={patientNumber}
          inputBoxStyle={localStyles.placeSty}
          inputContainerStyle={localStyles.patientNameTxt}
          placeholder={strings.enterPatientNumber}
          inputStyle={styles.mt5}
          keyBoardType={'number-pad'}
        />
        <View style={localStyles.ageGenderContainer}>
          <View style={localStyles.widthStyle}>
            <CText type="s12">{strings.patientAge}</CText>
            <CInput
              toGetTextFieldValue={onChangePatientAge}
              _value={patientAge}
              inputBoxStyle={localStyles.placeSty}
              inputContainerStyle={localStyles.patientNameTxt}
              placeholder={strings.age}
              inputStyle={styles.mt5}
              keyBoardType={'number-pad'}
            />
          </View>
          <View style={localStyles.widthStyle}>
            <CText type="s12">{strings.patientWeight}</CText>
            <CInput
              toGetTextFieldValue={onChangePatientWeight}
              _value={patientWeight}
              inputBoxStyle={localStyles.placeSty}
              inputContainerStyle={localStyles.patientNameTxt}
              placeholder={strings.weight}
              inputStyle={styles.mt5}
              keyBoardType={'number-pad'}
            />
          </View>
          <View style={localStyles.widthStyle}>
            <CText type="s12">{strings.PatientGender}</CText>
            <Dropdown
              style={localStyles.dropdown}
              placeholderStyle={localStyles.placeholderStyle}
              selectedTextStyle={localStyles.selectedTextStyle}
              data={genderData}
              labelField="label"
              valueField="value"
              placeholder={strings.gender}
              value={patientGender}
              onChange={onChangePatientGender}
              renderRightIcon={() => <BottomIcon />}
              itemTextStyle={localStyles.selectedTextStyle}
              itemContainerStyle={localStyles.itemContainerStyle}
            />
          </View>
        </View>
        <CText type="m14" style={styles.mt10}>
          {strings.timeAvailable}
        </CText>
        <View style={localStyles.rowStyle}>
          <MorningSlotIcon />
          <CText type="r12" style={styles.ph5}>
            {strings.morningSlots}
          </CText>
        </View>
        <FlashList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={renderSlotItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={5}
          justifyContent="space-between"
        />
      </KeyBoardAvoidWrapper>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  mainRoot: {
    ...styles.ph20,
  },
  dropdown: {
    borderColor: colors.primary,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(6),
    height: moderateScale(26),
    ...styles.pv20,
    ...styles.ph10,
    ...styles.mt5,
  },
  labelStyle: {
    ...styles.mt15,
  },
  placeholderStyle: {
    ...typography.fontSizes.f12,
    ...typography.fontWeights.Medium,
    color: colors.placeHolderColor,
  },
  selectedTextStyle: {
    ...typography.fontSizes.f12,
    ...typography.fontWeights.Medium,
  },
  itemContainerStyle: {
    // ...styles.ph10,
    // backgroundColor: 'red',
  },
  patientNameTxt: {
    borderColor: colors.primary,
    height: moderateScale(26),
    ...styles.pv20,
  },
  placeSty: {
    // height: moderateScale(30),
    ...typography.fontSizes.f12,
    ...typography.fontWeights.Medium,
    // marginTop:10
  },
  ageGenderContainer: {
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.mt5,
  },
  widthStyle: {
    width: '30%',
  },
  rowStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mt10,
  },
  slotContainer: {
    ...styles.center,
    ...styles.mh5,
    ...styles.mv10,
    height: moderateScale(31),
    width: moderateScale(51),
    borderRadius: moderateScale(4),
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
  },
});

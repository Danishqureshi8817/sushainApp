import {Modal, StyleSheet, View} from 'react-native';
import React from 'react';

// local imports
import {colors} from '../../../themes';
import {styles} from '../../../themes';
import {getHeight, moderateScale} from '../../../common/constants';
import CText from '../CText';
import strings from '../../../i18n/strings';
import CButton from '../CButton';

export default function UpdateAvailable() {
  return (
    <Modal animationType="fade" visible={true} transparent>
      <View style={localStyles.container}>
        <View style={localStyles.innerContainer}>
          <CText type="s16" style={styles.mb15}>
            {strings.updateAvailable}
          </CText>
          <CText type="r14" color={colors.textColor2}>
            {strings.updateAvailableDesc}
          </CText>
          <View style={localStyles.btnContainer}>
            <CButton
              title={strings.remindLater}
              onPress={() => {}}
              type="m12"
              bgColor={colors.white}
              color={colors.primary}
              containerStyle={localStyles.remindBtnStyle}
            />
            <CButton
              title={strings.update}
              onPress={() => {}}
              type="m12"
              containerStyle={localStyles.btnStyle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const localStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    ...styles.center,
    backgroundColor: colors.modalBg,
  },
  innerContainer: {
    width: '85%',
    ...styles.p30,
    backgroundColor: colors.white,
  },
  btnStyle: {
    ...styles.ph20,
    borderRadius: moderateScale(15),
    height: getHeight(34),
  },
  btnContainer: {
    ...styles.rowEnd,
    ...styles.mt15,
    gap: moderateScale(10),
  },
  btnTextStyle: {
    ...styles.ml5,
  },
  remindBtnStyle: {
    ...styles.ph10,
    height: getHeight(34),
  },
});

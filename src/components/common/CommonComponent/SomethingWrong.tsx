import {Modal, StyleSheet, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';

// local imports
import {SomethingWrongIcon} from '../../../assets/svgs';
import {colors} from '../../../themes';
import {styles} from '../../../themes';
import {getHeight, moderateScale} from '../../../common/constants';
import CText from '../CText';
import strings from '../../../i18n/strings';
import CButton from '../CButton';

export interface WrongRef {
  isWrongSomthing: () => void;
  isNotWrongSomthing: () => void;
}

const SomethingWrong = forwardRef<WrongRef, {onTryAgain: () => void}>(
  (props, ref) => {
    const [isSomethingWrong, setIsSomethingWrong] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
      isWrongSomthing: () => setIsSomethingWrong(true),

      isNotWrongSomthing: () => setIsSomethingWrong(false),
    }));

    const onTryAgain = () => {
      // setIsSomethingWrong(false);
      props.onTryAgain();
    };

    return (
      <Modal animationType="fade" visible={isSomethingWrong} transparent>
        <View style={localStyles.container}>
          <View style={localStyles.innerContainer}>
            <SomethingWrongIcon />
            <CText type="s16" style={styles.mt15}>
              {strings.oops}
            </CText>
            <CText
              type="r14"
              align="center"
              color={colors.textColor2}
              style={styles.mt10}>
              {strings.somethingWentWrong}
            </CText>
            <CButton
              title={strings.tryAgain}
              onPress={onTryAgain}
              type="m12"
              containerStyle={localStyles.btnStyle}
            />
          </View>
        </View>
      </Modal>
    );
  },
);

export default SomethingWrong;

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
    ...styles.center,
    backgroundColor: colors.white,
  },
  btnStyle: {
    ...styles.ph20,
    ...styles.mt20,
    borderRadius: moderateScale(15),
    height: getHeight(34),
  },
});

import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import CountDown from 'react-native-countdown-component';
import {useNavigation} from '@react-navigation/native';

// local imports
import {colors, styles} from '../../../themes';
import {getHeight, moderateScale} from '../../../common/constants';
import CText from '../CText';
import strings from '../../../i18n/strings';
import CInput from '../CInput';
import {
  validateConfirmPassword,
  validateMobile,
  validatePassword,
} from '../../../utils/validators';
import typography from '../../../themes/typography';
import KeyBoardAvoidWrapper from '../KeyBoardAvoidWrapper';
import CButton from '../CButton';
import GoogleLogin from '../../GoogleLogin';
import FaceBookLogin from '../../FaceBookLogin';
import {Eye, EyeDashed} from '../../../assets/svgs';
import {forgotePwdOtpAPI, newPasseowrdAPI} from '../../../api/authApi';
import {StackNav} from '../../../navigation/NavigationKeys';

const BlurredStyle: StyleProp<ViewStyle> = {
  backgroundColor: colors.white,
  borderColor: colors.borderColor,
};
const FocusedStyle: StyleProp<ViewStyle> = {
  backgroundColor: colors.inputFocusColor,
  borderColor: colors.primary,
};

const ForgoteComponent = (props: any) => {
  const {
    mobile,
    mobileError,
    mobileInputStyle,
    onChangeMobile,
    onFocusMobile,
    onBlurMobile,
    navigation,
    onPressResetPassword,
    onPressSignUp,
  } = props;
  return (
    <KeyBoardAvoidWrapper containerStyle={styles.flex0}>
      <CText type="s16" color={colors.black}>
        {strings.forgotPassword}
      </CText>
      <CText type="r12" color={colors.textColor2} style={styles.mt10}>
        {strings.forgotPasswordDesc}
      </CText>
      <CInput
        toGetTextFieldValue={onChangeMobile}
        _errorText={mobileError}
        placeholder={strings.enterMobileNumber}
        _value={mobile}
        inputContainerStyle={[
          localStyles.inputContainerStyle,
          mobileInputStyle,
        ]}
        inputBoxStyle={localStyles.inputBoxStyle}
        _onFocus={onFocusMobile}
        _onBlur={onBlurMobile}
        placeholderTextColor={colors.placeHolderColor}
        keyBoardType={'number-pad'}
      />
      <CButton
        title={strings.resetPwd}
        type="s14"
        containerStyle={styles.mv20}
        onPress={onPressResetPassword}
      />
      <View style={localStyles.dividerContainer}>
        <View style={localStyles.dividerStyle} />
        <CText type="s12" color={colors.borderColor}>
          {strings.or}
        </CText>
        <View style={localStyles.dividerStyle} />
      </View>
      <View style={localStyles.iconContainer}>
        <GoogleLogin navigation={navigation} />
        <FaceBookLogin navigation={navigation} />
      </View>
      <CText type="m10" color={colors.gray} style={styles.mv25} align="center">
        {strings.doYouHaveAccount + ' '}
        <CText
          onPress={onPressSignUp}
          suppressHighlighting={true}
          type="r10"
          style={[
            localStyles.underLineStyle,
            {
              textDecorationColor: colors.primary,
            },
          ]}
          color={colors.primary}>
          {strings.signUp}
        </CText>
      </CText>
    </KeyBoardAvoidWrapper>
  );
};

const NewPasswordComponent = (props: any) => {
  const {
    otp,
    otpError,
    otpInputStyle,
    onChangeOtp,
    onFocusOtp,
    onBlurOtp,
    onFinishTimer,
    countDownTime,
    password,
    passwordError,
    passwordInputStyle,
    onChangePassword,
    onFocusPassword,
    onBlurPassword,
    confirmPassword,
    confirmPasswordError,
    confirmPasswordInputStyle,
    onChangeConfirmPassword,
    onFocusConfirmPassword,
    onBlurConfirmPassword,
    onPressSave,
    showPassword,
    showConfirmPassword,
    rightAccessoryPassword,
    rightAccessoryConfirmPassword,
    RightText,
  } = props;
  return (
    <KeyBoardAvoidWrapper containerStyle={styles.flex0}>
      <CText type="m14" style={styles.mt15} color={colors.textColor3}>
        {strings.enterOtp}
      </CText>
      <CInput
        placeholder={strings.enterOtp}
        inputContainerStyle={[
          localStyles.otpInputContainerStyle,
          otpInputStyle,
        ]}
        toGetTextFieldValue={onChangeOtp}
        _errorText={otpError}
        _value={otp}
        inputBoxStyle={localStyles.inputBoxStyle}
        _onFocus={onFocusOtp}
        _onBlur={onBlurOtp}
        placeholderTextColor={colors.placeHolderColor}
        keyBoardType={'number-pad'}
        rightAccessory={() => <RightText />}
        maxLength={4}
      />
      <View style={localStyles.timerContainer}>
        <CountDown
          id={countDownTime}
          until={30}
          onFinish={onFinishTimer}
          digitStyle={localStyles.digiContainerStyle}
          digitTxtStyle={localStyles.digitStyle}
          timeToShow={['M', 'S']}
          timeLabels={{m: undefined, s: undefined}}
          showSeparator
          separatorStyle={localStyles.digitStyle}
        />
      </View>
      <CInput
        toGetTextFieldValue={onChangePassword}
        _errorText={passwordError}
        placeholder={strings.enterNewPassword}
        _value={password}
        inputContainerStyle={[
          localStyles.otpInputContainerStyle,
          passwordInputStyle,
        ]}
        inputBoxStyle={localStyles.inputBoxStyle}
        _onFocus={onFocusPassword}
        _onBlur={onBlurPassword}
        placeholderTextColor={colors.placeHolderColor}
        secureTextEntry={showPassword}
        keyBoardType={'default'}
        rightAccessory={rightAccessoryPassword}
      />
      <CInput
        toGetTextFieldValue={onChangeConfirmPassword}
        _errorText={confirmPasswordError}
        placeholder={strings.confirmNewPassword}
        _value={confirmPassword}
        inputContainerStyle={[
          localStyles.otpInputContainerStyle,
          confirmPasswordInputStyle,
        ]}
        inputBoxStyle={localStyles.inputBoxStyle}
        _onFocus={onFocusConfirmPassword}
        _onBlur={onBlurConfirmPassword}
        keyBoardType={'default'}
        placeholderTextColor={colors.placeHolderColor}
        secureTextEntry={showConfirmPassword}
        rightAccessory={rightAccessoryConfirmPassword}
      />
      <CButton
        title={strings.save}
        type="s14"
        containerStyle={localStyles.saveBtnStyle}
        onPress={onPressSave}
        style={styles.ph15}
      />
    </KeyBoardAvoidWrapper>
  );
};

export default function ForgotePassword(props: any) {
  const {SheetRef} = props;
  const navigation = useNavigation();

  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // input styles
  const [mobileInputStyle, setMobileInputStyle] =
    useState<StyleProp<ViewStyle>>(BlurredStyle);
  const [isForgotePassword, setIsForgotePassword] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const [otpInputStyle, setOtpInputStyle] =
    useState<StyleProp<ViewStyle>>(BlurredStyle);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [countDownTime, setCountDownTime] = useState('1');
  const [passwordInputStyle, setPasswordInputStyle] =
    useState<StyleProp<ViewStyle>>(BlurredStyle);
  const [confirmPasswordInputStyle, setConfirmPasswordInputStyle] =
    useState<StyleProp<ViewStyle>>(BlurredStyle);

  // show Password states
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  // error states
  const [mobileError, setMobileError] = useState<string>('');
  const [otpError, setOtpError] = useState<string>('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [otpCode, setOtpCode] = useState<string>('');

  const onFocusInput = (
    onHighlight: React.Dispatch<React.SetStateAction<StyleProp<ViewStyle>>>,
  ) => onHighlight(FocusedStyle);
  const onBlurInput = (
    onUnHighlight: React.Dispatch<React.SetStateAction<StyleProp<ViewStyle>>>,
  ) => onUnHighlight(BlurredStyle);

  const onActionSheetClose = () => {
    setMobile('');
    setMobileError('');
    setOtp('');
    setOtpError('');
    setPassword('');
    setPasswordError('');
    setConfirmPassword('');
    setConfirmPasswordError('');
    setIsForgotePassword(false);
    setIsTimeOver(false);
    setCountDownTime('1');
    setShowPassword(true);
    setShowConfirmPassword(true);
    setMobileInputStyle(BlurredStyle);
    setOtpInputStyle(BlurredStyle);
    setPasswordInputStyle(BlurredStyle);
    setConfirmPasswordInputStyle(BlurredStyle);
  };

  const onChangeMobile = (text: string): void => {
    const {msg} = validateMobile(text.trim());
    setMobile(text.trim());
    setMobileError(msg);
  };

  const onChangeOtp = (text: string): void => setOtp(text.trim());

  const onFocusMobile = () => onFocusInput(setMobileInputStyle);
  const onBlurMobile = () => onBlurInput(setMobileInputStyle);
  const onFocusOtp = () => onFocusInput(setOtpInputStyle);
  const onBlurOtp = () => onBlurInput(setOtpInputStyle);
  const onFocusPassword = () => onFocusInput(setPasswordInputStyle);
  const onBlurPassword = () => onBlurInput(setPasswordInputStyle);
  const onFocusConfirmPassword = () =>
    onFocusInput(setConfirmPasswordInputStyle);
  const onBlurConfirmPassword = () => onBlurInput(setConfirmPasswordInputStyle);

  const onPressResetPassword = async () => {
    if (mobile !== '' && !mobileError && !isForgotePassword) {
      const res = (await forgotePwdOtpAPI(mobile)) as any;
      console.log('otpValue>>>', res?.otpValue);
      setOtpCode(res?.otpValue);
      setIsForgotePassword(true);
    }
  };

  const onPressSave = async () => {
    if (
      !!otp &&
      !!password &&
      !!confirmPassword &&
      !passwordError &&
      !confirmPasswordError
    ) {
      const res = (await newPasseowrdAPI(mobile, password, otp)) as any;
      if (!!res?.user) {
        console.log('newPwd>>', res);
        SheetRef.current?.hide();
      } else {
        setOtpError(res?.message);
      }
    }
  };

  const onFinishTimer = () => setIsTimeOver(true);

  const onPressResendOtp = async () => {
    const res = (await forgotePwdOtpAPI(mobile)) as any;
    console.log('otpValue>>>', res?.otpValue);
    setOtpCode(res?.otpValue);
    setCountDownTime(countDownTime + '1');
    setIsTimeOver(false);
    setOtp('');
  };

  const onChangePassword = (val: string): void => {
    const {msg} = validatePassword(val.trim());
    setPassword(val.trim());
    setPasswordError(msg);
    if (confirmPassword !== '') {
      const {msg} = validateConfirmPassword(confirmPassword, val.trim());
      setConfirmPasswordError(msg);
    }
  };
  const onChangeConfirmPassword = (val: string): void => {
    const {msg} = validateConfirmPassword(val.trim(), password);
    setConfirmPassword(val.trim());
    setConfirmPasswordError(msg);
  };

  const onPressShowPassword = (): void => setShowPassword(!showPassword);

  const onPressSignUp = () => {
    SheetRef.current?.hide();
    navigation.navigate(StackNav.Signup);
  };

  const onPressShowConfirmPassword = (): void =>
    setShowConfirmPassword(!showConfirmPassword);

  const RightText = () => {
    return (
      <TouchableOpacity
        onPress={onPressResendOtp}
        disabled={isTimeOver ? false : true}>
        <CText type="r12" color={colors.primary}>
          {strings.resendOtp}
        </CText>
      </TouchableOpacity>
    );
  };

  const rightAccessoryPassword = () => {
    return (
      <TouchableOpacity onPress={onPressShowPassword}>
        {showPassword ? <EyeDashed /> : <Eye />}
      </TouchableOpacity>
    );
  };

  const rightAccessoryConfirmPassword = () => {
    return (
      <TouchableOpacity onPress={onPressShowConfirmPassword}>
        {showConfirmPassword ? <EyeDashed /> : <Eye />}
      </TouchableOpacity>
    );
  };

  return (
    <ActionSheet
      ref={SheetRef}
      onClose={onActionSheetClose}
      keyboardShouldPersistTaps={'handled'}
      containerStyle={localStyles.rootContainer}>
      {!isForgotePassword ? (
        <ForgoteComponent
          mobile={mobile}
          mobileError={mobileError}
          mobileInputStyle={mobileInputStyle}
          onChangeMobile={onChangeMobile}
          onFocusMobile={onFocusMobile}
          onBlurMobile={onBlurMobile}
          navigation={navigation}
          onPressResetPassword={onPressResetPassword}
          onPressSignUp={onPressSignUp}
        />
      ) : (
        <NewPasswordComponent
          otp={otp}
          otpError={otpError}
          otpInputStyle={otpInputStyle}
          onChangeOtp={onChangeOtp}
          onFocusOtp={onFocusOtp}
          onBlurOtp={onBlurOtp}
          onFinishTimer={onFinishTimer}
          countDownTime={countDownTime}
          password={password}
          passwordError={passwordError}
          passwordInputStyle={passwordInputStyle}
          onChangePassword={onChangePassword}
          onFocusPassword={onFocusPassword}
          onBlurPassword={onBlurPassword}
          confirmPassword={confirmPassword}
          confirmPasswordError={confirmPasswordError}
          confirmPasswordInputStyle={confirmPasswordInputStyle}
          onChangeConfirmPassword={onChangeConfirmPassword}
          onFocusConfirmPassword={onFocusConfirmPassword}
          onBlurConfirmPassword={onBlurConfirmPassword}
          onPressSave={onPressSave}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          onPressShowPassword={onPressShowPassword}
          onPressShowConfirmPassword={onPressShowConfirmPassword}
          rightAccessoryPassword={rightAccessoryPassword}
          rightAccessoryConfirmPassword={rightAccessoryConfirmPassword}
          RightText={RightText}
        />
      )}
    </ActionSheet>
  );
}

const localStyles = StyleSheet.create({
  rootContainer: {
    ...styles.p20,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  inputContainerStyle: {
    height: moderateScale(36),
    ...styles.mt15,
  },
  otpInputContainerStyle: {
    height: moderateScale(36),
  },
  inputBoxStyle: {
    ...styles.pl20,
    ...typography.fontSizes.f14,
    ...typography.fontWeights.Regular,
  },
  dividerContainer: {
    ...styles.rowSpaceBetween,
    gap: moderateScale(20),
  },
  dividerStyle: {
    ...styles.flex,
    height: moderateScale(1),
    backgroundColor: colors.gray3,
  },
  iconContainer: {
    ...styles.rowSpaceAround,
    ...styles.mt15,
    ...styles.mb10,
    ...styles.ph30,
  },
  iconStyle: {
    ...styles.p10,
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
    borderRadius: moderateScale(30),
  },
  underLineStyle: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.success,
  },
  digitStyle: {
    fontSize: moderateScale(12),
    ...typography.fontWeights.Medium,
    color: colors.textColor,
  },
  digiContainerStyle: {
    backgroundColor: colors.white,
    height: getHeight(22),
    width: moderateScale(22),
    ...styles.center,
  },
  timerContainer: {
    ...styles.alignStart,
    ...styles.mb20,
  },
  saveBtnStyle: {
    width: '40%',
    ...styles.selfCenter,
    ...styles.mv20,
    borderRadius: moderateScale(10),
  },
});

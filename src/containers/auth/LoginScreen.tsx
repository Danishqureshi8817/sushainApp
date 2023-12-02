import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ActionSheetRef} from 'react-native-actions-sheet';

// local imports
import typography from '../../themes/typography';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {colors, styles} from '../../themes';
import images from '../../assets/images';
import CInput from '../../components/common/CInput';
import {
  validateEmail,
  validateMobile,
  validatePassword,
} from '../../utils/validators';
import {Eye, EyeDashed} from '../../assets/svgs';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {getHeight, moderateScale} from '../../common/constants';
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/NavigationKeys';
import {postRequestApi} from '../../api/axios';
import {
  USER_LOG_IN_WITH_PASSWORD,
  USER_REGISTER_LOG_IN_API,
} from '../../api/url';
import {showPopupWithOk} from '../../utils/helpers';
import {LoginWithOtpResponse, OtpVerifyResponse} from '../../types/Types';
import GoogleLogin from '../../components/GoogleLogin';
import FaceBookLogin from '../../components/FaceBookLogin';
import {
  setRefreshToken,
  setToken,
  setUserDetail,
} from '../../utils/asyncstorage';
import ForgotePassword from '../../components/common/modal/ForgotePassword';

const BlurredStyle: StyleProp<ViewStyle> = {
  backgroundColor: colors.white,
  borderColor: colors.borderColor,
};
const FocusedStyle: StyleProp<ViewStyle> = {
  backgroundColor: colors.inputFocusColor,
  borderColor: colors.primary,
};

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [emailMobileError, setEmailMobileError] = useState('');
  const [userIDLength, setUserIDLength] = useState(320);
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [emailInputStyle, setEmailInputStyle] =
    useState<StyleProp<ViewStyle>>(BlurredStyle);
  const [passwordInputStyle, setPasswordInputStyle] =
    useState<StyleProp<ViewStyle>>(BlurredStyle);

  const [password, setPassword] = useState('');
  const forgotePasswordRef = useRef<ActionSheetRef>(null);

  const onFocusInput = (
    onHighlight: React.Dispatch<React.SetStateAction<StyleProp<ViewStyle>>>,
  ) => onHighlight(FocusedStyle);
  const onBlurInput = (
    onUnHighlight: React.Dispatch<React.SetStateAction<StyleProp<ViewStyle>>>,
  ) => onUnHighlight(BlurredStyle);

  const onFocusEmail = () => {
    onFocusInput(setEmailInputStyle);
  };
  const onBlurEmail = () => {
    onBlurInput(setEmailInputStyle);
  };
  const onFocusPassword = () => {
    onFocusInput(setPasswordInputStyle);
  };
  const onBlurPassword = () => {
    onBlurInput(setPasswordInputStyle);
  };

  const onPressShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onChangedEmailOrMobile = (val: string) => {
    if (!isNaN(Number(val))) {
      val.length !== 10 && setUserIDLength(10);
      var {msg} = validateMobile(val.trim());
      setEmailMobileError(msg);
      setEmailOrMobile(val.trim());
    } else {
      val.length !== 320 && setUserIDLength(320);
      var {msg} = validateEmail(val.trim());
      setEmailOrMobile(val.trim());
      setEmailMobileError(msg);
    }
  };

  const onChangePassword = (val: string) => {
    const {msg} = validatePassword(val.trim());
    setPassword(val.trim());
    setPasswordError(msg);
  };

  const onPressSkip = async () => {
    navigation.reset({
      index: 0,
      routes: [{name: StackNav.DrawerNavigation}],
    });
  };

  const onPressSignInWithOtp = async () => {
    if (emailOrMobile.length === 0) {
      setEmailMobileError(strings.thisFieldIsMandatory);
    }
    if (emailMobileError === '' && emailOrMobile) {
      let otpSentResponse = (await postRequestApi(USER_REGISTER_LOG_IN_API, {
        mobile: emailOrMobile,
      })) as LoginWithOtpResponse;
      if (otpSentResponse?.code === 200) {
        if (otpSentResponse.success) {
          console.log('=========', JSON.stringify(otpSentResponse));
          navigation.navigate(StackNav.VerifyLoginOtp, {
            mobile: emailOrMobile,
            otp: otpSentResponse?.data[0]?.otpValue,
          });
        }
      } else {
        showPopupWithOk('', otpSentResponse?.message);
      }
    }
  };

  const onPressSignUp = () => navigation.navigate(StackNav.Signup);

  const onPressResetPassword = () => forgotePasswordRef.current?.show();

  const onPressTermsOfService = () =>
    navigation.navigate(StackNav.TermsOfService);

  const onPressPrivacyPolicy = () =>
    navigation.navigate(StackNav.PrivacyPolicy);

  const onPressSIgnInNow = async () => {
    if (emailOrMobile.length === 0) {
      setEmailMobileError(strings.thisFieldIsMandatory);
    }
    if (password.length === 0) {
      setPasswordError(strings.thisFieldIsMandatory);
    }
    if (
      emailMobileError === '' &&
      emailOrMobile &&
      passwordError === '' &&
      password
    ) {
      let payLoad = {
        // email: emailOrMobile,
        mobile: emailOrMobile,
        password: password,
      };
      let loginResponse = (await postRequestApi(
        USER_LOG_IN_WITH_PASSWORD,
        payLoad,
      )) as OtpVerifyResponse;
      if (loginResponse?.code === 200) {
        if (loginResponse.success) {
          console.log('=========', JSON.stringify(loginResponse));
          await setToken(loginResponse?.data[0]?.token);
          await setUserDetail(loginResponse?.data[0]?.user);
          await setRefreshToken(loginResponse?.data[0]?.refreshToken);
          global.userDetail = loginResponse?.data[0]?.user;
          navigation.reset({
            index: 0,
            routes: [{name: StackNav.DrawerNavigation}],
          });
        }
      } else {
        showPopupWithOk('', loginResponse?.message);
      }
    }
  };

  const rightAccessory = () => {
    return (
      <TouchableOpacity onPress={onPressShowPassword}>
        {showPassword ? <EyeDashed /> : <Eye />}
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView style={localStyles.root}>
      <KeyBoardAvoidWrapper>
        <TouchableOpacity onPress={onPressSkip}>
          <CText type="m12" color={colors.primary} style={styles.selfEnd}>
            {strings.skip}
          </CText>
        </TouchableOpacity>
        <Image style={localStyles.imageStyle} source={images.signupImage} />
        <View style={localStyles.userSignInContainer}>
          <CText type="s16">{strings.userSignIn}</CText>
          <View style={localStyles.newMenberContainer}>
            <CText type="r14">{strings.newMember}</CText>
            <TouchableOpacity onPress={onPressSignUp}>
              <CText type="s14" color={colors.success}>
                {strings.signUp}
              </CText>
            </TouchableOpacity>
          </View>
        </View>
        <CInput
          toGetTextFieldValue={onChangedEmailOrMobile}
          placeholder={strings.enterMobileOrEmail}
          _value={emailOrMobile}
          inputContainerStyle={[
            localStyles.inputContainerStyle,
            emailInputStyle,
          ]}
          _maxLength={userIDLength}
          inputBoxStyle={localStyles.inputBoxStyle}
          _onFocus={onFocusEmail}
          _onBlur={onBlurEmail}
          placeholderTextColor={colors.placeHolderColor}
        />
        <View style={styles.rowSpaceBetween}>
          <CText color={colors.alertColor} type="r12" style={styles.ml10}>
            {emailMobileError}
          </CText>
          <TouchableOpacity
            onPress={onPressSignInWithOtp}
            style={styles.selfEnd}>
            <CText
              type="s12"
              style={localStyles.underLineStyle}
              color={colors.success}>
              {strings.signInWithOtp}
            </CText>
          </TouchableOpacity>
        </View>
        <CInput
          toGetTextFieldValue={onChangePassword}
          placeholder={strings.password}
          _value={password}
          _errorText={passwordError}
          _isSecure={showPassword}
          inputContainerStyle={[
            localStyles.inputContainerStyle,
            passwordInputStyle,
          ]}
          keyBoardType={'default'}
          inputBoxStyle={localStyles.inputBoxStyle}
          _onFocus={onFocusPassword}
          _onBlur={onBlurPassword}
          placeholderTextColor={colors.placeHolderColor}
          rightAccessory={rightAccessory}
        />

        <TouchableOpacity
          style={[styles.selfEnd, styles.mb10]}
          onPress={onPressResetPassword}>
          <CText
            type="s12"
            style={localStyles.underLineStyle}
            color={colors.success}>
            {strings.resetPassword}
          </CText>
        </TouchableOpacity>
        <CButton
          title={strings.signInNow}
          type="s14"
          containerStyle={localStyles.signBtnStyle}
          onPress={onPressSIgnInNow}
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
        <View style={localStyles.dividerContainer}>
          <View
            style={[
              localStyles.dividerStyle,
              {
                backgroundColor: colors.gray4,
              },
            ]}
          />
          <CText type="r12">{strings.signInForDoctors}</CText>
          <View
            style={[
              localStyles.dividerStyle,
              {
                backgroundColor: colors.gray4,
              },
            ]}
          />
        </View>
        <CButton
          title={strings.doctorLogin}
          type="s14"
          containerStyle={localStyles.doctorBtnStyle}
          onPress={() => {}}
        />
        <CText type="r10" color={colors.gray} align="center">
          {strings.byProceedingYou}
          <CText
            onPress={onPressTermsOfService}
            suppressHighlighting={true}
            type="r10"
            style={[
              localStyles.underLineStyle,
              {
                textDecorationColor: colors.primary,
              },
            ]}
            color={colors.primary}>
            {strings.termsOfService}
          </CText>
          {' & '}
          <CText
            onPress={onPressPrivacyPolicy}
            suppressHighlighting={true}
            type="r10"
            style={[
              localStyles.underLineStyle,
              {
                textDecorationColor: colors.primary,
              },
            ]}
            color={colors.primary}>
            {strings.privacyPolicy}
          </CText>
        </CText>
      </KeyBoardAvoidWrapper>
      <ForgotePassword SheetRef={forgotePasswordRef} />
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.pv20,
  },
  imageStyle: {
    width: moderateScale(220),
    height: getHeight(220),
    ...styles.selfCenter,
    resizeMode: 'contain',
  },
  userSignInContainer: {
    ...styles.mt20,
    ...styles.rowSpaceBetween,
  },
  newMenberContainer: {
    ...styles.flexRow,
    ...styles.center,
  },
  inputContainerStyle: {
    height: getHeight(40),
    marginBottom: 0,
  },
  inputBoxStyle: {
    ...styles.pl20,
    ...typography.fontSizes.f14,
    ...typography.fontWeights.Regular,
  },
  underLineStyle: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.success,
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
    ...styles.mv10,
    width: '55%',
    ...styles.selfCenter,
  },
  doctorBtnStyle: {
    ...styles.mv20,
    height: getHeight(34),
  },
  signBtnStyle: {
    ...styles.mb20,
    height: getHeight(34),
  },
});

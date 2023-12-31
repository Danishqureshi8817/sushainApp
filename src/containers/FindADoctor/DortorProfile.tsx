import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';

// local imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import {
  BlackShareIcon,
  BottomIcon,
  ChatIcon,
  LikeIcon,
  RegistrationIcon,
  ServiceOfferdIcon,
  VideoCallDrawerIcon,
} from '../../assets/svgs';
import {colors, styles} from '../../themes';
import CText from '../../components/common/CText';
import RatingComponent from '../../components/HomeComponent/RatingComponent';
import {
  TIME_FORMATE,
  TIME_YMD,
  deviceWidth,
  getHeight,
  moderateScale,
} from '../../common/constants';
import CButton from '../../components/common/CButton';
import SubHeader from '../../components/common/CommonComponent/SubHeader';
import {DoctorSpecialityListData} from '../../types/Types';
import {BASE_IMG_NEW_PATH, shopByategoryData} from '../../api/constant';
import {DoctorDetailListAPI} from '../../api/FindDoctor';
import moment from 'moment';
import {StackNav} from '../../navigation/NavigationKeys';

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

const RenderReviewItem = ({item}: any) => {
  const formattedDate = moment(item?.time, TIME_FORMATE).format(TIME_YMD);
  return (
    <View style={localStyles.reviewContainerStyle}>
      <View style={styles.rowSpaceBetween}>
        <View style={styles.rowCenter}>
          <View style={localStyles.reviewImgContainer}>
            <CText type="b14" numberOfLines={1} color={colors.white}>
              {item?.cust_name?.[0].toUpperCase()}
            </CText>
          </View>
          <View>
            <CText type="s12" numberOfLines={1}>
              {item?.cust_name}
            </CText>
            <CText type="r10" numberOfLines={1} style={styles.mt5}>
              {moment(formattedDate, TIME_YMD).fromNow()}
            </CText>
          </View>
        </View>
        <View style={styles.selfStart}>
          <RatingComponent
            star={item?.rating}
            style={[localStyles.straStyle, styles.mt5]}
          />
        </View>
      </View>
      <CText type="s12" numberOfLines={1} style={styles.mt15}>
        {item?.heading}
      </CText>
      <CText type="r10" numberOfLines={4} style={styles.mt5}>
        {item?.des}
      </CText>
    </View>
  );
};

const RenderFaqItem = ({item}: any) => {
  return (
    <TouchableOpacity style={localStyles.faqContainer}>
      <CText type="s12" numberOfLines={2}>
        {
          'What is the educational qualification and years of experience of Dr Preeti Chhabra?'
        }
      </CText>
      <BottomIcon />
    </TouchableOpacity>
  );
};

const ReviewDivider = () => {
  return <View style={localStyles.reviewDividerStyle} />;
};

interface Props {
  route: any;
  navigation: any;
}

export default function CategoryDoctorList({route, navigation}: Props) {
  const {id} = route.params;
  const [doctorDetail, setDoctorDetail] = React.useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const doctorList = (await DoctorDetailListAPI(id)) as any;
      console.log('DoctorDetailListAPI', doctorList);
      setDoctorDetail(doctorList?.[0].doctorList);
    };
    fetchData();
  }, []);

  const onPressReview = () =>
    navigation.navigate(StackNav.PatientsReview, {
      data: {
        doctorId: id,
        doctorName: doctorDetail?.name,
        doctorImage: doctorDetail?.photo,
        doctorRating: doctorDetail?.rating,
        doctorReview: doctorDetail?.top_doc_review_per + ' reviews',
        reviewData: doctorDetail?.doctor_customer_review,
      },
    });

  const onPressBookAppointment = () =>
    navigation.navigate(StackNav.SelectTimeSlot, {id});

  const renderItem = ({item}: {item: DoctorSpecialityListData}) => {
    return <RenderDSpecialities item={item} />;
  };

  const RightIcon = () => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity style={styles.ph5}>
          <LikeIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pl5}>
          <BlackShareIcon />
        </TouchableOpacity>
      </View>
    );
  };

  const Divider = () => {
    return <View style={localStyles.dividerStyle} />;
  };

  return (
    <CSafeAreaView>
      <CHeader title={strings.doctorsProfile} rightIcon={<RightIcon />} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={localStyles.cardMainContainer}>
          <View style={localStyles.rowContainer}>
            <View style={styles.center}>
              <Image
                source={{uri: BASE_IMG_NEW_PATH + doctorDetail?.photo}}
                style={localStyles.doctorImgStyle}
              />
              <View style={styles.rowStart}>
                <RatingComponent
                  star={doctorDetail?.rating}
                  style={localStyles.straStyle}
                />
                <CText
                  type="r10"
                  color={colors.textColor2}
                  style={localStyles.leftTextStyle}>
                  {doctorDetail?.top_doc_review_per + ' reviews'}
                </CText>
              </View>
            </View>
            <View style={localStyles.rightContainer}>
              <View style={localStyles.rightInnerContainer}>
                <CText type="s12">{doctorDetail?.name}</CText>
                <CText type="r10" numberOfLines={2}>
                  {doctorDetail?.specialization}
                </CText>
                <CText type="r10" numberOfLines={1} color={colors.textColor7}>
                  {doctorDetail?.max_qualification}
                </CText>
                <CText type="r10" numberOfLines={1}>
                  {doctorDetail?.experience + ' YRS. EXP.'}
                </CText>
                <View style={styles.rowStart}>
                  <ChatIcon />
                  <CText type="r10" numberOfLines={4} style={styles.ph5}>
                    {doctorDetail?.known_languages}
                  </CText>
                </View>
                <CButton
                  title={strings.bookNow}
                  onPress={onPressBookAppointment}
                  type="b12"
                  containerStyle={localStyles.btnStyle}
                />
              </View>
            </View>
          </View>
        </View>
        <SubHeader title={strings.aboutDoctor} isViewHide={false} />
        <CText type="r10" numberOfLines={4} style={styles.ph20}>
          {doctorDetail?.short_intro}
        </CText>
        <CButton
          title={strings.readMore}
          onPress={() => {}}
          type="m10"
          containerStyle={localStyles.readMoreBtnStyle}
          bgColor={colors.white}
          color={colors.success}
        />
        <View style={localStyles.videoContianer}>
          <View style={localStyles.headerStyle}>
            <View style={styles.rowCenter}>
              <VideoCallDrawerIcon />
              <CText type="m12" style={styles.ml5} color={colors.black}>
                {strings.videoConsultation}
              </CText>
            </View>
            <CText type="b14" color={colors.black}>
              {'₹ ' + doctorDetail?.vc_fees + '/-'}
            </CText>
          </View>
          <CButton
            title={strings.VIEWALLSLOTS}
            onPress={() => {}}
            type="m10"
            containerStyle={localStyles.viewAllSlotBtnStyle}
            bgColor={colors.white}
            color={colors.primary}
          />
        </View>
        <View style={localStyles.subHeaderStyle}>
          <RegistrationIcon />
          <CText type="s14" style={styles.ml5} numberOfLines={1}>
            {strings.registrationNumber}
          </CText>
        </View>
        <CText
          type="r12"
          style={localStyles.registrationTextStyle}
          numberOfLines={1}>
          {doctorDetail?.bams_registration_id}
        </CText>
        <View style={localStyles.subHeaderStyle}>
          <ServiceOfferdIcon />
          <CText type="s14" style={styles.ml5} numberOfLines={1}>
            {strings.servicesOffered}
          </CText>
        </View>
        <View>
          <FlashList
            data={shopByategoryData}
            renderItem={renderItem}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.ph20}
          />
        </View>
        <Divider />
        <SubHeader title={strings.patientsReview} isViewHide={false} />
        <FlashList
          data={doctorDetail?.doctor_customer_review.splice(0, 2)}
          renderItem={RenderReviewItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ReviewDivider />}
          estimatedItemSize={10}
        />
        <CButton
          title={strings.viewAllReviews}
          onPress={onPressReview}
          type="m10"
          containerStyle={localStyles.viewAllReviewsStyle}
          bgColor={colors.white}
          color={colors.success}
        />
        <Divider />
        <SubHeader title={strings.faqs} isViewHide={false} />
        <FlashList
          data={doctorDetail?.doctor_customer_review.splice(0, 2)}
          renderItem={RenderFaqItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ReviewDivider />}
          estimatedItemSize={10}
          contentContainerStyle={styles.ph20}
        />
        <CButton
          title={strings.readMore}
          onPress={() => {}}
          type="m10"
          containerStyle={localStyles.readMoreWithBgBtnStyle}
          bgColor={colors.success}
          color={colors.white}
        />
        <CButton
          title={strings.bookAppointment}
          onPress={onPressBookAppointment}
          type="b14"
          containerStyle={styles.m20}
          bgColor={colors.primary}
          color={colors.white}
        />
      </ScrollView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  cardMainContainer: {
    ...styles.p20,
    ...styles.mb15,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.bColor2,
  },
  doctorImgStyle: {
    height: getHeight(110),
    width: moderateScale(110),
    borderRadius: moderateScale(10),
    resizeMode: 'contain',
    borderWidth: moderateScale(1),
    borderColor: colors.primary,
    ...styles.mb10,
  },
  rowContainer: {
    ...styles.flexRow,
    ...styles.itemsStart,
  },
  straStyle: {
    height: moderateScale(10),
    width: moderateScale(10),
    marginHorizontal: moderateScale(1),
  },
  rightContainer: {
    ...styles.ml10,
    width: deviceWidth - moderateScale(170),
  },
  leftTextStyle: {
    ...styles.ml5,
  },
  rightInnerContainer: {
    gap: moderateScale(5),
  },
  btnStyle: {
    ...styles.ph15,
    ...styles.mt5,
    height: getHeight(30),
    backgroundColor: colors.primary,
    borderRadius: moderateScale(10),
    ...styles.selfEnd,
  },
  readMoreBtnStyle: {
    ...styles.ph10,
    ...styles.mt5,
    ...styles.mr20,
    height: getHeight(20),
    ...styles.selfEnd,
  },
  videoContianer: {
    ...styles.mh20,
    ...styles.mt20,
    ...styles.mb10,
    ...styles.shadowStyle,
    padding: moderateScale(5),
    borderRadius: moderateScale(10),
    backgroundColor: colors.white,
  },
  headerStyle: {
    ...styles.rowSpaceBetween,
    ...styles.p10,
    ...styles.mb20,
    backgroundColor: colors.gray5,
    borderTopLeftRadius: moderateScale(7),
    borderTopRightRadius: moderateScale(7),
  },
  viewAllSlotBtnStyle: {
    ...styles.ph10,
    height: getHeight(20),
    ...styles.selfCenter,
  },
  subHeaderStyle: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.ph20,
    ...styles.mv10,
  },
  registrationTextStyle: {
    ...styles.ph20,
    ...styles.mb10,
  },
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
  dividerStyle: {
    height: getHeight(4),
    backgroundColor: colors.bColor2,
    ...styles.mv15,
  },
  reviewContainerStyle: {
    ...styles.mh20,
    ...styles.pv10,
  },
  reviewImgContainer: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: colors.primary,
    ...styles.center,
    ...styles.mr10,
  },
  reviewDividerStyle: {
    height: moderateScale(1),
    backgroundColor: colors.bColor2,
    ...styles.mv10,
  },
  viewAllReviewsStyle: {
    ...styles.mh20,
    ...styles.mb10,
    height: getHeight(20),
    ...styles.selfStart,
  },
  faqContainer: {
    ...styles.pv10,
    ...styles.flexRow,
    ...styles.justifyBetween,
    ...styles.itemsStart,
  },
  readMoreWithBgBtnStyle: {
    ...styles.ph10,
    height: getHeight(28),
    ...styles.selfCenter,
    borderRadius: moderateScale(10),
  },
});

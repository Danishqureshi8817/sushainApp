import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

// local imports
const CSafeAreaView = React.lazy(() => import('../../components/common/CSafeAreaView'))
const ADoctorHealthIssue = React.lazy(() => import('../../components/DoctorComponent/ADoctorHealthIssue'))
const TopDoctor = React.lazy(() => import('../../components/DoctorComponent/TopDoctor'))
const DoctorCategoryComponent = React.lazy(() => import('../../components/DoctorComponent/DoctorCategoryComponent'))
const CText = React.lazy(() => import('../../components/common/CText'))
const TopBannerFindDoctor = React.lazy(() => import('../../components/DoctorComponent/TopBannerFindDoctor'))
const CHeader = React.lazy(() => import('../../components/common/CHeader'))
const SearchWithLikeComponent = React.lazy(() => import('./SearchWithLikeComponent'))


// import CSafeAreaView from '../../components/common/CSafeAreaView';
// import ADoctorHealthIssue from '../../components/DoctorComponent/ADoctorHealthIssue';
import {colors, styles} from '../../themes';
// import TopDoctor from '../../components/DoctorComponent/TopDoctor';
// import DoctorCategoryComponent from '../../components/DoctorComponent/DoctorCategoryComponent';
import strings from '../../i18n/strings';
// import CText from '../../components/common/CText';
import {moderateScale} from '../../common/constants';
import {BrandIcon, DoctorIcon, ReviewsIcon, UserIcon} from '../../assets/svgs';
// import TopBannerFindDoctor from '../../components/DoctorComponent/TopBannerFindDoctor';
import {findDoctorHomeAPI} from '../../api/FindDoctor';
// import CHeader from '../../components/common/CHeader';
// import SearchWithLikeComponent from './SearchWithLikeComponent';

const BottomContainer = ({icon, title}: any) => {
  return (
    <View style={localStyles.bottomComponentStyle}>
      {icon}
      <CText
        type="s12"
        numberOfLines={1}
        align="center"
        style={localStyles.textTileStyle}
        color={colors.black}>
        {title}
      </CText>
    </View>
  );
};

const FindADoctor = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await findDoctorHomeAPI();
      console.log('FindADoctor', data);
    };
    fetchData();
  }, []);

  const RightText = () => {
    return (
      <TouchableOpacity>
        <CText
          type="m14"
          style={{textTransform: 'uppercase'}}
          color={colors.black}>
          {strings.help}
        </CText>
      </TouchableOpacity>
    );
  };

  return (
    <CSafeAreaView>
      <ScrollView style={styles.flexGrow1} showsVerticalScrollIndicator={false}>
        <CHeader
          title={strings.findDoctorVideoConsultation}
          rightIcon={<RightText />}
        />
        <SearchWithLikeComponent />
        <TopBannerFindDoctor />
        <ADoctorHealthIssue />
        <TopDoctor />
        <DoctorCategoryComponent title={strings.generalPhysician} />
        <DoctorCategoryComponent title={strings.dermatologist} />
        <DoctorCategoryComponent title={strings.sexologist} />
        <DoctorCategoryComponent title={strings.stomachIndigestion} />
        <DoctorCategoryComponent title={strings.ent} />
        <DoctorCategoryComponent title={strings.cardiologist} />
        <DoctorCategoryComponent title={strings.urologist} />
        <DoctorCategoryComponent title={strings.personalCare} />
        <View style={localStyles.bottomContainer}>
          <View style={localStyles.rowStyle}>
            <BottomContainer title="7000+ users" icon={<UserIcon />} />
            <BottomContainer
              title="1000+ Ayurvedic Doctors"
              icon={<DoctorIcon />}
            />
          </View>
          <View style={localStyles.rowStyle}>
            <BottomContainer title="100+ Product Brands" icon={<BrandIcon />} />
            <BottomContainer
              title="3000+ Patient reviews"
              icon={<ReviewsIcon />}
            />
          </View>
        </View>
        <View style={{height: 120}} />
      </ScrollView>
    </CSafeAreaView>
  );
};

export default FindADoctor;

const localStyles = StyleSheet.create({
  bottomContainer: {
    backgroundColor: colors.lightBlue3,
    ...styles.pv20,
    ...styles.mh15,
    ...styles.mt50,
    borderRadius: moderateScale(23),
    gap: moderateScale(15),
  },
  textTileStyle: {
    ...styles.ph10,
    ...styles.mt10,
  },
  rowStyle: {
    ...styles.flexRow,
    ...styles.justifyEvenly,
  },
  bottomComponentStyle: {
    ...styles.center,
    ...styles.ph10,
    width: '50%',
  },
});

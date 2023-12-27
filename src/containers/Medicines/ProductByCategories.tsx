import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { colors,styles } from '../../themes'
import typography from '../../themes/typography'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CText from '../../components/common/CText'
import { BackArrow, ColitisIcon, FilterIcon, GascidityIcon, IBSIcon, PepticUlcersIcon, SortIcon } from '../../assets/svgs'
import { getHeight, moderateScale } from '../../common/constants'
import CSafeAreaView from '../../components/common/CSafeAreaView'
import CHeader from '../../components/common/CHeader'
import SearchWithLikeComponent from '../FindADoctor/SearchWithLikeComponent'
import CButton from '../../components/common/CButton'
import strings from '../../i18n/strings'



const ProductByCategories = ({ route, navigation }) => {

   console.log(route.params);
   const {categoryName} = route.params
   
    
  return (
   <CSafeAreaView>
      <CHeader
          title={categoryName}
          //   rightIcon={<RightText />}
        />

      <SearchWithLikeComponent/>

      <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end',paddingRight:responsiveWidth(4),marginTop:responsiveHeight(1),}} >
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

      <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,gap:responsiveWidth(1),paddingHorizontal:responsiveWidth(3)}} >
       
       <View style={{backgroundColor:'#DBFAFF',paddingHorizontal:responsiveWidth(4.4),paddingVertical:responsiveHeight(2),borderRadius:responsiveWidth(10),marginBottom:responsiveHeight(3)}} >
        <Text style={{color:colors.primary,   ...typography.fontSizes.f18,...typography.fontWeights.SemiBold,}} >All</Text>
       </View>
       
       <View>
       <View style={{backgroundColor:'#D9D9D94D',paddingHorizontal:responsiveWidth(2),paddingVertical:responsiveHeight(0.8),borderRadius:responsiveWidth(9),marginBottom:responsiveHeight(1)}} >
        <IBSIcon/>
       </View>

       <Text style={{color:colors.black,...typography.fontSizes.f12,...typography.fontWeights.Regular,textAlign:'center',}} >{strings.IBS}</Text>

       </View>

       <View>
       <View style={{backgroundColor:'#D9D9D94D',paddingHorizontal:responsiveWidth(3),paddingVertical:responsiveHeight(1.4),borderRadius:responsiveWidth(9),marginBottom:responsiveHeight(1)}} >
        <ColitisIcon/>
       </View>

       <Text style={{color:colors.black,...typography.fontSizes.f12,...typography.fontWeights.Regular,textAlign:'center',}} >{strings.colitis}</Text>

       </View>

       <View style={{alignItems:'center'}}  >
       <View style={{backgroundColor:'#D9D9D94D',paddingHorizontal:responsiveWidth(3),paddingVertical:responsiveHeight(1.3),borderRadius:responsiveWidth(9),marginBottom:responsiveHeight(1)}} >
        <GascidityIcon/>
       </View>

       <Text style={{color:colors.black,...typography.fontSizes.f12,...typography.fontWeights.Regular,textAlign:'center',}} >{strings.gasAcidity}</Text>

       </View>


       <View style={{alignItems:'center'}} >
       <View style={{backgroundColor:'#D9D9D94D',paddingHorizontal:responsiveWidth(3.8),paddingVertical:responsiveHeight(1.6),borderRadius:responsiveWidth(9),marginBottom:responsiveHeight(1)}} >
        <PepticUlcersIcon/>
       </View>

       <Text style={{color:colors.black,...typography.fontSizes.f12,...typography.fontWeights.Regular,textAlign:'center',}} >{strings.pepticulcers}</Text>

       </View>
       

       

      </View>


        
   </CSafeAreaView>
  )
}

export default ProductByCategories

const localStyles = StyleSheet.create({

    headerWrapper: {
        ...styles.rowSpaceBetween,
        ...styles.ph20,
        ...styles.pv15,
        ...styles.center,
        backgroundColor: colors.primary3,
      },
      headerText: {
        ...styles.pr10,
        ...styles.mr10,
        ...styles.flex,
      },
      btnContainerStyle: {
        ...styles.ml10,
        ...styles.ph10,
        borderWidth: moderateScale(1),
        borderColor: colors.bColor2,
        height: getHeight(28),
        borderRadius: moderateScale(10),
      },

})
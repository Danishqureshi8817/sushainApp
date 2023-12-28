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
import images from '../../assets/images'
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper'
import ProductItemsByCategory from '../../components/Medicines/ProductItemsByCategory'
import { productItemCategoryData } from '../../api/constant'



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
      <KeyBoardAvoidWrapper>

      

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

    

      <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:responsiveWidth(3),gap:responsiveWidth(4),marginTop:responsiveHeight(2)}} >
       
       <View>
       <TouchableOpacity activeOpacity={0.6} >
       <View style={{backgroundColor:'#DBFAFF',paddingHorizontal:responsiveWidth(4.4),paddingVertical:responsiveHeight(2),borderRadius:responsiveWidth(10),marginBottom:responsiveHeight(1.5)}} >
        <Text style={{color:colors.primary,   ...typography.fontSizes.f18,...typography.fontWeights.SemiBold,}} >All</Text>
       </View>
     </TouchableOpacity>
       <Text></Text>
       </View>

    
       <View style={{flexDirection:'row',alignItems:'baseline',gap:responsiveWidth(4)}} >
       <View>
       <TouchableOpacity activeOpacity={0.6} >
       <View style={{backgroundColor:'#D9D9D94D',paddingHorizontal:responsiveWidth(2.5),paddingVertical:responsiveHeight(1),borderRadius:responsiveWidth(9),marginBottom:responsiveHeight(1),}} >
        <IBSIcon/>
       </View>
       </TouchableOpacity>
       <Text style={{color:colors.black,...typography.fontSizes.f12,...typography.fontWeights.Regular,textAlign:'center',}} >{strings.IBS}</Text>

       </View>

       <View style={{}}>
       <TouchableOpacity activeOpacity={0.6} >
       <View style={{backgroundColor:'#D9D9D94D',paddingHorizontal:responsiveWidth(3.2),paddingVertical:responsiveHeight(1.6),borderRadius:responsiveWidth(9),marginBottom:responsiveHeight(1)}} >
        <ColitisIcon/>
       </View>
       </TouchableOpacity>
       <Text style={{color:colors.black,...typography.fontSizes.f12,...typography.fontWeights.Regular,textAlign:'center',}} >{strings.colitis}</Text>

       </View>

       <View style={{alignItems:'center'}}  >
        <TouchableOpacity activeOpacity={0.6} >
       <View style={{backgroundColor:'#D9D9D94D',paddingHorizontal:responsiveWidth(2.9),paddingVertical:responsiveHeight(1.35),borderRadius:responsiveWidth(9),marginBottom:responsiveHeight(1)}} >
        <GascidityIcon/>
       </View>
       </TouchableOpacity>

       <Text style={{color:colors.black,...typography.fontSizes.f12,...typography.fontWeights.Regular,textAlign:'center',width:responsiveWidth(11)}} >{strings.gasAcidity}</Text>

       </View>


       <View style={{alignItems:'center'}} >
       <TouchableOpacity activeOpacity={0.6} >
       <View style={{backgroundColor:'#D9D9D94D',paddingHorizontal:responsiveWidth(3.8),paddingVertical:responsiveHeight(1.6),borderRadius:responsiveWidth(9),marginBottom:responsiveHeight(1)}} >
        <PepticUlcersIcon/>
       </View>
       </TouchableOpacity>

       <Text style={{color:colors.black,...typography.fontSizes.f12,...typography.fontWeights.Regular,textAlign:'center',width:responsiveWidth(10)}} >{strings.pepticulcers}</Text>

       </View>
       
       </View>
       

      </View>

      <TouchableOpacity style={localStyles.bannerContaienr}>
          <Image
            source={images.productByCategoryBanner}
            style={localStyles.bannerImageStyle}
            resizeMode="cover"
          />
        </TouchableOpacity>

          <ProductItemsByCategory data={productItemCategoryData} bestSeller={true} />

       



        </KeyBoardAvoidWrapper>


        
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
      bannerContaienr: {
        ...styles.center,
        ...styles.mh20,
        marginTop:responsiveHeight(2)
      },
      bannerImageStyle: {
        width: '100%',
        height: moderateScale(140),
        ...styles.mv10,
        borderRadius: moderateScale(10),
      },

})
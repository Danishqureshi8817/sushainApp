import { StyleSheet, Text, View,TouchableOpacity,Image,Dimensions,ScrollView } from 'react-native'
import React,{useState,useRef} from 'react'
import { colors,styles } from '../../themes'
import typography from '../../themes/typography'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CText from '../../components/common/CText'
import { BackArrow, Cart, CartBlack, CartIconWhite, ColitisIcon, CrossBottomTab, FilterIcon, GascidityIcon, IBSIcon, LikeIcon, Location, PepticUlcersIcon, ReloadBottomTab, ShareIcon, ShareIconBlack, SortIcon, TickFilterSelected, TickFilterUnselected } from '../../assets/svgs'
import { deviceHeight, deviceWidth, getHeight, moderateScale } from '../../common/constants'
import CSafeAreaView from '../../components/common/CSafeAreaView'
import CHeader from '../../components/common/CHeader'
import SearchWithLikeComponent from '../FindADoctor/SearchWithLikeComponent'
import CButton from '../../components/common/CButton'
import strings from '../../i18n/strings'
import ShopCategory from '../../components/HomeComponent/ShopCategory'
import MedicinesByCategory from '../../components/Medicines/MedicinesByCategory'
import images from '../../assets/images'
import ProductItemsByCategory from '../../components/Medicines/ProductItemsByCategory'
import { productItemCategoryData } from '../../api/constant'
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper'
import RBSheet from "react-native-raw-bottom-sheet";
import { FlashList } from '@shopify/flash-list'

import { SwiperFlatList } from 'react-native-swiper-flatlist';
// import { ScrollView } from 'react-native-virtualized-view'

const wWidht = Dimensions.get('screen').width;
const wHeight = Dimensions.get('screen').height;
const ProductDetail = () => {

    const [sliderImgActive, setSliderImgActive] = useState(0)

    const onChangeSliderImg = (nativeEvent) => {
        
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
            if(slide != sliderImgActive){
                setSliderImgActive(slide)
            }
        }
    }
  
    const HeaderRightIcon =()=>{

        return(
            <View style={{...styles.flexRow,...styles.itemsCenter,gap:responsiveWidth(2.5)}} >
                <ShareIconBlack/>
                <LikeIcon />
              
                <CartBlack/>
                <CText type='b8' style={{backgroundColor:colors.white,position:'absolute',right:0,paddingHorizontal:responsiveWidth(1.5),paddingVertical:responsiveHeight(0.2),borderRadius:responsiveWidth(2),top:responsiveHeight(-0.5),}} >1</CText>
                
                
            </View>
        )
    }

    const imgData = [
        {
         image:images.productSlider,
        
        },
       {
        image:images.productSlider,
       },
       {
        image:images.productSlider,
       }
       ]

  return (
    <CSafeAreaView>
        <CHeader rightIcon={<HeaderRightIcon/>} />

        <View style={{...styles.flexRow,...styles.itemsCenter,...styles.justifyBetween,marginHorizontal:responsiveWidth(4),marginTop:responsiveHeight(1.5),overflow:'hidden'}} >
           <View style={{...styles.flexRow,...styles.itemsCenter,gap:responsiveWidth(1.5)}} >
           <Location/>
            <CText type='m14' style={{alignSelf:'flex-end'}}  > Deliver to- Pune</CText>
           </View> 

           <CText type='m12' style={{borderBottomWidth:1,borderBottomColor:colors.black}} >Change</CText>
          
        </View>
        
        
    {/* <View style={{borderWidth:1,marginHorizontal:20,paddingRight:40,borderColor:'#E3DBDB',borderRadius:responsiveWidth(5),marginTop:responsiveHeight(2)}} >

    <View style={[styles.container,{height:wHeight*0.22}]}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={1}
      showPagination
      scrollEnabled
      data={[{img:require('../../assets/images/productSlider.png')},{img:require('../../assets/images/productSlider.png')},{img:require('../../assets/images/productSlider.png')}]}
      paginationActiveColor={'#9E9E9E'}
      paginationStyleItemActive={{width:responsiveWidth(2),height:responsiveHeight(1),marginTop:responsiveHeight(6),marginRight:0}}
      paginationStyleItemInactive={{width:responsiveWidth(2),height:responsiveHeight(1),marginTop:responsiveHeight(6),marginRight:0,backgroundColor:'#ECE9E9'}}

      renderItem={({ item }) =>{ 
        // console.log("slider",item)
     return (
        <View style={[localStyles.child, ]}>
          <Image source={item.img} style={{width:'85%',height:'90%',resizeMode:'contain',marginBottom:responsiveHeight(2)}} />
        </View>
      )}
      }
    />
    </View>


    </View> */}

    <View style={{width:wWidht*0.9,height:wHeight*0.22,alignSelf:'center',borderWidth:1,marginHorizontal:responsiveWidth(5),borderColor:'#E3DBDB',borderRadius:responsiveWidth(5),paddingTop:responsiveHeight(1.8),marginTop:responsiveHeight(2)}} >
        <ScrollView
          onScroll={({nativeEvent})=> onChangeSliderImg(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={{width:wWidht*0.9,height:wHeight*0.22}}
        >

            {
                imgData.map((e,index) =>
                <Image key={index} source={e.image} style={{width:wWidht*0.9,height:wHeight*0.20}} resizeMode='contain'/>
                )
            }

        </ScrollView>
    </View>

    <View style={localStyles.wrapDot} >
        {
            imgData.map((e,index)=>
              <Text
                key={index}
                style={sliderImgActive === index ? localStyles.dotActive:localStyles.dot}
              >
                ●
              </Text>
            )
        }
    </View>





 

    
       

    </CSafeAreaView>
  )
}

export default ProductDetail

const localStyles = StyleSheet.create({
  wrapDot:{
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    marginTop:responsiveHeight(1.3)

  },
  dotActive:{
    margin:responsiveWidth(0.5),
    color:'#9E9E9E',
    fontSize:responsiveFontSize(2.5)
    
  },
  dot:{
    margin:responsiveWidth(0.5),
    color:'#ECE9E9',
    fontSize:responsiveFontSize(2.5)
    
  },

})
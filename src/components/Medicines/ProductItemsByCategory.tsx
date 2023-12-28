import {StyleSheet, TouchableOpacity, View,Text,Modal, FlatList,Image} from 'react-native';
import React, {useState} from 'react';
import typography from '../../themes/typography';
import { colors,styles } from '../../themes';
import strings from '../../i18n/strings';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import CSafeAreaView from '../common/CSafeAreaView';
import { HeartLightBlue } from '../../assets/svgs';
import { moderateScale } from '../../common/constants';

const ProductItemsByCategory = ({title,data,bestSeller}: {title: string,data:any,bestSeller:boolean}) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
   

    const renderCardItem = ({item, index}: any) => {
           console.log(item);
           
        return(
            <View style={localStyles.cardMainContainer} >
               
               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:responsiveWidth(1.5),marginTop:responsiveHeight(0),alignSelf:bestSeller?'none':'flex-end'}}>
                {bestSeller && <Text style={localStyles.bestsellerText} >BESTSELLER</Text>}
              <HeartLightBlue style={{alignSelf:'flex-end'}} width={responsiveWidth(6)} height={responsiveHeight(4)} />

              

              </View>

              <Image source={item?.image} style={localStyles.itemImg}  />

              <View>
                {/* <Text>{item?.title}</Text> */}
                {/* <Text>{item?.decp}</Text> */}
              </View>


          
            </View>
        )
    }

  return (
 
      <View style={{flex:1,paddingHorizontal:responsiveWidth(3),marginLeft:responsiveWidth(1)}} >

<FlashList
        style={{flex:1,paddingHorizontal:responsiveWidth(3)}}
          data={data}
          renderItem={renderCardItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          // justifyContent="space-between"
        />

      </View>

    


  )
}

export default ProductItemsByCategory

const localStyles = StyleSheet.create({
    cardMainContainer:{
     borderWidth:1,
     borderColor:'#D9D9D9',
     width:responsiveWidth(45),
     height:moderateScale(200),
     borderRadius:responsiveWidth(3),
     marginBottom:responsiveHeight(1.5)
    },
    bestsellerText:{
        color:colors.primary,
        ...typography.fontWeights.Medium,
        ...typography.fontSizes.f10,
     
      },
      itemImg:{
        resizeMode:'contain',
        width:responsiveWidth(35),
        height:responsiveHeight(14),
        alignSelf:'center',
        marginTop:responsiveHeight(1)

      
    },  
})
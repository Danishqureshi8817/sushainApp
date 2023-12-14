import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { colors,styles } from '../../themes'
import typography from '../../themes/typography'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CText from '../../components/common/CText'
import { BackArrow } from '../../assets/svgs'
import { moderateScale } from '../../common/constants'



const ProductByCategories = () => {
  return (
    <View style={{flex:1,backgroundColor:colors.white}} >
        <View style={[localStyles.headerWrapper,]}>
      <View style={[styles.rowStart, styles.flex]}>
       
          <TouchableOpacity style={styles.mr15} onPress={()=>{}}>
            <BackArrow height={moderateScale(20)} width={moderateScale(20)} />
          </TouchableOpacity>
      
        <CText
          numberOfLines={1}
          style={localStyles.headerText}
          type={'s16'}>
          {'Deijvjfk'}
        </CText>
      </View>
      
    </View>
    </View>
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
})
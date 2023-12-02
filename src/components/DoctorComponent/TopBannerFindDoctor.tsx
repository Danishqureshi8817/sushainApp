import {Platform, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';

// local imports
import {colors, styles} from '../../themes';
import {deviceWidth, getHeight, moderateScale} from '../../common/constants';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const ImageCarousel = () => {
  const [entries, setEntries] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}: any, parallaxProps: any) => {
    return (
      <View style={localStyles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={localStyles.imageContainer}
          style={localStyles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={localStyles.container}>
      <Carousel
        sliderWidth={deviceWidth}
        sliderHeight={deviceWidth}
        itemWidth={deviceWidth - moderateScale(60)}
        data={entries}
        renderItem={renderItem}
        onSnapToItem={index => setIndex(index)}
        hasParallaxImages={true}
        autoplay={true}
      />
      <View style={localStyles.paginationStyle}>
        <Pagination
          dotsLength={entries?.length}
          activeDotIndex={index}
          dotStyle={[localStyles.dotStyle, {backgroundColor: colors.primary}]}
          inactiveDotStyle={[
            localStyles.dotStyle,
            {backgroundColor: colors.dotColor},
          ]}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
          dotContainerStyle={localStyles.dotContainerStyle}
          containerStyle={localStyles.paginationContainerStyle}
        />
      </View>
    </View>
  );
};

export default ImageCarousel;

const localStyles = StyleSheet.create({
  container: {
    ...styles.flex,
    ...styles.mt5,
  },
  item: {
    width: deviceWidth - moderateScale(60),
    height: getHeight(150),
  },
  imageContainer: {
    ...styles.flex,
    marginBottom: Platform.select({ios: 0, android: 1}),
    borderRadius: moderateScale(10),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  dotStyle: {
    height: moderateScale(8),
    width: moderateScale(8),
    borderRadius: moderateScale(4),
  },
  paginationContainerStyle: {
    ...styles.ph15,
    ...styles.pv5,
    ...styles.mt10,
  },
  paginationStyle: {
    ...styles.itemsStart,
  },
  dotContainerStyle: {
    ...styles.mh5,
  },
});

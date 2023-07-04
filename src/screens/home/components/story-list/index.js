import {Animated, Dimensions, Image, Platform, Text, View} from 'react-native';
import {storyList} from '../../../../constant/theme';
import React from 'react';
import styles from './style';

import StoryItem from './story-item';
import StoryListBackGradient from '../gradients/story-list-back-gradient';

const StoryList = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const {width, height} = Dimensions.get('window');
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.2041 : width * 0.2039;

  const renderStoryList = ({item, index}) => {
    const inputRange = [
      (index - 5) * ITEM_SIZE,
      (index - 2) * ITEM_SIZE,
      index * ITEM_SIZE,
    ];

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [-20, 18, -8],
      // extrapolate: 'clamp',
    });

    return (
      <StoryItem
        item={item}
        index={index}
        translateY={translateY}
        ITEM_SIZE={ITEM_SIZE}
      />
    );
  };

  return (
    <>
      {/*   Story List linear background  */}
      <StoryListBackGradient />

      {/* Story listing */}

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={storyList}
        keyExtractor={item => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        style={styles.storyListStyle}
        contentContainerStyle={styles.storyListContainerStyle}
        key={1}
        renderItem={renderStoryList}
      />
    </>
  );
};

export default StoryList;

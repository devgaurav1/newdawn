import {Animated, Image, Text, View} from 'react-native';

import styles from './style';

const StoryItem = ({item, index, translateY, ITEM_SIZE}) => (
  <View
    style={[styles.itemContainer, {width: ITEM_SIZE, height: ITEM_SIZE}]}
    key={index}>
    <Animated.View
      key={index}
      style={[
        styles.itemAlignment,
        {
          transform: [{translateY}],
        },
      ]}>
      <View style={styles.profile}>
        <Image
          key={index}
          source={{uri: item.imgPath}}
          style={styles.posterImage}
        />
      </View>
      <Text style={styles.profileName}>@{item.name}</Text>
    </Animated.View>
  </View>
);

export default StoryItem;

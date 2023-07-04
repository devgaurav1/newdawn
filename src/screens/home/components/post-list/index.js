import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import styles from './style';
import React, {useState} from 'react';
import {images, responsiveHeight} from '../../../../constant/theme';
const PostList = () => {
  const scrollX2 = React.useRef(new Animated.Value(0)).current;
  const {width: windowWidth} = useWindowDimensions();
  const [pageIndex, setPageIndex] = useState(0);
  const {width, height} = Dimensions.get('window');

  const renderPost = () => {
    return (
      <View style={styles.fullWidth}>
        <View style={styles.postHeader}>
          <Image
            source={require('../../../../assets/images/fi-sr-menu-dots.png')}
            style={styles.bellImage}
          />
        </View>

        <View>
          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal={true}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX2}}}],
                {
                  listener: event => {
                    const index = Math.round(
                      event.nativeEvent.contentOffset.x / width,
                    );
                    setPageIndex(index);
                  },
                },
                {useNativeDriver: true},
              )}
              scrollEventThrottle={1}>
              {images.map((image, imageIndex) => {
                return (
                  <View
                    style={[
                      styles.postBodyHeight,
                      {
                        width: windowWidth,
                      },
                    ]}
                    key={imageIndex}>
                    <Image source={{uri: image}} style={styles.card} />
                  </View>
                );
              })}
            </ScrollView>
            <View style={styles.indicatorContainer}>
              {images.map((image, imageIndex) => {
                const width = scrollX2.interpolate({
                  inputRange: [
                    windowWidth * (imageIndex - 1),
                    windowWidth * imageIndex,
                    windowWidth * (imageIndex + 1),
                  ],
                  outputRange: [8, 16, 8],
                  extrapolate: 'clamp',
                });

                return (
                  <Animated.View
                    key={imageIndex}
                    style={[
                      styles.normalDot,
                      {
                        width,

                        opacity: pageIndex == imageIndex ? 1 : 0.5,
                        backgroundColor:
                          pageIndex == imageIndex
                            ? 'rgba(79, 101, 231, 1)'
                            : 'rgba(77, 101, 231, 1)',
                      },
                    ]}
                  />
                );
              })}
            </View>
          </View>
          <View>
            <View style={styles.postFooter}>
              <View style={styles.row}>
                <Image
                  // key={index}
                  source={{
                    uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={styles.profileImage2}
                />
                <Text style={styles.profileNameInPost}>@chefcupid</Text>
              </View>

              <View style={styles.otherProfiles}>
                <Image
                  // key={index}
                  source={require('../../../../assets/images/profilepics.png')}
                  style={styles.profilepics}
                />
                <View style={styles.fireImage}>
                  <View style={[styles.FirIconContenar]}>
                    <Image
                      // key={index}
                      source={require('../../../../assets/images/fireImage.png')}
                      style={[
                        styles.FirImage,
                        {width: 27, height: 27, margin: 2},
                      ]}
                    />
                  </View>
                  <Text style={{alignSelf: 'center'}}>5.3k</Text>
                </View>

                <View style={{justifyContent: 'center', paddingTop: 20}}>
                  <View style={styles.FirIconContenar}>
                    <Image
                      // key={index}
                      source={require('../../../../assets/images/commnet.png')}
                      style={styles.FirImage}
                    />
                  </View>

                  <Text style={{alignSelf: 'center'}}>40</Text>
                </View>

                <View style={styles.FirIconContenar}>
                  <Image
                    // key={index}
                    source={require('../../../../assets/images/fi-rr-redo.png')}
                    style={styles.FirImage}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 60, marginHorizontal: 20}}>
          <Text style={{color: '#000000'}}>
            New york was amazing! I can’t wait to visit again , Everday 😍 🤩
            Baecation trips!!!
          </Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={[0, 0, 0]}
      contentContainerStyle={styles.postListContainer}
      renderItem={renderPost}
    />
  );
};

export default PostList;

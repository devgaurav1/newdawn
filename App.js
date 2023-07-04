/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Dimensions,
  Platform,
  ImageBackground,
  TouchableNativeFeedback,
  TouchableOpacity,
  Pressable,
  Alert,
  useWindowDimensions,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

// import AnimatedTabBar, {TabsConfigsType} from 'curved-bottom-navigation-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';
import {responsiveHeight, responsiveWidth} from './src/constant/theme';

const images = new Array(3).fill(
  'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
);

const storyList = [
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems johnson',
    poster: '1',
  },
  {
    id: 2,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Lipson',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Bucky',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Iron Man',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems carter',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Captain',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Je2ms fury',
    poster: '2',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems johnson',
    poster: '1',
  },
  {
    id: 2,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Lipson',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Bucky',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Iron Man',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems carter',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Captain',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Je2ms fury',
    poster: '2',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems johnson',
    poster: '1',
  },
  {
    id: 2,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Lipson',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Bucky',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Iron Man',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems carter',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Jems Captain',
  },
  {
    id: 1,
    imgPath:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Je2ms fury',
    poster: '2',
  },
];

const {width, height} = Dimensions.get('window');

const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.2041 : width * 0.2039;

const _renderIcon = (routeName, selectedTab) => {
  let icon = '';

  switch (routeName) {
    case 'Home':
      icon = require('./src/assets/images/home.png');
      break;
    case 'Search':
      icon = require('./src/assets/images/search.png');
      break;
    case 'Shop':
      icon = require('./src/assets/images/shop.png');
      break;
    case 'Gift':
      icon = require('./src/assets/images/gift.png');
      break;
  }

  return (
    <Image
      source={icon}
      style={{
        height: 25,
        width: 25,
        tintColor: routeName === selectedTab ? '#4D65E7' : 'grey',
        resizeMode: 'contain',
      }}
    />
  );
};
const renderTabBar = ({routeName, selectedTab, navigate}) => {
  return (
    <Pressable
      onPress={() => navigate(routeName)}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {_renderIcon(routeName, selectedTab)}
    </Pressable>
  );
};

function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollX2 = React.useRef(new Animated.Value(0)).current;
  const [pageIndex, setPageIndex] = useState(0);

  const {width: windowWidth} = useWindowDimensions();

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            // position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // zIndex: -999,
            width: '100%',
            flex: 1,
            backgroundColor: 'red',
          }}>
          <Image
            // key={index}
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={styles.profileImage}
          />
          <View style={{flexDirection: 'row', margin: 15}}>
            <View>
              <View
                style={{
                  height: 11,
                  width: 11,
                  position: 'absolute',
                  backgroundColor: 'rgba(204, 20, 28, 1)',
                  borderRadius: 50,
                  left: 20,
                  zIndex: 999,
                  top: 6,
                }}></View>
              <Image
                // key={index}
                source={require('./src/assets/images/fi-rr-bell.png')}
                style={styles.bellImage}
              />
            </View>

            <View>
              <LinearGradient
                colors={['#3E59E8', '#97A3E2']}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                style={{
                  height: 15,
                  width: 15,
                  position: 'absolute',
                  backgroundColor: 'rgb(125,138,221)',
                  borderRadius: 50,
                  left: 20,
                  zIndex: 9999,
                  top: 6,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 1,
                }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                  onPress={() => Alert.alert('Click Action')}>
                  <Text
                    style={{
                      fontSize: hp(1.5),
                      // fontWeight: '900',
                      color: 'white',
                    }}>
                    4
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
              <Image
                // key={index}
                source={require('./src/assets/images/fi-rr-comments.png')}
                style={styles.bellImage}
              />
            </View>
          </View>
        </View>

        {/*   
          story List linear background 
        */}
        <LinearGradient
          colors={['rgb(225,228,239)', 'white']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            width: responsiveWidth('100%'),
            height: responsiveWidth('55%'), // Adjust the height as desired
            position: 'absolute',
            top: '7%',
            zIndex: 999,
            transform: [
              {scaleY: 0.6}, // Adjust the scaling factor as desired
              {translateY: responsiveWidth('-10%')}, // Adjust the translation amount as desired,
              {
                scaleX: 1.6,
              },
            ],
            borderBottomStartRadius: wp(200),
            borderBottomEndRadius: wp(200),
            overflow: 'hidden',
          }}></LinearGradient>
        {/* <LinearGradient
          colors={['rgb(225,228,239)', 'white']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            height: responsiveWidth('50%'),
            width: responsiveWidth('100%'),
            transform: [{scaleY: 1}, {scaleX: 2}],
            borderBottomStartRadius: wp(200),
            borderBottomEndRadius: wp(200),

            overflow: 'hidden',
            position: 'absolute',
            top: '10%',
            zIndex: 999,
          }}></LinearGradient> */}
        {/* 
    Story List Compoent 
*/}
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          data={storyList}
          keyExtractor={item => item.key}
          horizontal
          bounces={false}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
          renderToHardwareTextureAndroid
          // snapToInterval={ITEM_SIZE}
          snapToAlignment="start"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}
          style={{
            backgroundColor: 'transparent',
            // flex: 1,
            zIndex: 999,
            top: responsiveWidth(20),
          }}
          contentContainerStyle={{
            height: responsiveHeight('23%'),
            backgroundColor: 'transparent',
            // top: responsiveWidth(10),
            // marginTop: '%',
            // flex: 1,
            // borderRadius: responsiveWidth('50'),
          }}
          key={1}
          renderItem={({item, index}) => {
            const inputRange = [
              (index - 5) * ITEM_SIZE,
              (index - 2) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [-19, 18, -6],
              // extrapolate: 'clamp',
            });

            return (
              <View
                style={{
                  width: ITEM_SIZE,
                  height: ITEM_SIZE,
                  paddingTop: hp(1.5),
                }}
                key={index}>
                <Animated.View
                  key={index}
                  style={{
                    transform: [{translateY: translateY}],
                    // backgroundColor: 'red',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      marginHorizontal: wp(2),
                      // paddingTop: hp(1),
                      marginTop: hp(1),
                      borderRadius: 234,
                      borderWidth: 2.5,
                      borderColor: 'rgb(148,152,222)',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      key={index}
                      source={{uri: item.imgPath}}
                      style={styles.posterImage}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: hp(1.2),
                      textAlign: 'center',
                      color: 'black',
                      marginTop: hp(0.4),
                    }}>
                    @{item.name}
                  </Text>
                </Animated.View>
              </View>
            );
          }}
        />
        <FlatList
          data={[0, 0, 0]}
          style={{
            zIndex: -999,
          }}
          contentContainerStyle={{
            paddingTop: responsiveHeight('5%'),
            paddingBottom: responsiveHeight('15%'),
          }}
          renderItem={() => {
            return (
              <View
                style={{
                  // position: 'absolute',

                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    right: 15,
                    justifyContent: 'flex-end',
                    width: '100%',
                    top: 6,
                  }}>
                  <Image
                    // key={index}
                    source={require('./src/assets/images/fi-sr-menu-dots.png')}
                    style={styles.bellImage}
                  />
                </View>

                <View>
                  <View style={styles.scrollContainer}>
                    <ScrollView
                      horizontal={true}
                      pagingEnabled
                      // onMomentumScrollBegin={({nativeEvent}) => {
                      //   // the current offset, {x: number, y: number}
                      //   const position = nativeEvent.contentOffset;
                      //   // page index
                      //   const index = Math.round(nativeEvent.contentOffset.x / width);

                      //   setPageIndex(index);
                      // }}

                      showsHorizontalScrollIndicator={false}
                      // onScroll={() =>
                      //   //  const position = nativeEvent.contentOffset;
                      //   // // page index
                      //   // const index = Math.round(nativeEvent.contentOffset.x / width);

                      //   {
                      //     Animated.event([
                      //       {
                      //         nativeEvent: {
                      //           contentOffset: {
                      //             x: scrollX2,
                      //           },
                      //         },
                      //       },
                      //     ]);
                      //   }
                      // }
                      // snapToInterval={width / 3}
                      // snapToAlignment="center"
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
                            style={{width: windowWidth, height: 400}}
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

                        // console.log('imageIndex', imageIndex, width);
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
                    <View
                      style={{
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginTop: -35,
                        paddingHorizontal: 15,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          // key={index}
                          source={{
                            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                          }}
                          style={styles.profileImage2}
                        />
                        <Text
                          style={{
                            alignSelf: 'center',
                            fontWeight: 700,
                            color: '#000000',
                          }}>
                          @chefcupid
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          margin: 15,
                          alignItems: 'center',
                        }}>
                        <Image
                          // key={index}
                          source={require('./src/assets/images/profilepics.png')}
                          style={styles.profilepics}
                        />
                        <View
                          style={{justifyContent: 'center', paddingTop: 20}}>
                          <View style={[styles.FirIconContenar]}>
                            <Image
                              // key={index}
                              source={require('./src/assets/images/fireImage.png')}
                              style={[
                                styles.FirImage,
                                {width: 27, height: 27, margin: 2},
                              ]}
                            />
                          </View>
                          <Text style={{alignSelf: 'center'}}>5.3k</Text>
                        </View>

                        <View
                          style={{justifyContent: 'center', paddingTop: 20}}>
                          <View style={styles.FirIconContenar}>
                            <Image
                              // key={index}
                              source={require('./src/assets/images/commnet.png')}
                              style={styles.FirImage}
                            />
                          </View>

                          <Text style={{alignSelf: 'center'}}>40</Text>
                        </View>

                        <View style={styles.FirIconContenar}>
                          <Image
                            // key={index}
                            source={require('./src/assets/images/fi-rr-redo.png')}
                            style={styles.FirImage}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{marginTop: 60, marginHorizontal: 20}}>
                  <Text style={{color: '#000000'}}>
                    New york was amazing! I can’t wait to visit again , Everday
                    😍 🤩 Baecation trips!!!
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      {/* 
  24 Button at Story List
*/}

      <TouchableOpacity
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: responsiveHeight('7'),
        }}
        onPressIn={() => alert('You clicked me')}>
        <LinearGradient
          colors={['rgb(239,241,247)', 'rgb(241,242,247)']}
          style={{
            height: hp(6.7),
            width: hp(6.7),
            borderRadius: 115,
            transform: [{scaleY: 1}],
            bottom: hp(0.8),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View
            style={{
              backgroundColor: 'transaprent',
              borderColor: 'rgb(125,138,221)',
              borderWidth: 1.7,
              borderStyle: 'dashed',
              borderRadius: 115,
              height: '80%',
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/assets/images/Vector.png')}
              resizeMode="contain"
              style={{
                height: '70%',
                borderRadius: hp(115),
                resizeMode: 'contain',
                width: '70%',
              }}
            />
            <Text
              style={{
                fontSize: hp(1.4),
                position: 'absolute',
                color: 'rgb(125,138,221)',
                fontWeight: 'bold',
              }}>
              24
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
}

const Search = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Helloe</Text>
    </View>
  );
};
const Shop = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Helloe shop</Text>
    </View>
  );
};
const Gift = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Helloe gift</Text>
    </View>
  );
};

const App = () => {
  const {width: windowWidth} = useWindowDimensions();
  return (
    <NavigationContainer>
      <CurvedBottomBar.Navigator
        type="DOWN"
        // style={styles.bottomBar}
        shadowStyle={{
          shawdow: {
            shadowColor: '#DDDDDD',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 5,
          },
        }}
        height={55}
        circleWidth={45}
        screenOptions={{headerShown: false}}
        bgColor="white"
        renderCircle={({selectedTab, navigate}) => (
          <>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => Alert.alert('Click Action')}>
              <LinearGradient
                colors={['#3E59E8', '#97A3E2']}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: '#4D65E7',
                  bottom: responsiveHeight(3.2),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,
                  elevation: 1,
                }}>
                <Text
                  style={{
                    fontSize: responsiveHeight(5.4),
                    fontWeight: '200',
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'center',
                    marginTop: responsiveHeight(-0.7),
                  }}>
                  +
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          component={() => <Home />}
        />
        <CurvedBottomBar.Screen
          name="Search"
          component={() => <Search />}
          position="LEFT"
        />
        <CurvedBottomBar.Screen
          name="Shop"
          position="RIGHT"
          component={() => <Shop />}
        />
        <CurvedBottomBar.Screen
          name="Gift"
          component={() => <Gift />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '95%',
    height: '92%',
    // resizeMode: 'cover',
    borderRadius: 204,
    borderWidth: 0.1,
    borderColor: 'white',
    // margin: 0,
    // marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 50,

    borderColor: 'white',
    margin: 15,
    // marginBottom: 10,
  },
  profileImage2: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    borderRadius: 50,

    borderColor: 'white',
    alignSelf: 'center',
    marginLeft: 15,
    marginTop: 15,
    marginRight: 7,
    marginBottom: 15,
  },
  bellImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    // borderRadius: 50,

    borderColor: 'white',
    margin: 7,

    // marginBottom: 10,
  },
  FirImage: {
    width: 17,
    height: 17,
    // resizeMode: 'contain',
    // borderRadius: 50,
    // backgroundColor: 'red',
    // borderColor: 'white',
    margin: 7,
    alignSelf: 'center',

    // marginBottom: 10,
  },
  FirIconContenar: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 50,
    margin: 5,
  },

  profilepics: {
    width: 40,
    height: 16,
    resizeMode: 'contain',
    // borderRadius: 50,
    alignSelf: 'center',

    // borderColor: 'white',
    margin: 5,

    // marginBottom: 10,
  },
  textContainer: {
    // backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    // borderRadius: 5,
  },
  card: {
    flex: 1,
    // marginVertical: 4,
    // marginHorizontal: 16,
    // borderRadius: 5,
    overflow: 'hidden',

    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default App;

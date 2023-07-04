import {NavigationContainer} from '@react-navigation/native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {Gift, Home, Search, Shop} from '../screens';
import styles from './styles';
import AddPostButton from './components/add-post-button';
import {Pressable, useWindowDimensions, Image} from 'react-native';

const _renderIcon = (routeName, selectedTab) => {
  let icon = '';

  switch (routeName) {
    case 'Home':
      icon = require('../assets/images/home.png');
      break;
    case 'Search':
      icon = require('../assets/images/search.png');
      break;
    case 'Shop':
      icon = require('../assets/images/shop.png');
      break;
    case 'Gift':
      icon = require('../assets/images/gift.png');
      break;
  }

  return (
    <Image
      source={icon}
      style={[
        styles.bottomTabIcon,
        {tintColor: routeName === selectedTab ? '#4D65E7' : 'grey'},
      ]}
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

const App = () => {
  const {width: windowWidth} = useWindowDimensions();
  return (
    <NavigationContainer>
      <CurvedBottomBar.Navigator
        type="DOWN"
        shadowStyle={styles.shadowContainer}
        height={55}
        circleWidth={45}
        screenOptions={{headerShown: false}}
        bgColor="white"
        renderCircle={({selectedTab, navigate}) => <AddPostButton />}
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

export default App;

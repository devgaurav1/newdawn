import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Header = () => (
  <View style={styles.headerContainer}>
    {/* Profile Photo */}

    <Image
      source={{
        uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      }}
      style={styles.profileImage}
    />

    {/* Notification section */}

    <View style={styles.notificationRowContainer}>
      {/* Notification */}

      <View>
        <View style={styles.redBadge}></View>
        <Image
          source={require('../../../../assets/images/fi-rr-bell.png')}
          style={styles.bellImage}
        />
      </View>

      {/* Message */}

      <View>
        <LinearGradient
          colors={['#3E59E8', '#97A3E2']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={styles.countBadge}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
            }}
            onPress={() => Alert.alert('Click Action')}>
            <Text style={styles.countBadgeText}>4</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Image
          // key={index}
          source={require('../../../../assets/images/fi-rr-comments.png')}
          style={styles.bellImage}
        />
      </View>
    </View>
  </View>
);

export default Header;

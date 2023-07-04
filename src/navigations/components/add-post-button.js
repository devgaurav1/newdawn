import {Alert, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';
const AddPostButton = () => (
  <TouchableOpacity
    style={styles.addPostButton}
    onPress={() => Alert.alert('Click Action')}>
    <LinearGradient
      colors={['#3E59E8', '#97A3E2']}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      style={styles.addpostButtonGradintContainer}>
      <Text style={styles.addIcon}>+</Text>
    </LinearGradient>
  </TouchableOpacity>
);
export default AddPostButton;

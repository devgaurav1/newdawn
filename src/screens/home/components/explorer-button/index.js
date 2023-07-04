import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const ExplorerButton = () => (
  <TouchableOpacity
    style={styles.explorerContainer}
    onPressIn={() => alert('You clicked me')}>
    <LinearGradient
      colors={['rgb(239,241,247)', 'rgb(241,242,247)']}
      style={styles.gradientContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <View style={styles.dahsContainer}>
        <Image
          source={require('../../../../assets/images/Vector.png')}
          resizeMode="contain"
          style={styles.roundArrow}
        />
        <Text style={styles.explorerText}>24</Text>
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

export default ExplorerButton;

import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const StoryListBackGradient = () => (
  <LinearGradient
    colors={['rgb(225,228,239)', 'white']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.container}></LinearGradient>
);
export default StoryListBackGradient;

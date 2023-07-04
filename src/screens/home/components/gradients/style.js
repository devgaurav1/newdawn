import {StyleSheet} from 'react-native';
import {responsiveWidth} from '../../../../constant/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
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
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {responsiveHeight} from '../../../../constant/theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  explorerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: responsiveHeight('7'),
  },
  gradientContainer: {
    height: hp(6.7),
    width: hp(6.7),
    borderRadius: 115,
    transform: [{scaleY: 1}],
    bottom: hp(0.8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dahsContainer: {
    backgroundColor: 'transaprent',
    borderColor: 'rgb(125,138,221)',
    borderWidth: 1.7,
    borderStyle: 'dashed',
    borderRadius: 115,
    height: '80%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundArrow: {
    height: '70%',
    borderRadius: hp(115),
    resizeMode: 'contain',
    width: '70%',
  },
  explorerText: {
    fontSize: hp(1.4),
    position: 'absolute',
    color: 'rgb(125,138,221)',
    fontWeight: 'bold',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {responsiveHeight} from '../constant/theme';

const styles = StyleSheet.create({
  shadowContainer: {
    shawdow: {
      shadowColor: '#DDDDDD',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
    },
  },
  addPostButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addpostButtonGradintContainer: {
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
  },
  addIcon: {
    fontSize: responsiveHeight(5.4),
    fontWeight: '200',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(-0.7),
  },
  bottomTabIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});
export default styles;

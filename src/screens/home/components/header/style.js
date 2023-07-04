import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
    backgroundColor: 'red',
  },
  notificationRowContainer: {flexDirection: 'row', margin: 15},
  redBadge: {
    height: 11,
    width: 11,
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 50,
    left: 20,
    zIndex: 999,
    top: 6,
  },
  countBadge: {
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
  countBadgeText: {
    fontSize: hp(1.5),
    color: 'white',
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
});

export default styles;

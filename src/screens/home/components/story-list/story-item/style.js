import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: hp(1.5),
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
  itemAlignment: {
    justifyContent: 'center',
  },
  profile: {
    marginHorizontal: wp(2),
    marginTop: hp(1),
    borderRadius: 234,
    borderWidth: 2.5,
    borderColor: 'rgb(148,152,222)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: hp(1.2),
    textAlign: 'center',
    color: 'black',
    marginTop: hp(0.4),
  },
});
export default styles;

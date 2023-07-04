import {StyleSheet} from 'react-native';
import {responsiveHeight} from '../../../../constant/theme';
const styles = StyleSheet.create({
  postListContainer: {
    paddingTop: responsiveHeight('5%'),
    paddingBottom: responsiveHeight('15%'),
  },
  fullWidth: {
    width: '100%',
  },
  postHeader: {
    flexDirection: 'row',
    right: 15,
    justifyContent: 'flex-end',
    width: '100%',
    top: 6,
  },
  bellImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    borderColor: 'white',
    margin: 7,
  },
  scrollContainer: {
    height: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  profileImage2: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    borderRadius: 50,

    borderColor: 'white',
    alignSelf: 'center',
    marginLeft: 15,
    marginTop: 15,
    marginRight: 7,
    marginBottom: 15,
  },
  profilepics: {
    width: 40,
    height: 16,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 5,
  },
  FirIconContenar: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 50,
    margin: 5,
  },
  FirImage: {
    width: 17,
    height: 17,
    margin: 7,
    alignSelf: 'center',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  postBodyHeight: {
    height: '100%',
  },
  postFooter: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: -35,
    paddingHorizontal: 15,
  },
  row: {flexDirection: 'row'},
  profileNameInPost: {
    alignSelf: 'center',
    fontWeight: '700',
    color: '#000000',
  },
  otherProfiles: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
  },
  fireImage: {justifyContent: 'center', paddingTop: 20},
});

export default styles;

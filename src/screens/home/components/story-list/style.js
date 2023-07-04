import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../../../constant/theme';

const styles = StyleSheet.create({
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
  storyListStyle: {
    backgroundColor: 'transparent',
    zIndex: 999,
    top: responsiveWidth(20),
  },
  storyListContainerStyle: {
    height: responsiveHeight('23%'),
    backgroundColor: 'transparent',
  },
});

export default styles;

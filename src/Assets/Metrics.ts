import {Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');
const statusbarHeight = StatusBar.currentHeight || 0;

const designWidth = 360;

const measure = (designSize: number): number =>
  designSize * (width / designWidth);

const measureInverse = (actualSize: number): number =>
  actualSize * (designWidth / width);

type ElevationFunction = (e: number) => number;

const DimensionsUtils = {
  measure,
  measureInverse,
  width,
  height,
  statusbarHeight,
  marginHorizontal: measure(15),
  headerHeight: measure(50),
  tabHeight: measure(60),
  isScreenRatioSmall: height / width < 1.75,
  elevation: ((e: number): number => {
    const version =
      typeof Platform.Version === 'number'
        ? Platform.Version
        : parseInt(Platform.Version, 10);
    return measure(version >= 28 ? e : e / 3);
  }) as ElevationFunction,
  headerMarginTop: Platform.OS === 'ios' ? 0 : statusbarHeight,
};

export default DimensionsUtils;

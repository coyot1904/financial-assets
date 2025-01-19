import {Platform} from 'react-native';
import DimensionsUtils from '../src/Assets/Metrics';

jest.mock('react-native', () => ({
  Dimensions: {
    get: jest.fn(() => ({width: 360, height: 640})),
  },
  Platform: {
    OS: 'android',
    Version: 30,
  },
  StatusBar: {
    currentHeight: 24,
  },
}));

describe('DimensionsUtils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calculates measure based on design size', () => {
    const result = DimensionsUtils.measure(180);
    expect(result).toBe(180);
  });

  it('calculates measureInverse based on actual size', () => {
    const result = DimensionsUtils.measureInverse(180);
    expect(result).toBe(180);
  });

  it('provides correct width and height', () => {
    expect(DimensionsUtils.width).toBe(360);
    expect(DimensionsUtils.height).toBe(640);
  });

  it('provides the correct statusbar height', () => {
    expect(DimensionsUtils.statusbarHeight).toBe(24);
  });

  it('calculates marginHorizontal correctly', () => {
    const result = DimensionsUtils.marginHorizontal;
    expect(result).toBe(15);
  });

  it('calculates headerHeight correctly', () => {
    const result = DimensionsUtils.headerHeight;
    expect(result).toBe(50);
  });

  it('calculates tabHeight correctly', () => {
    const result = DimensionsUtils.tabHeight;
    expect(result).toBe(60);
  });

  it('detects small screen ratios', () => {
    expect(DimensionsUtils.isScreenRatioSmall).toBe(false);
  });

  it('calculates elevation correctly for Android 28+', () => {
    const result = DimensionsUtils.elevation(6);
    expect(result).toBe(6);
  });

  it('calculates elevation correctly for Android below 28', () => {
    Platform.Version = 27;
    const result = DimensionsUtils.elevation(6);
    expect(result).toBe(2);
  });
});

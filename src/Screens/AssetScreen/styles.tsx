import {StyleSheet} from 'react-native';

import Metrics from '../../Assets/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151544',
    padding: Metrics.measure(15),
  },
  title: {
    fontSize: Metrics.measure(18),
    fontWeight: 'bold',
    marginBottom: Metrics.measure(20),
    color: '#FFF',
  },
  assetContainer: {
    padding: Metrics.measure(15),
  },
  assetDetail: {
    fontSize: Metrics.measure(14),
    marginBottom: Metrics.measure(10),
    color: '#DCDCDC',
  },
  label: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: Metrics.measure(14),
  },
});

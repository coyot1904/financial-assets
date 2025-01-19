import {StyleSheet} from 'react-native';

import Metrics from '../../Assets/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151544',
  },
  title: {
    color: '#fff',
    fontSize: Metrics.measure(20),
    fontWeight: 'bold',
    marginLeft: Metrics.measure(10),
    textAlign: 'left',
  },
  itemContainer: {
    padding: Metrics.measure(15),
    backgroundColor: 'rgba(255,255,255,0.05)',
    margin: Metrics.measure(10),
    borderRadius: Metrics.measure(5),
  },
  itemLabel: {
    color: '#fff',
    fontSize: Metrics.measure(14),
  },
  itemValue: {
    fontWeight: 'bold',
  },
  filterContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '80%',
  },
});

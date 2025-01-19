import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';

// Types
import {ModalComponentsProps, Filter} from '../Types/Modal';

// Metrics
import Metrics from '../Assets/Metrics';

// Filter configuration
const FILTERS: Filter[] = [
  {id: 1, label: 'Sort Perf Asc', action: 'handleSortAsc'},
  {id: 2, label: 'Sort Perf Desc', action: 'handleSortDesc'},
  {id: 3, label: 'Sort Name Asc', action: 'handleSortNameAsc'},
  {id: 4, label: 'Sort Name Desc', action: 'handleSortNameDesc'},
  {id: 5, label: 'Top Gainers', action: 'handleTopGainers'},
  {id: 6, label: 'Top Losers', action: 'handleTopLosers'},
  {id: 7, label: 'Sort By Stocks', action: 'handleSortStocks'},
  {id: 8, label: 'Sort By Crypto', action: 'handleSortCypto'},
];

// Filter Button Component
const FilterButton = memo(
  ({
    label,
    isActive,
    onPress,
  }: {
    label: string;
    isActive: boolean;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.filterBtnContainer} onPress={onPress}>
      <Text style={styles.filterBtnTitleText}>{label}</Text>
      <View
        style={[
          {backgroundColor: isActive ? 'green' : '#DCDCDC'},
          styles.filterBtnStatusText,
        ]}
      />
    </TouchableOpacity>
  ),
);

const ModalComponents: React.FC<ModalComponentsProps> = ({
  modalVisible,
  setModalVisible,
  onTouchFilters,
  currentActiveFilter,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.betweenContainer}>
            {FILTERS.map(({id, label, action}) => (
              <FilterButton
                key={id}
                label={label}
                isActive={currentActiveFilter === id}
                onPress={() => onTouchFilters(action)}
              />
            ))}
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeBtnContainer}>
            <Text style={styles.btnText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  betweenContainer: {
    width: '100%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    margin: Metrics.measure(20),
    width: Metrics.measure(330),
    backgroundColor: 'white',
    borderRadius: Metrics.measure(20),
    padding: Metrics.measure(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeBtnContainer: {
    width: Metrics.measure(300),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969',
    padding: Metrics.measure(15),
    borderRadius: Metrics.measure(7),
  },
  btnText: {
    fontSize: Metrics.measure(16),
    color: '#FFF',
    fontWeight: 'bold',
  },
  filterBtnContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: Metrics.measure(15),
  },
  filterBtnTitleText: {
    textAlign: 'left',
    width: '98%',
    fontSize: Metrics.measure(16),
    color: '#1E90FF',
  },
  filterBtnStatusText: {
    width: Metrics.measure(15),
    height: Metrics.measure(15),
    borderRadius: Metrics.measure(7),
  },
});

export default ModalComponents;

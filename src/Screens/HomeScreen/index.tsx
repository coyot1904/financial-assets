import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

import ModalComponents from '../../Components/ModalComponents';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Types/RootStackParamList';
import {filterHandlers} from '../../Assets/FilterAssets';

import initialAssets from '../../../assets/financial_assets.json';

type Asset = (typeof initialAssets)[number];
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const [assets, setAssets] = useState<Asset[]>(initialAssets);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentActiveFilter, setCurrentActiveFilter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssets(prevAssets =>
        prevAssets.map(asset => ({
          ...asset,
          currentPrice: parseFloat((Math.random() * 5000 + 10).toFixed(2)),
        })),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const onTouchFilters = (filterKey: string) => {
    const filterHandler = filterHandlers[filterKey];
    if (filterHandler) {
      filterHandler.handler(setAssets);
      setCurrentActiveFilter(filterHandler.activeFilter);
    } else {
      console.error(`Unknown filter type: ${filterKey}`);
    }
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sorting:</Text>
        </View>
        <Button title="Filters" onPress={() => setModalVisible(true)} />
      </View>
      <FlatList
        keyExtractor={asset => `${asset.id}`}
        data={assets}
        renderItem={({item: asset}) => (
          <TouchableOpacity
            key={asset.id}
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Asset', {asset})}>
            <Text style={styles.itemLabel}>
              {'Asset Name: '}
              <Text style={styles.itemValue}>{asset.name}</Text>
            </Text>
            <Text style={styles.itemLabel}>
              {'Asset Price: '}
              <Text style={styles.itemValue}>{asset.currentPrice}</Text>
            </Text>
            <Text style={styles.itemLabel}>
              {'DPC: '}
              <Text style={styles.itemValue}>{asset.dailyChangePercent}</Text>
            </Text>
          </TouchableOpacity>
        )}
      />
      <ModalComponents
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onTouchFilters={onTouchFilters}
        currentActiveFilter={currentActiveFilter}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

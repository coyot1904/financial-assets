import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../Types/RootStackParamList';
type AssetScreenProps = NativeStackScreenProps<RootStackParamList, 'Asset'>;

import styles from './styles';

import {Asset} from '../../Types/AssetScreen';

function AssetScreen({route}: AssetScreenProps) {
  const {asset} = route.params;

  const {currentPrice, dailyChangePercent, name, symbol, type} = asset as Asset;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.assetContainer}>
        <Text style={styles.title}>Asset Details</Text>
        <Text style={styles.assetDetail}>
          <Text style={styles.label}>Name: </Text>
          {name}
        </Text>
        <Text style={styles.assetDetail}>
          <Text style={styles.label}>Symbol: </Text>
          {symbol}
        </Text>
        <Text style={styles.assetDetail}>
          <Text style={styles.label}>Type: </Text>
          {type}
        </Text>
        <Text style={styles.assetDetail}>
          <Text style={styles.label}>Current Price: </Text>$
          {currentPrice.toFixed(2)}
        </Text>
        <Text style={styles.assetDetail}>
          <Text style={styles.label}>Daily Change: </Text>
          {dailyChangePercent}%
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default AssetScreen;

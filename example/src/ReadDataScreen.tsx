import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { getItem } from 'react-native-sync-storage-turbo-module';

export const ReadDataScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [turboResult, setTurboResult] = useState<number>(-1);
  const [legacyResult, setLegacyResult] = useState<number>(-1);

  useEffect(() => {
    getLegacyData();
    getTurboData();
  }, []);

  const getTurboData = () => {
    try {
      const start = new Date().getTime();
      const result = getItem('@turbo_Key');
      const now = new Date().getTime();
      console.log('getTurboData', now - start, result);
      setTurboResult(now - start);
    } catch (e) {
      // error reading value
    }
  };

  const getLegacyData = async () => {
    try {
      const start = new Date().getTime();
      const result = await AsyncStorage.getItem('@storage_Key');
      const now = new Date().getTime();
      console.log('getLegacyData', now - start, result);
      setLegacyResult(now - start);
    } catch (e) {
      // error reading value
    }
  };

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {legacyResult !== -1 ? (
        <Text>Legacy Result in {legacyResult} ms</Text>
      ) : (
        <ActivityIndicator />
      )}

      {turboResult !== -1 ? (
        <Text>Turbo Result in {turboResult} ms</Text>
      ) : (
        <ActivityIndicator />
      )}
      <TouchableOpacity style={styles.back} onPress={onPress}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    margin: 24,
  },
});

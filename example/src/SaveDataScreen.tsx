import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { setItem, removeItem } from 'react-native-sync-storage-turbo-module';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const SaveDataScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [text, onChangeText] = React.useState('');
  const onPressSave = async () => {
    if (!text) {
      return;
    }
    await AsyncStorage.setItem('@storage_Key', text);
    setItem('@turbo_Key', text);
    onChangeText('');
    navigation.navigate('ReadDataScreen');
  };

  const onPressRemove = async () => {
    removeItem('@turbo_Key');
    await AsyncStorage.removeItem('@storage_Key');
    Alert.alert('Done');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity onPress={onPressSave} style={styles.saveBtn}>
        <Text style={styles.saveTxt}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressRemove} style={styles.saveBtn}>
        <Text style={styles.saveTxt}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  saveBtn: {
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 8,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveTxt: {
    color: 'white',
    textAlign: 'center',
  },
});

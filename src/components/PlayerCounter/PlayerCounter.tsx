import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import { IPlayerCounter } from '../../interfaces';
import { saveData } from '../../utils/asyncStorage';

import styles from './PlayerCounter.styles';

const PlayerCounter: React.FC<IPlayerCounter> = ({ name, value, setPlayerCount }) => {
  const onIncrease = () => {
    setPlayerCount(value + 1);
    saveData(name, (value + 1).toString());
  };

  const onDecrease = () => {
    if (value < 1) { return; }

    setPlayerCount(value - 1);
    saveData(name, (value - 1).toString());
  };

  return (
    <View style={styles.PlayerCounterWrapper}>
      <View style={styles.field}>
        <TouchableOpacity style={styles.fieldButton} onPress={onDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.fieldCounter}>
          <Text style={styles.counterText}>{value}</Text>
        </View>
        <TouchableOpacity style={styles.fieldButton} onPress={onIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerCounter;

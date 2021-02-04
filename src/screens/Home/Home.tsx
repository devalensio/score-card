import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import PlayerCounter from '../../components/PlayerCounter';

import { colors } from '../../styles/colors';
import { getData } from '../../utils/asyncStorage';

import styles from './Home.styles';

const PLAYER_ONE_KEY = '@player_one';
const PLAYER_TWO_KEY = '@player_two';

const Home = () => {
  const [score, setScore] = useState<number>(0);
  const [playerOneCount, setPlayerOneCount] = useState<number>(0);
  const [secondPlayerCount, setPlayerTwoCount] = useState<number>(0);

  useEffect(() => {
    setScore(playerOneCount + secondPlayerCount);
  }, [playerOneCount, secondPlayerCount]);

  useEffect(() => {
    const fetchStorage = async () => {
      const playerOneStorage = await getData(PLAYER_ONE_KEY, 0);
      const playerTwoStorage = await getData(PLAYER_TWO_KEY, 0);

      setPlayerOneCount(Number(playerOneStorage));
      setPlayerTwoCount(Number(playerTwoStorage));
    };

    fetchStorage();
  }, []);

  return (
    <View style={styles.homeWrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Total Score</Text>
        <Text style={styles.headerValue}>{score}</Text>
      </View>
      <View style={{ ...styles.main, backgroundColor: colors.skyBlue }}>
        <Text style={styles.mainTitle}>Player 1</Text>
        <PlayerCounter name={PLAYER_ONE_KEY} value={playerOneCount} setPlayerCount={setPlayerOneCount} />
      </View>
      <View style={{ ...styles.main, backgroundColor: colors.steelBlue }}>
        <Text style={styles.mainTitle}>Player 2</Text>
        <PlayerCounter name={PLAYER_TWO_KEY} value={secondPlayerCount} setPlayerCount={setPlayerTwoCount} />
      </View>
    </View>
  );
};

export default Home;

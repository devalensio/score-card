import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  homeWrapper: { flex: 1 },
  header: {
    flex: 1,
    backgroundColor: colors.powderBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  headerValue: {
    fontSize: 40,
    fontWeight: '700',
  },
  main: {
    flex: 2,
    padding: 16,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    color: colors.black,
    fontWeight: '500',
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  PlayerCounterWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  field: {
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
  },
  fieldButton: {
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: '700',
  },
  fieldCounter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
  },
  counterText: {
    fontSize: 32,
    fontWeight: '700',
  }
});

export default styles;

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';

import PlayerCounter from './PlayerCounter';
import * as asyncStorage from '../../utils/asyncStorage';

import { IPlayerCounter } from '../../interfaces';

const props: IPlayerCounter = {
  name: '@player_test',
  value: 3,
  setPlayerCount: (_) => {},
};

describe('Home Screen', () => {
  let saveData: jest.SpyInstance;

  beforeEach(() => {
    saveData = jest.spyOn(asyncStorage, 'saveData').mockResolvedValueOnce();
  });

  afterEach(() => {
    saveData.mockRestore();
  });

  it('renders correctly', () => {
    renderer.create(<PlayerCounter {...props} />);
  });

  it('should call save data with specific parameters when minus button is clicked', async () => {
    const component = renderer.create(<PlayerCounter {...props} />);

    const button = component.root.findAllByType(TouchableOpacity);

    const buttonMinus: any = button.length && button[0];

    buttonMinus.props.onPress();

    expect(saveData).toBeCalledWith('@player_test', '2');
  });

  it('should not call save data with specific parameters whenvalue is lower than 1', async () => {
    const customProps = {
      ...props,
      value: 0,
    };

    const component = renderer.create(<PlayerCounter {...customProps} />);

    const button = component.root.findAllByType(TouchableOpacity);

    const buttonMinus: any = button.length && button[0];

    buttonMinus.props.onPress();

    expect(saveData).toBeCalledTimes(0);
  });

  it('should call save data with specific parameters when plus button is clicked', async () => {
    const component = renderer.create(<PlayerCounter {...props} />);

    const button = component.root.findAllByType(TouchableOpacity);

    const buttonPlus: any = (button.length && button[1]) && button[1];

    buttonPlus.props.onPress();

    expect(saveData).toBeCalledWith('@player_test', '4');
  });
});

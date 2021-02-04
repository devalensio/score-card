import 'react-native';
import React from 'react';

import Home from './Home';
import * as asyncStorage from '../../utils/asyncStorage';

import renderer from 'react-test-renderer';

describe('Home Screen', () => {
  let getPlayerOne: jest.SpyInstance;
  let getPlayerTwo: jest.SpyInstance;

  beforeEach(() => {
    getPlayerOne = jest.spyOn(asyncStorage, 'getData').mockResolvedValueOnce(20);
    getPlayerTwo = jest.spyOn(asyncStorage, 'getData').mockResolvedValueOnce(20);
  });

  afterEach(() => {
    getPlayerOne.mockRestore();
    getPlayerTwo.mockRestore();
  });

  it('renders correctly', async () => {
    await renderer.act(async () => { renderer.create(<Home />); });
  });

  it('calls asyncStorage getData with specific params when page is mounted', async () => {
    await renderer.act(async () => { renderer.create(<Home />); });

    expect(getPlayerOne).toBeCalledWith('@player_one', 0);
    expect(getPlayerTwo).toBeCalledWith('@player_two', 0);
  });
});

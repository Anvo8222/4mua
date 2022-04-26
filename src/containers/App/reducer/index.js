/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import produce from 'immer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_TURN, INCREMENT_TURN, DECREMENT_TURN } from '../constants';

export const initialState = {
  turn: 5,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_TURN:
        AsyncStorage.setItem('@turn', JSON.stringify(action.turn));
        draft.turn = action.turn;
        break;
      case INCREMENT_TURN:
        draft.turn += Number(action.amount);
        break;

      case DECREMENT_TURN:
        draft.turn -= Number(action.amount);
        break;
    }
  });

import * as actionTypes from '../actionTypes/dash';

const initialState = {
  data: {
    emailCode: '',
    userId: '',
    promptId
  },
  view: {
    showPrompt: null
  }
};

// when app initializes
// grab email code for user from URI
// and set initialState
const queryAllDisplays = () => {
  return initialState;
};

const selectDisplay = (state, action) => {
  let newState = Object.assign({}, state);

  newState.currentDisplay = {
    name: action.currentDisplay,
    status: newState.displaysObject[action.currentDisplay].status
  };
  return newState;
};

const sendCommand = (state, action) => {
  let newState = Object.assign({}, state);

  newState.displaysObject[action.result.display] = {
    status: action.result.command
  };
  newState.currentDisplay = {
    name: action.result.display,
    status: action.result.command
  };
  return newState;
};

export default function displays (state = initialState, action) {
  return ({
    [actionTypes.SELECT_DISPLAY]: selectDisplay,
    [actionTypes.SEND_COMMAND_SUCCESS]: sendCommand
  }[action.type] || ((s) => s))(state, action);
}

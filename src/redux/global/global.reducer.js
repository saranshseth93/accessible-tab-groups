const INITIAL_STATE = {
  ariaHidden: "true",
};

const globalReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_ACTIVE_TAB":
      return {
        ...currentState,
        ariaHidden: action.payload,
      };
    default:
      return currentState;
  }
};

export default globalReducer;

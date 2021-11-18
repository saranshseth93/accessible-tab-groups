//Add the redux method to update the active tab
export const updateActiveTab = (ariaHidden) => ({
  type: "UPDATE_ACTIVE_TAB",
  payload: {
    ariaHidden: ariaHidden,
  },
});

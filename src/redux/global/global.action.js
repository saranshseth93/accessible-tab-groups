export const updateActiveTab = (ariaHidden) => ({
  type: "UPDATE_ACTIVE_TAB",
  payload: {
    ariaHidden: ariaHidden,
  },
});

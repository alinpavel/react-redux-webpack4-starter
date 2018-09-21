import { createSelector } from 'reselect';

const selectValue = (state) => {
  return state.home;
}

const makeChangeValue = () => createSelector(
  selectValue,
  (currentState) => currentState.value
);

export {
  selectValue,
  makeChangeValue,
};

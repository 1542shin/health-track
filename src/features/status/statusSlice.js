import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  height: 67,
  BMI: 0,
  goalWeight: 160,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    editHeight: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return (state.height = action.payload);
    },
    editWeight: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return (state.Weight = action.payload);
    },
    editBMI: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return (state.BMI = action.payload);
    },
    editGoalWeight: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return (state.goalWeight = action.payload);
    },
    editStatus: (state, action) => {
      return (state = {
        height: action.payload.height,
        BMI: action.payload.BMI,
        goalWeight: action.payload.goalWeight,
      });
    },
  },
});
export const { editHeight, editWeight, editBMI, editGoalWeight, editStatus } =
  statusSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStatus = (state) => state.status;

export default statusSlice.reducer;

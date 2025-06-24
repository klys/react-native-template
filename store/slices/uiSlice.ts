import { createSlice } from '@reduxjs/toolkit';

type UIState = {
  collapsed: boolean;
};

const initialState: UIState = {
  collapsed: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCollapse: (state) => {
      state.collapsed = !state.collapsed;
    },
    setCollapse: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { toggleCollapse, setCollapse } = uiSlice.actions;
export default uiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const queriedVideosSlice = createSlice({
  name: "queriedVideos",
  initialState: [],
  reducers: {
    setQueriedVideos: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQueriedVideos } = queriedVideosSlice.actions;
export default queriedVideosSlice.reducer;

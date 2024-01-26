import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import queriedVideosSlice from "./queriedVideosSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    queriedVideos: queriedVideosSlice,
  },
});

export default store;

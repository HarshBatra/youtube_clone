import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import queriedVideosSlice from "./queriedVideosSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    queriedVideos: queriedVideosSlice,
    chat: chatSlice,
  },
});

export default store;

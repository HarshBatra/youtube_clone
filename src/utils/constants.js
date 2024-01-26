const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics";

export const VIDEO_COMMENT_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
  REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

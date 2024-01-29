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
  "https://youtube-clone-api-two.vercel.app/search";

export const YT_SEARCH_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  REACT_APP_GOOGLE_API_KEY +
  "&q=";

import axios from "axios";

// replace the string with your google api key
const KEY = "REPLACE_WITH_YOUR_GOOGLE_API_KEY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

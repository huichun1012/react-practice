import axios from "axios";

export default axios.create({
  baseURL: "https://zh.wikipedia.org/w/api.php",
  params: {
    action: "query",
    list: "search",
    format: "json",
    utf8: true,
    origin: "*",
  },
});

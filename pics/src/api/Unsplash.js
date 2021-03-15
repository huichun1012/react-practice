import axios from "axios";

// 創造初始化的axios client
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Hrqa1E0HZvXDOMeIaRmvhu3sFgr7WYmOdfInQ7H0s84",
  },
});

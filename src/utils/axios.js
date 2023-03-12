import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://video-gallery-server.vercel.app',
  });

  export default axiosInstance
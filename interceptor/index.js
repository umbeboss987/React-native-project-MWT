import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

const axiosInstance = axios.create({
  baseURL: `https://api.spotify.com/v1/`,
  headers: {
    "Content-Type": "application/json",
    "Accept" :"application/json",
  },
});

axiosInstance.interceptors.request.use(async (req) => {
  const access_token = await AsyncStorage.getItem("@access_token");
  req.headers.Authorization = `Bearer ${access_token}`;
  return req;
});

export default axiosInstance;
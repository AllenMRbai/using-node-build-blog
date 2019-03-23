import axios from "axios";

let axiosInstance = axios.create({});

let get = axiosInstance.get;

let post = axiosInstance.post;

export { axiosInstance as default, get, post };

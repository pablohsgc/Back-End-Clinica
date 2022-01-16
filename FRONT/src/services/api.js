import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",  //endpoint de sua aplicação
});

export default api;
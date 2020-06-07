import axios from "axios";

const api_ibge = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/",
});

export default api_ibge;
import axios from "axios";

// Declarar a porta da API
const portaApi = "4466"

// Declarar o IP da máquina
const ip = "192.168.19.122"

// Definir a URL padrão da API
const apiUrlLocal = `http://${ip}:${portaApi}/api`

// Trazer a configuração pro Axios
const api = axios.create({
    baseURL : apiUrlLocal
})

export default api;
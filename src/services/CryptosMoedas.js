import { http } from "../hooks/axios";

export const CryptoMoedas = {

    getAllCryptos: async (param) => {
        try {
            const response = await http.get(`/crypto/?page=${param}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message); 
        }
    },

    // Função para pegar uma cripto por ID
    getCryptoById: async (id) => {
        try {
            const response = await http.get(`/crypto/${id}`);
            return response.data; 
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message); 
        }
    }
};

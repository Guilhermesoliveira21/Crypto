import axios from "axios";
import { http } from "./axios";

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};

export const formatPerventage = (value) => {
  return (value * 100).toFixed(2) + '%';
}


import { useEffect, useState } from "react";


export const useDolarToReal = () => {

  const [dolar, setDolar] = useState();

  useEffect(() => {

    async function fetchCrypto() {
      
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');

        setDolar(response.data.rates.BRL);

      } catch (erro) {
        // setErro(erro.message)
      }
    }

    fetchCrypto()

  }, [])

  return { dolar };

}
import { useEffect, useState } from "react";
import { CryptoMoedas } from "../services/CryptosMoedas";
import { http } from "./axios";

export const useCrypto = (page) => {

    const [ cryptos, setCryptos ] = useState([]);
    const [ erro, setErro ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [pages, setPages] = useState();


  useEffect(() => {

    async function fetchCrypto() {
      setLoading(true)
        try{
            const responsePage = await http.get(`/crypto/?page=${page}/crypto`);

            setCryptos(responsePage.data);
            setPages(responsePage);

            setLoading(false)
        }catch(erro) {
            setErro(erro.message)
        }
    }

    fetchCrypto()

  }, [page])

    return {cryptos, erro, loading, pages};

}


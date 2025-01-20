import { useEffect, useState } from "react";
import { http } from "./axios";

export const useCryptoUnique = (props) => {

    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        async function fetchCrypto() {
            setLoading(true);
            try {
                const response = await http.get(`/crypto/${props}/crypto`);

                // console.log(response)

                setCryptoData(response);

                setLoading(false);
            } catch (error) {
                setError(error);
            }

        }

    fetchCrypto();
    },[props]);
    return { cryptoData, loading, error };

}
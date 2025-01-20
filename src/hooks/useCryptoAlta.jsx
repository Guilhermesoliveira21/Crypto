import { useEffect, useState } from "react";
import { http } from "./axios";

export const useCryptoAlta = () => {
    
    const [moeda, setMoeda] = useState([]);
    const [loadingMoeda, setLoadingMoeda] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchMoeda() {

            setLoadingMoeda(true);

            try {
                
                const response = await http.get('/crypto/low');

                setMoeda(response.data);
                setLoadingMoeda(false);
            } catch (error) {
                setError(error);
            }

        }
        fetchMoeda()
        
    }, []);
    
    return {moeda, loadingMoeda, error};

}
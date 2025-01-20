import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ScaleLoader } from "react-spinners";
import { Loading } from "../pages/Home/styles";
import { useCryptoUnique } from "../../../hooks/useCryptoUnique";
import { useParams } from "react-router-dom";
import { useDolarToReal } from "../../../hooks/useCovertMoney";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const GraphDetail = () => {

    const { symbol } = useParams();

    const cryptoMoeda = symbol.split('-');
    
    const { cryptoData } = useCryptoUnique(cryptoMoeda[0]);

    const datas = cryptoData.data;


    const { dolar } = useDolarToReal();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get("https://api.binance.com/api/v3/klines", {
                    params: {
                        symbol: `${datas.symbol}USDT`, 
                        interval: "1h",    
                        limit: 100,      
                    }
                });

                const prices = response.data;
                if (!prices || prices.length === 0) {
                    return;
                }

                const labels = prices.map(item => new Date(item[0]).toLocaleTimeString());
                const dataPoints = prices.map(item => parseFloat(item[4] * dolar));

                setData({
                    labels,
                    datasets: [
                        {
                            label: 'Preço do ' + datas.name + ' (' + datas.symbol + ')',
                            data: dataPoints,
                            borderColor: '#0182F9',
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            fill: true,
                        },
                    ],
                });
            } catch (error) {

            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, [datas]);

    return (
        <div>
            {loading ? <Loading>

                <ScaleLoader color="#5367FF" />
                <p>Carrgando...</p>
            </Loading> : data ?
                <>
                    <h2>Preço do {datas.name} ({datas.symbol}) nos últimos 100 horários</h2>
                    <Line data={data} />
                </>
                : <p>Sem dados disponíveis</p>}
        </div>
    );
};

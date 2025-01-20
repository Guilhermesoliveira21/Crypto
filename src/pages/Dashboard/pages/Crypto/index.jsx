import { useParams } from "react-router-dom"
import { DashboardHome } from "../Home";
import { SectionCard } from "../../components/SectionCard";
import { ContainerDetail, Formulario } from "./styles";
import { useCryptoUnique } from "../../../../hooks/useCryptoUnique";
import { DetailDashboard } from "../../components/DetailDashboard";
import { GraphDetail } from "../../components/GraphDetail";
import { InputDashboard } from "../../components/InputDashboard";
import { Button } from "../../components/Button";
import { http } from "../../../../hooks/axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";


export const CryptoPage = () => {

    const { symbol, crypto } = useParams();
    const { cryptoData, loading, error } = useCryptoUnique(symbol);
    const [amount, setAmount] = useState('');

    const login = JSON.parse(localStorage.getItem('userLogin'));

    async function buyCrypto(event) {
        event.preventDefault();
        try {
           if(amount) {
            const {data} = await http.post(
                `/crypto/${symbol.toLocaleUpperCase()}/buy`,
                { amount: Number(amount) },
                {
                    headers: {
                        Authorization: `Bearer ${login.user.token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setAmount('');
            toast.success(data.message) 
           }else {
            toast.error('O campo valor não pode ser vazio!');
           }
    } catch (error) {
        console.error("Erro ao tentar comprar criptomoeda:", error);

        if (error.response) {
            console.error("Detalhes do erro:", error.response.data);
        }
    }
    }

    return (
        <>

            <ContainerDetail>
                <div>
                    <SectionCard>
                        <DetailDashboard data={cryptoData.data} loading={loading} />
                    </SectionCard>
                    <SectionCard>
                        <GraphDetail/>
                    </SectionCard>
                </div>

                <SectionCard width='30%'>
                    <Formulario >
                        <h3>Compre frações da crypto</h3>
                        <div>   
                            <InputDashboard 
                                width='100%' 
                                placeholder='Valor'
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                                />
                            <button
                            button={true}
                            onClick={buyCrypto}
                            >
                                Comprar
                            </button>
                        </div>

                    </Formulario>
                </SectionCard>

            </ContainerDetail>
                <ToastContainer />


        </>
    )

}
import { useEffect, useState } from "react";
import { SectionCard } from "../../components/SectionCard";
import { useParams } from "react-router-dom";
import { http } from "../../../../hooks/axios";
import { formatCurrency } from "../../../../hooks/useCovertMoney";
import { ContainerGToMy, ContainerHeader, LinkVoltar, MyCriptos } from "./styles";
import { GraphDetail } from "../../components/GraphDetail";
import { Button } from "../../components/Button";

export const MyCrypt = () => {
    const [criptos, setCryptos] = useState([]);
    const [cryptoTime, setCryptoTime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [myCrypto, setMyCrypto] = useState([]);

    const { symbol } = useParams();

    async function fetchCrypto() {
        setLoading(true);
        try {
            const token = localStorage.getItem("userLogin");
            if (!token) {
                console.error("Usuário não está logado");
                return;
            }
            const bearer = JSON.parse(token);

            const { data } = await http.get(`/investment/${symbol}`, {
                headers: {
                    Authorization: `BEARER ${bearer.user.token}`,
                },
            });

            setCryptos(data.actionUnique);
            setCryptoTime(data.actionSearch);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    async function myCryptos() {
        setLoading(true);
        try {
            const token = localStorage.getItem("userLogin");
            if (!token) {
                console.error("Usuário não está logado");
                return;
            }
            const bearer = JSON.parse(token);

            const { data } = await http.get("/investment", {
                headers: {
                    Authorization: `BEARER ${bearer.user.token}`,
                    "Content-Type": "application/json",
                },
            });

            setMyCrypto(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCrypto();
    }, [symbol]);

    useEffect(() => {
        myCryptos();
    }, []);



    return (
        <>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <>
                    <SectionCard>
                        <ContainerHeader>
                            <div>
                                <p>Cryptomoeda:</p>
                                <h1>{criptos.length > 0 ? criptos[0].action : "Sem dados"}</h1>
                            </div>
                            <div>
                                <p>Valor investido:</p>
                                <h1>{criptos.length > 0 ? formatCurrency(criptos[0].amount) : "R$ 0,00"}</h1>
                            </div>
                        </ContainerHeader>
                    </SectionCard>
                    <br />
                    <ContainerGToMy>
                        <SectionCard>
                            <GraphDetail />
                        </SectionCard>
                        <SectionCard width="30%">
                            <h3>Minhas Cryptos</h3>
                            <div>
                                {myCrypto.investment.length > 0 ? (
                                    myCrypto.investment.map((cry) => (
                                        <MyCriptos>
                                            <p>{cry.action}</p>
                                            <Button
                                                to={`/dashboard/my-crypto/${cry.symbol}`}
                                                button={false}

                                            >Ver mais</Button>
                                        </MyCriptos>
                                    ))
                                ) : (
                                    <p>Você não possui criptomoedas.</p>
                                )}
                            </div>

                            <LinkVoltar>
                                <Button to='/dashboard/my-cryptos'>Voltar</Button>
                            </LinkVoltar>

                        </SectionCard>
                    </ContainerGToMy>
                </>
            )}
        </>
    );
};

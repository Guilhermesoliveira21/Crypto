import { ScaleLoader } from "react-spinners";
import { SectionCard } from "../../components/SectionCard";
import { 
  ContainerHeaderPrincipal, 
  ContainerHeaderSubTitle, 
  ContainerTable, 
  ContainerTableHeader, 
  CryptoNameLogo, 
  Loading 
} from "../Home/styles";
import { ContainerHeader } from "./styles";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { http } from "../../../../hooks/axios";
import { formatCurrency, useDolarToReal } from "../../../../hooks/useCovertMoney";
import { useCalcularCrypto } from "../../../../hooks/useCalculaCrypto";

export const MyCrypto = () => {
  const [criptos, setCryptos] = useState({ investment: [] });
  const [loading, setLoading] = useState(true);
  const [amountTotal, setAmountTotal] = useState(0);

  const { dolar } = useDolarToReal();

  async function fetchMyCryptos() {
    setLoading(true);
    try {
      const token = localStorage.getItem("userLogin");
      const bearer = JSON.parse(token);

      const { data } = await http.get("/investment", {
        headers: {
          Authorization: `BEARER ${bearer.user.token}`,
          "Content-Type": "application/json",
        },
      });

      const totalInvestments = data.investment.reduce((total, inv) => {
        return total + inv.amount;
      }, 0);

      setCryptos(data);
      setAmountTotal(totalInvestments);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMyCryptos();
  }, []);

  return (
    <>
      <SectionCard>
        <ContainerHeader>
          <div>
            <h2>Minha carteira</h2>
            <p>Última compra</p>
          </div>
          <div>
            {loading ? (
              <ScaleLoader color="#36D7B7" />
            ) : (
              <h2>{formatCurrency(amountTotal)}</h2>
            )}
          </div>
        </ContainerHeader>
      </SectionCard>
      <br />
      <SectionCard>
        <h3>Minhas cryptos</h3>

        <ContainerHeaderPrincipal>
          <ContainerHeaderSubTitle>
            <h2>Mercado De Moedas</h2>
            <p>Mercado global de compra e venda de moedas.</p>
          </ContainerHeaderSubTitle>
        </ContainerHeaderPrincipal>

        {loading ? (
          <ScaleLoader color="#36D7B7" />
        ) : (
          <ContainerTable>
            <ContainerTableHeader>
              <tr>
                <th>#</th>
                <th>Nome da Moeda</th>
                <th>Frações de Cryptos</th>
                <th>Valor investido</th>
                <th>Visualizar</th>
              </tr>
            </ContainerTableHeader>
            <tbody>
              {criptos.investment.map((inv) => {
                const { fracao, valorTotal } = useCalcularCrypto(
                  inv.amount,
                  inv.price * dolar,
                  inv.price * dolar
                );

                return (
                  <tr key={inv.id}>
                    <td>{inv.id}</td>
                    <td>
                      <CryptoNameLogo>
                        <p>{inv.action}</p>
                        <span>{inv.symbol ? inv.symbol.split("-")[0] : "N/A"}</span>
                      </CryptoNameLogo>
                    </td>
                    <td>{fracao}</td>
                    <td>{formatCurrency(inv.amount)}</td>
                    <td>
                      <Button
                        to={`/dashboard/my-crypto/${inv.symbol}`}
                        button={false}
                      >
                        Ver mais
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </ContainerTable>
        )}
      </SectionCard>
    </>
  );
};

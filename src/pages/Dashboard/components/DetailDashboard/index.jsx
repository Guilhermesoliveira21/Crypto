import { TbCircuitResistor, TbClockHour3 } from "react-icons/tb";
import { formatCurrency, useDolarToReal } from "../../../../hooks/useCovertMoney"
import { ConatinerDetailHeaderLogo, ConatinerDetailHeaderPrice, ContainerAltaBaixa, ContainerBarra, ContainerDashboard, ContainerDashboardCard, ContainerDetail } from "./styles";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Loading } from "../../pages/Home/styles";
import { ScaleLoader } from "react-spinners";

export const DetailDashboard = ({ data, loading }) => {

    const { dolar } = useDolarToReal();

    return (
        <>
            {loading ?

                <>
                    <Loading>
                        <ScaleLoader color="#5367FF" />
                        <p>Carrgando...</p>
                    </Loading>

                </> :
                <>

                    <h3>situação do mercado</h3>

                    <ContainerDetail>
                        <ConatinerDetailHeaderLogo>
                            <img src={data.logo} alt="" />
                            <h3>{data.name.split(' ')[0]} <span>{data.symbol}</span></h3>
                        </ConatinerDetailHeaderLogo>
                        <ConatinerDetailHeaderPrice>
                            <h2>{formatCurrency(data.currentPrice * dolar)}</h2>
                            <p>Preço do {data.name.split(' ')[0]} (R$)</p>
                        </ConatinerDetailHeaderPrice>
                    </ContainerDetail>
                    <ContainerAltaBaixa>
                        <p>Alta / Baixa do Preço</p>
                        <span>Últimas 24hrs</span>
                    </ContainerAltaBaixa>

                    <ContainerBarra></ContainerBarra>

                    <ContainerAltaBaixa>
                        <p>Baixa: {formatCurrency(data.lowToday * dolar - data.currentPrice * dolar)}</p>
                        <p>Alta: {formatCurrency(data.highToday * dolar - data.currentPrice * dolar)}</p>
                    </ContainerAltaBaixa>

                    <ContainerDashboard>
                        <ContainerDashboardCard>
                            <h4><TbClockHour3 size={20} color="#5367FF" />
                                Últimas 24 Horas</h4>
                            <p>{data.changePercent}</p>
                        </ContainerDashboardCard>
                        <ContainerDashboardCard>
                            <h4><TbClockHour3 size={20} color="#5367FF" />Volume em 24 Horas</h4>
                            <p>{formatCurrency(data.volume24h)}</p>
                        </ContainerDashboardCard>
                        <ContainerDashboardCard>
                            <h4><TbCircuitResistor size={20} color="#5367FF" />
                                circulação no mercado</h4>
                            <p>{formatCurrency(data.circulation)}</p>
                        </ContainerDashboardCard>
                        <ContainerDashboardCard>
                            <h4><IoMdInformationCircleOutline size={20} color="#5367FF" />
                                Últimas 12 meses</h4>
                            <p>{formatCurrency(data.fiftyTwoWeekLow)}</p>
                        </ContainerDashboardCard>
                    </ContainerDashboard>

                </>
            }

        </>
    )

}
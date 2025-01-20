import { FaSearch } from "react-icons/fa"
import { SectionCard } from "../../components/SectionCard"
import { ButtonPages, ContainerAsideLateral, ContainerAsideLateralHeader, ContainerAsideList, ContainerButtonPages, ContainerContentAside, ContainerDashboard, ContainerFooterPages, ContainerHeaderPrincipal, ContainerHeaderSubTitle, ContainerTable, ContainerTableHeader, CryptoNameLogo, Loading } from "./styles"
import { InputDashboard } from "../../components/InputDashboard"
import { useCrypto } from "../../../../hooks/useCrypto"
import { Link } from "react-router-dom"
import { ScaleLoader } from "react-spinners"
import { useState } from "react"
import { formatCurrency, formatPerventage, useDolarToReal } from "../../../../hooks/useCovertMoney"
import { Button } from "../../components/Button"
import { useCryptoAlta } from "../../../../hooks/useCryptoAlta"

export const DashboardHome = () => {

    const [pg, setPg] = useState(1);
    const [filterAside, setFilterAside] = useState(true);

    const { dolar } = useDolarToReal();
    const { cryptos, loading, pages } = useCrypto(pg);
    const { moeda, loadingMoeda } = useCryptoAlta();

    function mudaPage(e) {
        setPg(parseInt(e.target.value))
    }

    function toggleAside(event) {

        if (event.target.value === 'true') {
            setFilterAside(true);
        } else {
            setFilterAside(false)
        }

    }


    return (
        <>

            <ContainerDashboard>
                <SectionCard >
                    <ContainerHeaderPrincipal>
                        <ContainerHeaderSubTitle>
                            <h2>Mercado De Moedas</h2>
                            <p>Mercado global de compra e venda de moedas.</p>
                        </ContainerHeaderSubTitle>

                        <InputDashboard
                            placeholder='Pesquisar Moeda'
                            name='search'
                            type='text'
                            icon={<FaSearch />}
                        />
                    </ContainerHeaderPrincipal>

                    {loading ? (
                        <Loading>
                            <ScaleLoader color="#5367FF" />
                            <p>Carrgando...</p>
                        </Loading>
                    ) : (
                        <ContainerTable>
                            <ContainerTableHeader>
                                <tr >
                                    <th>#</th>
                                    <th>Nome da Moeda</th>
                                    <th>Preço</th>
                                    <th>24 horas</th>

                                    <th>Visualizar</th>
                                </tr>
                            </ContainerTableHeader>
                            <tbody>
                                {cryptos.data.map((c, index) => {
                                    return (
                                        <tr key={index} >

                                            <td>{index + 1}</td>
                                            <td>
                                                <CryptoNameLogo>
                                                    <img src={c.logoUrl} alt="" />
                                                    {c.shortName.split(' ')[0]} <span>{c.fromCurrency}    </span>
                                                </CryptoNameLogo>
                                            </td>
                                            <td>{formatCurrency(c.regularMarketPrice * dolar)}</td>
                                            <td>{formatPerventage(c.regularMarketChangePercent)}</td>
                                            <td>
                                                <Button
                                                    button={false}
                                                    to={`/dashboard/crypto/${c.fromCurrency.toLowerCase()}/${c.shortName.split(' ')[0].toLowerCase()}`}
                                                >Ver mais</Button>
                                            </td>

                                        </tr>
                                    )
                                })}

                            </tbody>
                        </ContainerTable>

                    )}


                    <ContainerFooterPages>
                        {loading ? '' : <div>
                            Cryptos encontradas: {pages.data.total}
                        </div>}
                        <ContainerButtonPages>

                            <ButtonPages onClick={mudaPage} value='1'>1</ButtonPages>
                            <ButtonPages onClick={mudaPage} value='2'>2</ButtonPages>
                            <ButtonPages onClick={mudaPage} value='3'>3</ButtonPages>
                            <ButtonPages onClick={mudaPage} value='4'>4</ButtonPages>
                            <ButtonPages onClick={mudaPage} value='5'>5</ButtonPages>
                            <ButtonPages onClick={mudaPage} value='6'>6</ButtonPages>


                        </ContainerButtonPages>
                    </ContainerFooterPages>



                </SectionCard>

                <SectionCard width='40%'>
                    <ContainerAsideLateral>
                        <ContainerAsideLateralHeader>
                            <Button onClick={toggleAside} button={true} value={true}>Moedas em alta</Button>
                            <Button onClick={toggleAside} button={true} value={false}>Minha Lista</Button>
                        </ContainerAsideLateralHeader>

                        <ContainerContentAside>

                            {filterAside ?

                                <>
                                    {loadingMoeda ? (

                                        <Loading>
                                            <ScaleLoader color="#5367FF" />
                                            <p>Carrgando...</p>
                                        </Loading>

                                    ) : (
                                        <ContainerTable>
                                            <ContainerTableHeader>
                                                <tr >
                                                    <th>#</th>
                                                    <th>Nome da Moeda</th>
                                                    <th>Preço</th>
                                                </tr>
                                            </ContainerTableHeader>
                                            <tbody>

                                                {moeda.data.map((c, index) => {
                                                    return (
                                                        <tr key={index} >

                                                            <td>{index + 1}</td>
                                                            <td>
                                                                <CryptoNameLogo>
                                                                    <img src={c.logo} alt="" />
                                                                    {c.name.split(' ')[0]} <span>{c.symbol.split('-')[0]}</span>
                                                                </CryptoNameLogo>
                                                            </td>
                                                            <td>{formatCurrency(c.currentPrice * dolar)}</td>


                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </ContainerTable>

                                    )}
                                </>

                                : <>
                                
                                    <ContainerAsideList>
                                        <p>Lista Vazia</p>
                                    </ContainerAsideList>

                                </>}




                        </ContainerContentAside>

                    </ContainerAsideLateral>
                </SectionCard>

            </ContainerDashboard>

        </>
    )
}
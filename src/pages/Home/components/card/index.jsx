import { CardBody, ContainerCard, CardHeader, CardPriceBody } from "./styles"
import { GrBitcoin } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiBinance, SiEthereum } from "react-icons/si";
import { TbCurrencyXrp } from "react-icons/tb";

export const Card = () => {

    return (
        <ContainerCard>
            <CardBody>
                <CardHeader>
                    <GrBitcoin color="#F7931B" size={46} />
                    <h3>Biticoin</h3>
                    <span>BTC</span>
                </CardHeader>
                <CardPriceBody>
                    <p>R$38.447,90</p>
                    <div>
                        <span>+2.89% </span>
                        <BsGraphUpArrow size={10} />
                    </div>

                </CardPriceBody>
            </CardBody>

            <CardBody>
                <CardHeader>
                    <SiBinance color="#F3BA2F" size={46} />
                    <h3>Binance</h3>
                    <span>BNB</span>
                </CardHeader>
                <CardPriceBody>
                    <p>R$38.447,90</p>
                    <div>
                        <span>+2.89% </span>
                        <BsGraphUpArrow size={10} />
                    </div>

                </CardPriceBody>
            </CardBody>

            <CardBody>
                <CardHeader>
                    <SiEthereum color="#627EEB" size={46} />
                    <h3>Ethereum</h3>
                    <span>ETH</span>
                </CardHeader>
                <CardPriceBody>
                    <p>R$38.447,90</p>
                    <div>
                        <span>+2.89% </span>
                        <BsGraphUpArrow size={10} />
                    </div>

                </CardPriceBody>
            </CardBody>

            <CardBody>
                <CardHeader>
                    <TbCurrencyXrp color="#627EEB" size={46} />
                    <h3>XRP</h3>
                    <span>XRP</span>
                </CardHeader>
                <CardPriceBody>
                    <p>R$38.447,90</p>
                    <div>
                        <span>+2.89% </span>
                        <BsGraphUpArrow size={10} />
                    </div>

                </CardPriceBody>
            </CardBody>


        </ContainerCard>
    )

}
import { ContainerForm, ContainerOptionsOfLogin, FormTitle, FundoGoogle } from "./styles"
import { FcGoogle } from "react-icons/fc";


export const Formulario = ({title, children}) => {
    return (

        <>
        
            <ContainerForm>
                <FormTitle>
                    <h2>{title}</h2>
                </FormTitle>
                <div>
                    {children}
                </div>
                <ContainerOptionsOfLogin>
                    <div>
                        <p>ou continuar com</p>
                    </div>
                    <div>
                        <FundoGoogle>
                        <FcGoogle size={40} />

                        </FundoGoogle>
                    </div>
                </ContainerOptionsOfLogin>
            </ContainerForm>

        </>

    )
}
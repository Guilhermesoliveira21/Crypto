import { useEffect, useState } from "react"
import { ColorLink, ContainerContent, ContainerForm, TextAling } from "../styles/styles"
import { ImageForm } from "../../components/ImageForm"

import imageForm from '../../assets/images/form.png'
import { Formulario } from "../../components/Form"
import { InputCrypto } from "../../components/Input/input"
import { useLocation } from "react-router-dom"
import { UserService } from "../../services/UserService"
import { toast, ToastContainer } from "react-toastify"

export const Register = () => {

    const location = useLocation();

    if(location.pathname === '/registrar') {
        useEffect(() => {
    
            document.body.style.padding = '0'
    
        }, [location.pathname==='/registrar'])

    }

    const [ registerUser, setRegisterUser ] = useState({ name: '', phone: '', email: '', password: '' })

    async function submitUser(e) {
        e.preventDefault();

        if(registerUser.password !== registerUser.confirm_password) {
            toast.error('As senhas devem ser iguais.');
            return
        }

        try {
            const response = await UserService.registerUser(registerUser);
            toast.sucess(response.data.message);
        } catch (error) {
            toast.error('Erro ao registrar o usuário.');
            
        }
    }

    function handleChange(e) {
        const {name, value} = e.target;

        setRegisterUser({
            ...registerUser,
            [name]: value
        })

      
    }

    return (
        <>
            <ContainerForm>
                <ContainerContent width='42%' bg='#8BC8FF'>
                    
                    <ImageForm image={imageForm} />
                </ContainerContent>
                <ContainerContent width='58%' onSubmit={submitUser}>
                    <Formulario title='Criar uma conta'>
                        <InputCrypto
                            placeholder='Nome completo'
                            name='name'
                            onChange={handleChange}
                            value={registerUser.name}
                        />
                        <InputCrypto
                            placeholder='Telefone'
                            name='phone'
                            onChange={handleChange}
                            value={registerUser.phone}
                        />
                        <InputCrypto
                            placeholder='Email'
                            type='email'
                            name='email'
                            onChange={handleChange}
                            value={registerUser.email}
                        />
                        <InputCrypto
                            placeholder='Senha'
                            name='password'
                            onChange={handleChange}
                            value={registerUser.password}
                            type='password'
                        />
                        <InputCrypto
                            placeholder='Confirmar senha'
                            name='confirm_password'
                            onChange={handleChange}
                            value={registerUser.confirm_password}
                            type='password'
                        />
                        <InputCrypto
                            placeholder='Email'
                            type='checkbox'
                            description='ao registrar concordo que tenho 18 anos de idade'
                            id='+18'
                            
                        />

                        <InputCrypto
                            type='submit'
                            value='Cadastrar'
                        />


                    <TextAling>já tem uma conta? <ColorLink to='/entrar'>Entrar</ColorLink></TextAling>
                    </Formulario>

                </ContainerContent>
                <ToastContainer />
            </ContainerForm>
        </>
    )
}
import { useEffect, useState } from "react"
import { ColorLink, ContainerContent, ContainerForm, TextAling } from "../styles/styles"
import { ImageForm } from "../../components/ImageForm"

import imageForm from '../../assets/images/form.png'
import { Formulario } from "../../components/Form"
import { InputCrypto } from "../../components/Input/input"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { UserService } from "../../services/UserService"
import { toast, ToastContainer } from "react-toastify"
import { useAuth } from "../../contexts/AuthUser"

export const Login = () => {

    const location = useLocation();
    
    
    if(location.pathname === '/entrar') {
        useEffect(() => {
            
            document.body.style.padding = '0'
            
        }, [location.pathname==='/entrar'])
        
    }
    
    const [ user, setUser ] = useState({ email: '', password: '' })
    
    const {login, isLogin, error} = useAuth();
    const [redirect, setRedirect] = useState(false);

    
    
    async function submitUser(e) {
        e.preventDefault();
            try {
                await login(user)
    
            if (isLogin?.user?.message) {
                toast.success(isLogin.user.message);
            }
        } catch (erro) {
         
        }

    }

 

    function handleChange(e) {
        const {name, value} = e.target;

        setUser({
            ...user,
            [name]: value
        })

      
    }

    return (
        <>
            <ContainerForm>
                <ContainerContent width='42%' bg='#8BC8FF'>
                    
                    <ImageForm image={imageForm} />
                </ContainerContent >
                <ContainerContent onSubmit={submitUser} width='58%' >
                    <Formulario title='Acesse sua conta'>
                        
                        <InputCrypto
                            placeholder='Email'
                            type='email'
                            name='email'
                            onChange={handleChange}
                            value={user.email}
                         
                        />
                        <InputCrypto
                            placeholder='Senha'
                            name='password'
                            onChange={handleChange}
                            value={user.password}
                            type='password'
                        />
                
                    <TextAling aling="end"><ColorLink to='/registrar'>Esqueci a senha</ColorLink></TextAling>
                        <br />
                        <InputCrypto
                            type='submit'
                            value='Entrar'
                        />


                    <TextAling>Não tem conta? <ColorLink to='/registrar'>Registre-se</ColorLink></TextAling>
                    </Formulario>

                </ContainerContent>
               
         
            </ContainerForm>
        </>
    )
}
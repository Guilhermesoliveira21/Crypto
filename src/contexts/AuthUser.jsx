import { createContext, useContext, useEffect, useState } from "react";
import { UserService } from "../services/UserService";
import { http } from "../hooks/axios";
import { toast, ToastContainer } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(null);
    const [error, setError] = useState();
    
    useEffect(() => {

        const savedUser = localStorage.getItem('userLogin');

        if(savedUser) {
            const dataUser = JSON.parse(savedUser);
            setIsLogin(dataUser);
            http.defaults.headers.common['Authorization'] = `Bearer ${dataUser.user.token}`;
        }

    }, []);

    async function login(user) {

        try {
            const response = await http.post('/user/login', {
                email: user.email,
                password: user.password
            });


            localStorage.setItem('userLogin', JSON.stringify(response.data));

            toast.success(response.data.user.message);

            setIsLogin(response.data);

            http.defaults.headers.common['Authorization'] = `Bearer ${response.data.user.token}`;
            
        } catch (error) {
            toast.error(error.response.data.message);
        }

    }

    async function logout() {

        localStorage.removeItem('userLogin');
        delete http.defaults.headers.common['Authorization'];
        setIsLogin(null)

    }



    return (
        <AuthContext.Provider value={{isLogin, login, logout, error}}>
            {children}
            <ToastContainer/>
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
  };
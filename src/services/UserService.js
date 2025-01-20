import { http } from "../hooks/axios";

export const UserService = {

    registerUser: ({name, phone, email, password}) => http.post('/user/register', {
        name,
        phone,
        email,
        password,
        role: 1
    }),

    login: async ({ email, password }) => {
        try {
            const response = await http.post('/user/login', { email, password });
            return response.data; 
        } catch (error) {
            return
            
        }
    }

};
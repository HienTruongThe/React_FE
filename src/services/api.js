import axios from "../utils/axios-customine";

export const callRegister = (fullName, email, password, phone)=>{
     return axios.post('/api/v1/user/register', {fullName, email, password, phone})
}
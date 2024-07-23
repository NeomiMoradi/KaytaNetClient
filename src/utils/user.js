import {api} from "../api"
import {getCurrentDate} from '../helpers'



export const getAllUsers = async() => {
    return await api.get(`User`).then(res => res);
}

export const login = async(data =  {email:'', password:'' }) => {
    return await api.post(`User/Login`, data).then(res => res);
}

const tempUser = {
    id:"12",
    enrollmentDate: getCurrentDate(),
    mail: "w@w.com",
    phone: "33333",
    firstName: "neomi",
    lastName: "moradi",
    address: "z",
    password: "1357",
  }


export const addUser = async(data) => {
    return await api.post(`User/AddUser`, data).then(res => res);
}

export const updateUser = async(data = tempUser) => {
    return await api.put(`User`, data).then(res => res);
}

export const deleteUser = async(data = tempUser) => {
    return await api.delete(`User`, { data }).then(res => res);
}



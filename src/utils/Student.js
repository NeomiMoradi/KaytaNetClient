import { api } from "../api"


export const getAllStudents = async () => {
    return await api.get(`Student`).then(res => res);
}

export const getAllStudentsByCampId = async (campId) => {
    return await api.get(`Student/GetAllStudentsByCampId/${campId}`).then(res => res)
}

export const getAllStudentsByAgeId = async (ageId) => {
    return await api.get(`Student/GetAllStudentsByAgeId/${ageId}`).then(res => res)
}

export const getAllStudentsByGroupId = async (groupId) => {
    return await api.get(`Student/getAllStudentsByGroupId/${groupId}`).then(res => res)
}

export const getCampById = async (campId) => {
    return await api.get(`GetCampById/${campId}`).then(res => res);
}

const tempStudent = {
    "name": "noam",
    "ageId": 0,
    "phone": "050312",
    "mail": "a@bc.com",
    "adress": "xxx",
    "groupId": 0,
    "campId": 0
}

export const addStudent = async(data) => {
    return await api.post(`Student/AddStudent`, data).then(res => res);
}


export const updateStudent = async (data) => {
    return await api.put(`Student/updateStudent`, data).then(res => res);
}

export const deleteStudent = async (data) => {
    return await api.delete(`Student/deleteStudent`, data ).then(res => res);
}


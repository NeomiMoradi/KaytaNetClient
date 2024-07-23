import { api } from "../api"


export const GetAllCampFilesByCampId = async (userId) => {
    return await api.get(`CampFile/GetAllCampFilesByUserId/${userId}`).then(res => res);
}

export const GetCampFileById = async (CampFileId) => {
    return await api.get(`CampFile/GetCampFileById`).then(res => res);
}

export const addCampFile = async (data) => {
    return await api.post(`AddCampFile/addCampFile`, data).then(res => res);
}

export const updateCampFile = async (data = tempCampFile) => {
    return await api.put(`CampFile/updateCampFile`, data).then(res => res);
}

export const deleteCampFile = async (data = tempCampFile) => {
    return await api.delete(`CampFile/deleteCampFile`, { data: data }).then(res => res);
}


// const tempCamp = {
//     "id": 0,
//     "url": "string",
//     "name": "string",
//     "campId": 0
// }
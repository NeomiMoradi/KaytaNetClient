import { api } from "../api"

export const getGroupsByCampId = async (campId) => {
    return await api.get(`Group/GetAllGroupsByCampId/${campId}`).then(res => res);
}

export const getGroupById = async (campId) => {
    return await api.get(`GetGroupById`).then(res => res);
}

export const createGroups = async (parameter, amount, campId) => {
    return await api.post(`Group/create-groups?parameter=${parameter}&amount=${amount}&campId=${campId}`).then(res => res);
}

export const addGroup = async (data) => {
    return await api.post(`AddGroup`).then(res => res);
}

export const updateGroup = async(data) => {
    return await api.put(`updateGroup`).then(res => res);
}

export const deleteAge = async (data) => {
    return await api.delete(`DeletAge`).then(res => res);
}


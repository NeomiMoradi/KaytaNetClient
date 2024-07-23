import { api } from "../api";

export const getAllStaffByUserId = async (userId) => {
    return await api.get(`Staff/GetAllStaffByUserId/${userId}`).then(res => res);
}

export const getAllStaff = async () => {
    return await api.get(`Staff/getAllStaff`).then(res => res);
}

export const getStaffById = async (staffId) => {
    return await api.get(`GetStaffById`).then(res => res);
}

export const addStaff = async (data) => {
    return await api.post(`Staff/AddStaff`, data).then(res => res);
}

export const updateStaff = async(data) => {
    return await api.put(`Staff`, data).then(res => res);
}

export const deleteStaff = async(data) => {
    return await api.delete(`Staff`).then(res => res);
}
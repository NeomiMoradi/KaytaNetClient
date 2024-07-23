import {api} from "../api"

export const getAllOrders = async () => {
    return await api.get(`Group/GetAllOrders`).then(res => res);
}

export const getAllOrdersByUserId = async (userId) => {
    return await api.get(`Camp/GetAllOrdersByUserId/${userId}`).then(res => res);
}

export const getAllOrdersByStatusId = async (statusId) => {
    return await api.get(`Camp/GetAllOrdersByStatusId/${statusId}`).then(res => res);
}

export const getOrdersById = async (orderId) => {
    return await api.get(`GetOrderById`).then(res => res);
}

export const addOrder = async (data) => {
    return await api.post(`AddOrder`).then(res => res);
}

export const updateOrder = async(data) => {
    return await api.put(`updateOrder`).then(res => res);
}

export const deleteOrder = async (data) => {
    return await api.delete(`DeletOrder`).then(res => res);
}
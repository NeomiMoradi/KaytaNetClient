import {api} from "../api"

export const getAllOrderItemsByOrderId = async (orderId) => {
    return await api.get(`orderItem/getAllOrderItemsByOrderId/${orderId}`).then(res => res);
}

export const addOrderItem = async (data) => {
    return await api.post(`OrderItem/AddOrder`).then(res => res);
}

export const updateOrderItem = async(data) => {
    return await api.put(`updateOrderItem`).then(res => res);
}

export const deleteOrderItem = async (data) => {
    return await api.delete(`DeletOrderItem`).then(res => res);
}
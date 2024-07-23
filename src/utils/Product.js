import { api } from "../api"


export const getAllProducts = async () => {
    return await api.get(`Product/getAllProducts`).then(res => res);
}

export const getAllProductsByCategoryId = async (categoryId) => {
    return await api.get(`Product/getAllOrdersByCategoryId/${categoryId}`).then(res => res);
}

export const addProduct = async (data) => {
    return await api.post(`AddProduct`).then(res => res);
}

export const updateProduct = async (data) => {
    return await api.put(`UpdateProduct`).then(res => res);
}

export const deleteProduct = async (data) => {
    return await api.delete(`deleteProducts`).then(res => res);
}
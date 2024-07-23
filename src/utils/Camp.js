import { api } from "../api"


export const getAllCampsByUserId = async (userId) => {
    return await api.get(`Camp/GetAllCampsByUserId/${userId}`).then(res => res);
}

export const getAllCampsByStatusId = async (statusId) => {
    return await api.get(`Camp/GetAllCampsByStatusId/${statusId}`).then(res => res);
}

export const getAllCamps = async () => {
    return await api.get(`Camp/getAllCamps`).then(res => res);
}

// export const getCampById = async (campId) => {
//     return await api.get(`Camp/getCampById`).then(res => res);
// }

export const getCampById = async (id) => {
    try {
        const response = await api.get(`/Camp/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching camp data:', error);
        throw error;
    }
};

export const addCamp = async (data) => {
    return await api.post(`Camp/AddCamp`, data).then(res => res);
}

// export const updateCamp = async(data = tempCamp) => {
//     return await api.put(`Camp/updateCamp`, data).then(res => res);
// }

// export const deleteCamp = async(data = tempCamp) => {
//     return await api.delete(`Camp/deleteCamp`, data).then(res => res);
// }




const tempCamp = {
    "id": 6,
    "name": "new",
    "address": "new",
    "dateStart": "2024-07-03",
    "dateEnd": "2024-07-13",
    "numSudents": 100,
    "statusId": 1,
    "tochnit": "new",
    "userId": 22,
    "staffId": null,
    "vendorsId": null
}




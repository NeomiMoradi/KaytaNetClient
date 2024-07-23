import { api } from "../api"

export const getAllAges = async() => {
  return await api.get(`General/GetAllAges`).then(res => res);
}

export const addAge = async (data) => {
  return await api.post(`General/AddAge`).then(res => res);
}

export const deleteAge = async (data) => {
  return await api.delete(`General/DeletAge`).then(res => res);
}

export const getAllCaterories = async () => {
  return await api.get('General/GetAllCaterories').then(res => res.data)
}

export const addCaterory = async (data) => {
  return await api.post(`General/AddCaterory`).then(res => res);
}

export const deleteCaterory = async (data) => {
  return await api.delete(`General/DeletCaterory`).then(res => res);
}

export const getAllStatusCamp = async () => {
  return await api.get('General/GetAllStatusCamp').then(res => res.data)
}

export const addStatusCamp = async (data) => {
  return await api.post(`General/AddStatusCamp`).then(res => res);
}

export const deleteStatusCamp = async (data) => {
  return await api.delete(`General/DeletStatusCamp`).then(res => res);
}

export const getAllStatusOrd = async () => {
  return await api.get('General/GetAllStatusOrd').then(res => res.data)
}

// export const addStatusOrd = async (data) => {
//   return await api.post(`General/AddStatusOrd`).then(res => res);
// }

// export const deleteStatusOrd = async (data) => {
//   return await api.delete(`General/DeletStatusOrd`).then(res => res);
// }

export const getAllStatusStuAttendances = async () => {
  return await api.get('General/GetAllStatusStuAttendances').then(res => res.data)
}

// export const addStatusOrd = async (data) => {
//   return await api.post(`General/AddStatusOrd`).then(res => res);
// }

// export const deleteStatusOrd = async (data) => {
//   return await api.delete(`General/DeletStatusOrd`).then(res => res);
// }
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const insertQuake = payload => api.post(`/quake`, payload);
export const getAllQuakes = () => api.get(`/quakes`);
export const updateQuakeById = (id, payload) =>
  api.put(`/quake/${id}`, payload);
export const deleteQuakeById = id => api.delete(`/quake/${id}`);
export const getQuakeById = id => api.get(`/quake/${id}`);

const apis = {
  insertQuake,
  getAllQuakes,
  updateQuakeById,
  deleteQuakeById,
  getQuakeById
};

export default apis;

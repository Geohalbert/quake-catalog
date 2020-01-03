import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

const addQuake = payload => api.post(`/quake`, payload);
const getAllQuakes = () => api.get(`/quakes`);
const updateQuakeById = (id, payload) => api.put(`/quake/${id}`, payload);
const deleteQuakeById = id => api.delete(`/quake/${id}`);
const getQuakeById = id => api.get(`/quake/${id}`);

const QuakeServices = {
  addQuake,
  getAllQuakes,
  updateQuakeById,
  deleteQuakeById,
  getQuakeById
};

export default QuakeServices;

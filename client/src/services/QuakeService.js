import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

class QuakeService {
  insertQuake = payload => api.post(`/quake`, payload);
  getAllQuakes = () => api.get(`/quakes`);
  updateQuakeById = (id, payload) => api.put(`/quake/${id}`, payload);
  deleteQuakeById = id => api.delete(`/quake/${id}`);
  getQuakeById = id => api.get(`/quake/${id}`);
}

export default QuakeService;

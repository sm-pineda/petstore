import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081/api';

const api = axios.create({
  baseURL: API_URL,
});

export const petService = {
  getAllPets: (category) => {
    const url = category ? `/pets?category=${category}` : '/pets';
    return api.get(url);
  },
  getPetById: (id) => api.get(`/pets/${id}`),
  createPet: (pet) => api.post('/pets', pet),
  updatePet: (id, pet) => api.put(`/pets/${id}`, pet),
  deletePet: (id) => api.delete(`/pets/${id}`),
};

export default api;

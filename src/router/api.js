// src/api.js
import axios from 'axios';
import { BaseURL }  from './appConstants'

const apiClient = axios.create({
  baseURL: BaseURL.concat("/api"), //'http://localhost:1337/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getProducts(filters) {
    if (filters != null) {
      return apiClient.get("/products?"+filters+"&populate=*"); // Adjust the endpoint as needed
    } else {
      return apiClient.get("/products?populate=*"); // Adjust the endpoint as needed
    }
    
  },
  getProductById(id) {
    return apiClient.get(`/products?filters[id]=${id}&populate=*`); // Get a specific item
  },
  getProductTypes() {
    return apiClient.post('/product-types');
  },
};

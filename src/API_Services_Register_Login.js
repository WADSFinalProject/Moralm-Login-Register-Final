import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.error('Error registering user:', error.response.data);
      throw new Error(error.response.data.detail || 'Registration failed');
    } else if (error.request) {
      // Request made but no response received
      console.error('No response received:', error.request);
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request
      console.error('Error:', error.message);
      throw new Error('Registration failed');
    }
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      console.error('Error logging in user:', error.response.data);
      throw new Error(error.response.data.detail || 'Login failed');
    } else if (error.request) {
      // Request made but no response received
      console.error('No response received:', error.request);
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request
      console.error('Error:', error.message);
      throw new Error('Login failed');
    }
  }
};

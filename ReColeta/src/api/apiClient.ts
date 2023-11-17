import { UserData } from '../Types/SystemComponentsTypes/UserData';
import axios from './axiosConfig'; // Import the Axios instance

// Define functions for making API requests
export const getUserData = () => {
  return axios.get('/user'); // Example endpoint for getting user data
};

export const updateUserProfile = (userData: UserData) => {
  return axios.put('/user', userData); // Example endpoint for updating user profile
};

export const loginUser = (credentials: any) => {
  return axios.post('/login', credentials);
};

export const registerUser = (userData: UserData) => {
  return axios.post('user/registration', userData);
};

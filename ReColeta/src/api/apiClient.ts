import { UserData } from '../Types/SystemComponentsTypes/UserData';
import { ServerUserData } from '../Types/SystemComponentsTypes/UserRegistrationData';
import axios from './axiosConfig'; // Import the Axios instance

// Define functions for making API requests
export const getAllUserData = () => {
  return axios.get('/user/all'); // Example endpoint for getting all user data
};

export const getUserById = (id: number) => {
  return axios.get(`/user/${id}`); // Example endpoint for getting user data by ID
};

export const updateUserProfile = (id: number, serverUserData: ServerUserData) => {
  return axios.put(`/user/${id}`, serverUserData); // Example endpoint for updating user profile
};

export const loginUser = (credentials: any) => {
  return axios.post('user/login', credentials);
};

export const registerUser = (userData: UserData) => {
  return axios.post('user/registration', userData);
};

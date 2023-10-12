import { useState } from 'react';
import axiosInstance from '../utils/axiosinstance';

function useLogin() {
  const [loginData, setLoginData] = useState(null);
  const [error, setError] = useState(null);

  const login = async (formData) => {
    try {
      const response = await axiosInstance.post('/users/login', formData);
      
      if (response.status === 200) {
        console.log(response.data.data);
        setLoginData(response.data); 
        if (response.status === 200) {
            const token = response.data.data.token;
            const role = response.data.data.role;
            const user = response.data.data.user._id;
            console.log(token);
            console.log(role);
            console.log(user);
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("user", user);

        }
        setError(null);
      } else {
        setError('Registration failed'); 
      }
    } catch (error) {
      setError('Internal server error');
      console.error('Error:', error);
    }
  };

  return { loginData, error, login };
}

export default useLogin;

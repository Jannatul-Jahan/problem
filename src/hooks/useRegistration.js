import { useState } from 'react';
import axiosInstance from '../utils/axiosinstance';

function useRegistration() {
  const [registrationData, setRegistrationData] = useState(null);
  const [error, setError] = useState(null);

  const registerUser = async (formData) => {
    try {
      const response = await axiosInstance.post('/users/sign-up', formData);
      
      if (response.status === 200) {
        setRegistrationData(response.data); 
        setError(null);
      } else {
        setError('Registration failed'); 
      }
    } catch (error) {
      setError('Internal server error');
      console.error('Error:', error);
    }
  };

  return { registrationData, error, registerUser };
}

export default useRegistration;

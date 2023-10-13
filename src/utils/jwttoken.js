import jwt from 'jsonwebtoken';

function getUserRoleFromToken() {
  const token = localStorage.getItem('token'); 
  if (token) {
    try {
      const decodedToken = jwt.decode(token);
      if (decodedToken && decodedToken.role) {
        return decodedToken.role;
      }
    } catch (error) {
      console.error('Error decoding JWT token:', error);
    }
  }

  return null;
}

export default getUserRoleFromToken;
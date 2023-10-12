import jwt from 'jsonwebtoken';

function getUserRoleFromToken() {
  const token = localStorage.getItem('token'); // Get the JWT token from localStorage
  if (token) {
    try {
      const decodedToken = jwt.decode(token);
      if (decodedToken && decodedToken.role) {
        return decodedToken.role;
      }
    } catch (error) {
      // Handle any errors, e.g., invalid token or missing role attribute
      console.error('Error decoding JWT token:', error);
    }
  }
  // Return a default role or handle the case where the token is missing or invalid
  return null; // You can choose an appropriate default value
}

export default getUserRoleFromToken;
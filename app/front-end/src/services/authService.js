import apiClient from './apiService';

class AuthServcie {
  async signup(username, password) {
    try {
      const response = await apiClient.post('/accounts/signup', {
        username,
        password,
      });
      return response;
    } catch (e) {
      throw e.response;
    }
  }
}

export default AuthServcie;

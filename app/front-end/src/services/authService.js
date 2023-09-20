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
  async signin(username, password) {
    try {
      const response = await apiClient.post('/access-tokens', {
        username,
        password,
      });
      return response.data.accessToken;
    } catch (e) {
      throw e.response;
    }
  }
}

export default AuthServcie;

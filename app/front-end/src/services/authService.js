import apiClient from './apiService';

class AuthServcie {
  async signup(username, password) {
    try {
      await apiClient.post('/accounts/signup', {
        username,
        password,
      });
    } catch (e) {
      console.log(e.response);
      return e;
    }
  }
}

export default AuthServcie;

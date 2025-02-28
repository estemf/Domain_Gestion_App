import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/login/username/${username}/password/${password}`);
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const register = async (username, firstName, lastName, email, password, roleId) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/register`, {
            username,
            firstName,
            lastName,
            email,
            password,
            roleId
        });
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};
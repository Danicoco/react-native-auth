import create from 'zustand';
import * as SecureStore from 'expo-secure-store';

const useAuth = create(set => ({
    isAuthenticated: false,
    token: null,
    login: (token) => {
        const response = await SecureStore.setItemAsync('token', token);
        set({ isAuthenticated: true, token: response });
    }
}))

export default useAuth;
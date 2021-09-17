import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { QueryClient, QueryClientProvider } from 'react-query';
import useAuth from './globalState';
import { AuthStack, MainStack } from './navigation';

//query client for react query
const queryClient = new QueryClient();

export default function App() {
  const isAuthenticated = useAuth(state => state.isAuthenticated);
  useEffect(() => {
    const tokenChecker = async() => {
      try {
        const response = await SecureStore.getItemAsync('token');
        if(response) {
          useAuth.setState({ isAuthenticated: true });
        }
      } catch (error) {
        useAuth.setState({ isAuthenticated: false });
      }
    }
    tokenChecker();
  },[]);
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        {
          isAuthenticated ?
          <MainStack />
          :
          <AuthStack />
        }
      </QueryClientProvider>
    </NavigationContainer>
  );
}
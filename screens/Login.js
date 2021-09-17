import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import { allowLogin } from '../server';
import { useMutation } from 'react-query';
import useAuth from '../globalState';

const Login = () => {
    const mutation = useMutation(allowLogin);
    const onSubmit = async(values) => {
        await mutation.mutate(values);
    }
    const login = useAuth(state => state.login);
    
    useEffect(() => {
        if(mutation.data) {
            login(mutation.data.token);
        }
    },[mutation.data, login]);

    return (
        <View>
            <Text>Login</Text>
            <LoginForm mutation={mutation} onSubmit={onSubmit} />
        </View>
    )
}

export default Login;
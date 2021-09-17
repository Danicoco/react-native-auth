import React from 'react';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import { registerAccount } from '../../server';
import { useMutation } from 'react-query';

const RegisterForm = () => {
    const mutation = useMutation(registerAccount);
    const onSubmit = async (values) => {
        await mutation.mutate(values);
    }
    return (
        <>
        {mutation.isLoading && (<Text>Checking your credential...</Text>)}
        {mutation.error && (<Text>{mutation.error.message}</Text>)}
        {mutation.data && (<Text>{mutation.data}</Text>)}
        <Formik
        initialValues={{ username: '', password: '', surname: '', first_name: '' }}
        onSubmit={values => onSubmit(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Input 
                    placeholder="Enter your surname"
                    name="surname"
                    onChangeText={handleChange('surname')}
                    onBlur={handleBlur('surname')}
                    value={values.surname}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    />

                    <Input 
                    placeholder="Enter your first name"
                    name="first_name"
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    value={values.first_name}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    />

                    <Input 
                    placeholder="Enter your username"
                    name="username"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    />

                    <Input 
                    placeholder="*************"
                    name="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                    />

                    <Button 
                    title="Create Account"
                    onPress={handleSubmit}
                    loading={mutation.isLoading}
                    />
                </View>
            )}
        </Formik>
        </>
    )
}

export default RegisterForm;

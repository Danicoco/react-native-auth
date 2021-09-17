import React from 'react';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';

const LoginForm = ({ mutation, onSubmit }) => {
    return (
        <>
        {mutation.isLoading && (<Text>Checking your credential...</Text>)}
        {mutation.error && (<Text>{mutation.error.message}</Text>)}
        {mutation.data && (<Text>{mutation.data}</Text>)}
        <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => onSubmit(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
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
                    title="Login"
                    onPress={handleSubmit}
                    loading={mutation.isLoading}
                    />
                </View>
            )}
        </Formik>
        </>
    )
}

export default LoginForm;
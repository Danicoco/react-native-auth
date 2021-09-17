import axios from 'axios';
//secure store is used for persistent login
import * as SecureStore from 'expo-secure-store';
//add your own api connection
const baseURL = `http://localhost:5000`


export const registerAccount = async(values) => {
    try {
        const response = await axios.post(`${baseURL}/create-account`, values);
        //there is a data object if the request is successful
        //kindly add your own data object
        return response.data.data;
    } catch (error) {
        //there is a message object from the server
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}

export const allowLogin = async(values) => {
    try {
        const response = await axios.post(`${baseURL}/login`, values);
        //there is a data object if the request is successful
        //kindly add your own data object
        return response.data.data;
    } catch (error) {
        //there is a message object from the server
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}
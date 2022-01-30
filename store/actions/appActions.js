import {GET_USERS, USERS_ERROR, LOGIN,LOGIN_ERROR, LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS,LOAD_CATEGORIES_ERROR} from './ActionTypes'
import axios from 'axios';
import axiosInstance from '../../interceptor/index';

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const loadCategories = () => async dispatch => {
    
    try{
        const res = await axiosInstance.get(`browse/categories`)
        dispatch({
            type: LOAD_CATEGORIES_SUCCESS,
            payload: res.data.categories.items
        })
    }
    catch(e){
        dispatch( {
            type: LOAD_CATEGORIES_ERROR,
            payload: console.log(e),
        })
    }

}
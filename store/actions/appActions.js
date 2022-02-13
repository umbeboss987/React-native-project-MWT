import { LOAD_CATEGORIES_SUCCESS,
        LOAD_NEW_RELEASES,
        LOAD_CATEGORIES,
        LOAD_CATEGORIES_ERROR,
        LOAD_NEW_PLAYLIST,
        LOAD_NEW_PLAYLIST_ERROR,
        LOAD_SEARCH_SUCCESS,
        LOAD_SEARCH_ERROR, 
        LOAD_SINGLE_CATEGORIES_ERROR,
        LOAD_USER_PLAYLIST_SUCCESS,
        LOAD_SINGLE_CATEGORIES_SUCCESS,
        LOAD_NEW_PLAYLIST_SUCCESS, 
        LOAD_NEW_RELEASES_SUCCESS, 
        LOAD_USER_PLAYLIST_ERROR} 
from './ActionTypes'
import axios from 'axios';
import axiosInstance from '../../interceptor/index';

export const loadCategories = () => async dispatch => {

    dispatch({
        type:LOAD_CATEGORIES,
    }) 
    
    try{
        const res = await axiosInstance.get(`browse/categories/toplists/playlists`)
        dispatch({
            type: LOAD_CATEGORIES_SUCCESS,
            payload: res.data.playlists.items
        })
    }
    catch(e){
        dispatch( {
            type: LOAD_CATEGORIES_ERROR,
            payload: console.log(e),
        })
    }

}

export const loadNewReleases = () => async dispatch => {

    dispatch({
        type:LOAD_NEW_RELEASES,
    })    
    try{
        const res = await axiosInstance.get(`browse/new-releases`)
        dispatch({
            type: LOAD_NEW_RELEASES_SUCCESS,
            payload: res.data.albums
        })
    }
    catch(e){
        dispatch( {
            type: LOAD_CATEGORIES_ERROR,
            payload: console.log(e),
        })
    }

}

export const loadNewPlaylist = () => async dispatch => {

    dispatch({
        type:LOAD_NEW_PLAYLIST,
    })   
    try{
        const res = await axiosInstance.get(`browse/featured-playlists`)
        dispatch({
            type: LOAD_NEW_PLAYLIST_SUCCESS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: LOAD_NEW_PLAYLIST_ERROR,
            payload: console.log(e),
        })
    }

}

export const loadSingleCategory = (id) => async dispatch => {
    
    try{
        const res = await axiosInstance.get(`/playlists/${id}`);
        dispatch({
            type: LOAD_SINGLE_CATEGORIES_SUCCESS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: LOAD_SINGLE_CATEGORIES_ERROR,
            payload: console.log(e),
        })
    }

}

export const loadUserPlaylist = () => async dispatch => {
    
    try{
        const res = await axiosInstance.get(`me/playlists/`);
        dispatch({
            type: LOAD_USER_PLAYLIST_SUCCESS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: LOAD_USER_PLAYLIST_ERROR,
            payload: console.log(e),
        })
    }

}


export const loadSearchSong = (input) => async dispatch => {
    
    try{
        const res = await axiosInstance.get(`search?type=album,track&limit=20&q=${input}`);
        dispatch({
            type: LOAD_SEARCH_SUCCESS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: LOAD_SEARCH_ERROR,
            payload: console.log(e),
        })
    }

}
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
        LOAD_SINGLE_CATEGORIES,
        LOAD_SINGLE_CATEGORIES_SUCCESS,
        LOAD_NEW_PLAYLIST_SUCCESS, 
        LOAD_NEW_RELEASES_SUCCESS, 
        LOAD_USER_PLAYLIST_ERROR,
        SAVE_TRACK,
        SAVE_TRACK_SUCCESS,
        SAVE_TRACK_ERROR,
        GET_USER_PROFILE,
        GET_USER_PROFILE_SUCCESS,
        GET_USER_PROFILE_ERROR,
        DELETE_SONG,
        DELETE_SONG_SUCCESS,
        DELETE_SONG_ERORR,
        GET_SINGLE_PLAYLIST_SUCCESS,
        GET_SINGLE_PLAYLIST_ERROR,
        GET_SINGLE_PLAYLIST,
        GET_SINGLE_TRACK,
        GET_SINGLE_TRACK_SUCCESS,
        GET_SINGLE_TRACK_ERROR,
        DELETE_TRACK_PLAYLIST,
        DELETE_TRACK_PLAYLIST_SUCCESS,
        DELETE_TRACK_PLAYLIST_ERROR,
        ADD_TRACK_PLAYLIST,
        ADD_TRACK_PLAYLIST_SUCCESS,
        ADD_TRACK_PLAYLIST_ERROR,

    } 
from './ActionTypes'
import axios from 'axios';
import axiosInstance from '../../interceptor/index';
import {sUserPlaylist} from '../../store/selectors/appSelectors'

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
        const res = await axiosInstance.get(`browse/categories/party/playlists`)
        dispatch({
            type: LOAD_NEW_RELEASES_SUCCESS,
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

    dispatch({
        type:LOAD_SINGLE_CATEGORIES
    })
    
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
        const res = await axiosInstance.get(`search?type=track&limit=20&q=${input}`);
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

export const saveTrack = (item) => async dispatch => {
    dispatch({
        type: SAVE_TRACK,
    })
    
    try{
        dispatch({
            type: SAVE_TRACK_SUCCESS,
            payload: item
        })
    }
    catch(e){
        dispatch( {
            type: SAVE_TRACK_ERROR,
            payload: console.log(e),
        })
    }

}

export const userProfile = () => async dispatch => {
    dispatch({
        type: GET_USER_PROFILE,
    })
    
    try{
        const res = await axiosInstance.get(`me`);
        dispatch({
            type: GET_USER_PROFILE_SUCCESS,
            payload: res
        })
    }
    catch(e){
        dispatch( {
            type: GET_USER_PROFILE_ERROR,
            payload: console.log(e),
        })
    }

}

export const deleteSong = (item) => async dispatch => {
    dispatch({
        type: DELETE_SONG,
    })
    
    try{
        dispatch({
            type: DELETE_SONG_SUCCESS,
            payload: item
        })
    }
    catch(e){
        dispatch( {
            type: DELETE_SONG_ERORR,
            payload: console.log(e),
        })
    }

}

export const getSinglePlaylist = (id) => async dispatch => {
    dispatch({
        type: GET_SINGLE_PLAYLIST,
    })
    
    try{
        const res = await axiosInstance.get(`playlists/${id}/tracks`);
        dispatch({
            type: GET_SINGLE_PLAYLIST_SUCCESS,
            payload: res
        })
    }
    catch(e){
        dispatch( {
            type: GET_SINGLE_PLAYLIST_ERROR,
            payload: console.log(e),
        })
    }

}

export const getSingleTrack = (id) => async dispatch => {
    dispatch({
        type: GET_SINGLE_TRACK,
    })
    
    try{
        const res = await axiosInstance.get(`tracks/${id}`);
        dispatch({
            type: GET_SINGLE_TRACK_SUCCESS,
            payload: res
        })
    }
    catch(e){
        dispatch( {
            type: GET_SINGLE_TRACK_ERROR,
            payload: console.log(e),
        })
    }

}


export const deleteTrackPlaylist = (id, uri) => async dispatch => {

    dispatch({
        type: DELETE_TRACK_PLAYLIST,
    })
    
    try{
        const res = await axiosInstance.delete(`playlists/${id}/tracks`,{
            data:"{\"tracks\":[{\"uri\":\"" + uri + "\"}]}",
        });
        dispatch({
            type: DELETE_TRACK_PLAYLIST_SUCCESS,
            payload: uri
        })
    }
    catch(e){
        dispatch( {
            type: DELETE_TRACK_PLAYLIST_ERROR,
            payload: e
        })
    }

}


export const addTrackPlaylist = (id, uri) => async dispatch => {

    dispatch({
        type: ADD_TRACK_PLAYLIST,
    })
    
    try{
        const res = await axiosInstance.post(`playlists/${id}/tracks?uris=${uri}`);
        dispatch({
            type: ADD_TRACK_PLAYLIST_SUCCESS,
            payload: uri
        })
    }
    catch(e){
        dispatch( {
            type: ADD_TRACK_PLAYLIST_ERROR,
            payload: e
        })
    }

}
import axios from 'axios'
import { 
    DEVELOPER_LIST_FAIL,
    DEVELOPER_LIST_REQUEST,
    DEVELOPER_LIST_SUCCESS,
    HOBBIES_LIST_FAIL,
    HOBBIES_LIST_REQUEST,
    HOBBIES_LIST_SUCCESS,
    SELF_LIST_FAIL,
    SELF_LIST_REQUEST,
    SELF_LIST_SUCCESS
} from "../constants/dataConstants";

export const developer_action = () => async (dispatch) => {
    try {
        dispatch({type: DEVELOPER_LIST_REQUEST})
  
        const {data} = await axios.get('/api/developer')
        
        dispatch({ 
            type: DEVELOPER_LIST_SUCCESS, payload: data 
        })
    } catch (error) {
        dispatch({
            type: DEVELOPER_LIST_FAIL,
            payload: error.response && error.response.message
            ? error.response.data.message 
            : error.message
      })
    }
}

export const self_action = () => async (dispatch) => {
    try {
        dispatch({type: SELF_LIST_REQUEST})
  
        const {data} = await axios.get('/api/self')
        
        dispatch({ 
            type: SELF_LIST_SUCCESS, payload: data 
        })
    } catch (error) {
        dispatch({
            type: SELF_LIST_FAIL,
            payload: error.response && error.response.message
            ? error.response.data.message 
            : error.message
      })
    }
}

export const hobbies_action = () => async (dispatch) => {
    try {
        dispatch({type: HOBBIES_LIST_REQUEST})
  
        const {data} = await axios.get('/api/hobbies')
        
        dispatch({ 
            type: HOBBIES_LIST_SUCCESS, payload: data 
        })
    } catch (error) {
        dispatch({
            type: HOBBIES_LIST_FAIL,
            payload: error.response && error.response.message
            ? error.response.data.message 
            : error.message
      })
    }
}
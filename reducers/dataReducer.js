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

// Develop reducer
export const developerReducer = (state = {data:[]}, action) => {
    switch (action.type) {
      case DEVELOPER_LIST_REQUEST:
        return {loading: true, data: []};
      case DEVELOPER_LIST_SUCCESS:
        return {loading: false, data: action.payload};
      case DEVELOPER_LIST_FAIL:
        return {loading: false, error: action.payload};
      default:
        return state;
    }
}

// Hobbies reducer
export const hobbiesReducer = (state = {data:[]}, action) => {
    switch (action.type) {
      case HOBBIES_LIST_REQUEST:
        return {loading: true, data: []};
      case HOBBIES_LIST_SUCCESS:
        return {loading: false, data: action.payload};
      case HOBBIES_LIST_FAIL:
        return {loading: false, error: action.payload};
      default:
        return state;
    }
}

// Self reducers
export const selfReducer = (state = {data:[]}, action) => {
    switch (action.type) {
      case SELF_LIST_REQUEST:
        return {loading: true, data: []};
      case SELF_LIST_SUCCESS:
        return {loading: false, data: action.payload};
      case SELF_LIST_FAIL:
        return {loading: false, error: action.payload};
      default:
        return state;
    }
}
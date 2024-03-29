import {
    ADMIN_FAIL,
    ADMIN_SUCCESS, ADMIN_REQUEST,
    CREATE_ADMIN, CHECK_ADMIN,
    CREATE_book, UPDATE_book, CREATEbook_DETS,
    REMOVE_ADMIN , DELETEbook
} from "../ActionTypes";

const initstate = {
    loading: false,
    error: null,
    admindetails: [],
    books: [],
    logindetails: null
}

const adminReducer = (state = initstate, { type, payload }) => {
    switch (type) {
        case ADMIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                admindetails: payload
            }

        case ADMIN_FAIL:
            return {
                ...state,
                error: payload
            }

        case CREATE_ADMIN:
            return {
                ...state,
                admindetails: payload
            }

        case CHECK_ADMIN:
            return {
                ...state,
                logindetails: payload
            }

        case CREATE_book:
            return {
                ...state,
                books: payload
            }

        case CREATEbook_DETS:
            return {
                ...state,
                books: payload
            }

        case UPDATE_book:
        case DELETEbook :    
            return {
                ...state,
                books: payload
            }

        case REMOVE_ADMIN:
            return {
                ...state,
                logindetails: null
            }
            
        default:
            return state
    }
}

export default adminReducer;
import {
    ADMIN_FAIL,
    ADMIN_SUCCESS, ADMIN_REQUEST,
    CREATE_ADMIN, CHECK_ADMIN,
    CREATE_PET, UPDATE_PET, CREATEPET_DETS,
    REMOVE_ADMIN , DELETEPET
} from "../ActionTypes";

const initstate = {
    loading: false,
    error: null,
    admindetails: [],
    pets: [],
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

        case CREATE_PET:
            return {
                ...state,
                pets: payload
            }

        case CREATEPET_DETS:
            return {
                ...state,
                pets: payload
            }

        case UPDATE_PET:
        case DELETEPET :    
            return {
                ...state,
                pets: payload
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
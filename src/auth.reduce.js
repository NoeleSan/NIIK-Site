import{
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL
} from './types';
    
    const initialState = {
        access: localStorage.getItem('access'),
        refresh: localStorage.getItem('refresh'),
        isAuthenticated: null,
        user: null
    };
    export default function(state=initialState,action){
        const {type,payload}=action;
        switch (type) {
            case AUTHENTICATED_SUCCESS:
                return{
                    ...state,
                    isAuthenticated: true,
                }
            case LOGIN_SUCCESS:
                localStorage.setItem('access',payload.access);
                return{
                    ...state,
                    isAuthenticated:true,
                    access:payload.access,
                    refresh: payload.refresh
                }
            case SIGNUP_SUCCESS:
                return{
                    ...state,
                    isAuthenticated:false
                }
            case USER_LOADED_SUCCESS:
                localStorage.setItem('name',payload.name);
                localStorage.setItem('phone',payload.phone);
                localStorage.setItem('email',payload.email)
                localStorage.setItem('id',payload.id)
                return{
                    ...state,
                    user:payload,
                    is_staff:payload.is_staff
                }
            case AUTHENTICATED_FAIL:
                return{
                    ...state,
                    isAuthenticated: false,
                }
            case USER_LOADED_FAIL:
                return{
                    ...state,
                    user:null
    
                }
            case LOGIN_FAIL:
            case LOGOUT:
            case SIGNUP_FAIL:
                localStorage.removeItem('access');
                localStorage.removeItem('refresh');
                return{
                    ...state,
                    acccess:null,
                    refresh:null,
                    isAuthenticated:false,
                }
            case PASSWORD_RESET_FAIL:
            case PASSWORD_RESET_SUCCESS:
            case PASSWORD_RESET_CONFIRM_SUCCESS:
            case PASSWORD_RESET_CONFIRM_FAIL:
            case ACTIVATION_FAIL:
            case ACTIVATION_SUCCESS:
                return{
                    ...state,
                }
            default:
                return state
        }
    };
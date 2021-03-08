import axios from 'axios';
import { returnErrors } from './messages'
import { USER_LOADING, USER_LOADED, AUTH_ERROR , LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS , REGISTER_SUCCESS, REGISTER_FAIL} from './types'

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios.get('/api/auth/user', tokenConfig(getState))
        .then((response) => {
            dispatch({
                type: USER_LOADED,
                payload: response.data
            })
        }).catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

export const login = (username, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username, password});

    axios.post('/api/auth/login', body, config)
        .then((response) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
        }).catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const register = ({username, password, email}) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({username, password, email});

    axios.post('/api/auth/register', body, config)
        .then((response) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            })
        }).catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const logout = () => (dispatch, getState) => {
    const token = getState().auth.token;
    axios.post('/api/auth/logout', null, tokenConfig(getState))
        .then((response) => {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        }).catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        })
}

export const tokenConfig = (getState) => {
    const token = getState().auth.token;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
  };

import { CREATE_MESSAGE, GET_ERRORS } from './types'

export const createMessage = (msg) => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

export const returnErrors = (message, status) => {
    return {
        type: GET_ERRORS,
        payload: {message, status}
    }
}


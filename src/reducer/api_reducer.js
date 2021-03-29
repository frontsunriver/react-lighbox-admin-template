export default function reducer (state = {message: ''}, action){
    switch(action.type) {
        case 'USER_GET': {
            return state = {...state, message: action.message}
        }

    }
    return state;
}
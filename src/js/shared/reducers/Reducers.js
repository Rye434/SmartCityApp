import {CACHE_PHOTO} from "../actions/Actions";


export default function stocksApp(state, action) {
    let newState = Object.assign({},state);

    switch(action.type) {
        case CACHE_PHOTO:
            let photoCached = action.photo
            newState = Object.assign({}, state, {photoCached});
            console.log(newState)
            break;
        default:
            return state;

    }
    return newState;


}

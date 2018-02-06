import {ACTIVE_BUTTON, NAV_TO_NEW_PAGE} from "../actions/Actions";


export default function stocksApp(state, action) {
    let newState = Object.assign({},state);

    switch(action.type) {
        case ACTIVE_BUTTON:
            let activeButton = action.button
            newState = Object.assign({}, state, {activeButton});
            console.log(activeButton)
            break;
        default:
            return state;

    }
    return newState;


}

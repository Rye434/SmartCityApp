import {CACHE_PHOTO, EDIT_MODAL, FILTER_SEGMENT_TOGGLE,} from "../actions/Actions";


export default function stocksApp(state, action) {
    let newState = Object.assign({},state);

    switch(action.type) {
        case CACHE_PHOTO:
            let photoCached = action.photo
            newState = Object.assign({}, state, {photoCached});
            console.log(newState)
            break;
        case EDIT_MODAL:
            let editModal = action.editModal
            newState = Object.assign({}, state, {editModal});
            console.log(newState)
            break;
        case FILTER_SEGMENT_TOGGLE:
            let filterButton = action.filterActive
            if(filterButton == 1){
                filterSegment = [true,false,false]
                newState = Object.assign({}, state, {filterSegment});
                break;
            }
            if(filterButton == 2) {
                filterSegment = [false, true,false]
                newState = Object.assign({}, state, {filterSegment});
                break;
            }
            if(filterButton == 3) {
                filterSegment = [false,false, true]
                newState = Object.assign({}, state, {filterSegment});
                break;
            }
            console.log(newState)
            break;
        default:
            return state;

    }
    return newState;


}

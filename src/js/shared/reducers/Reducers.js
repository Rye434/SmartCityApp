import {
    CACHE_PHOTO,
    EDIT_MODAL,
    FILTER_SEGMENT_TOGGLE,
    MAP_MODAL,
    USER_LOCATION,
    DETAIL_MODAL,
    STORE_REQUESTS,
    STORE_SERVICES,
    SERVICES,
    UPDATE_ACTION_SHEET_VALUE,
    DISTANCE_LOADED,
    CURRENT_REQUEST
} from "../actions/Actions";


export default function stocksApp(state, action) {
    let newState = Object.assign({},state);

    switch(action.type) {
        case CACHE_PHOTO:
            let photoCached = action.photo
            newState = Object.assign({}, state, {photoCached});
          //  console.log(newState)
            break;
        case EDIT_MODAL:
            let editModal = action.editModal
            newState = Object.assign({}, state, {editModal});
          //  console.log(newState)
            break;
        case MAP_MODAL:
            let mapModal = action.mapModal
            newState = Object.assign({}, state, {mapModal});
          //  console.log(newState)
            break;
        case DETAIL_MODAL:
            let detailModal = action.detailModal
            newState = Object.assign({}, state, {detailModal});
          //  console.log(newState)
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
          //  console.log(newState)
            break;
        case USER_LOCATION:
            let mapRegion = action.mapRegion
            newState = Object.assign({}, state, {mapRegion});
          //  console.log(newState)
            break;
        case STORE_REQUESTS:
            let storeRequests = action.storeRequests
            newState = Object.assign({}, state, {storeRequests});
          //  console.log(newState)
            break;
        case STORE_SERVICES:
            let storeServices = action.storeServices
            newState = Object.assign({}, state, {storeServices});
          //  console.log(newState)
            break;
        case SERVICES:
            let services = action.services
            newState = Object.assign({}, state, {services});
            //  console.log(newState)
            break;
        case UPDATE_ACTION_SHEET_VALUE:
            let actionSheetValue = action.actionSheetValue
            newState = Object.assign({}, state, {actionSheetValue});
            //  console.log(newState)
            break;
        case DISTANCE_LOADED:
            let distanceLoaded = action.distanceLoaded
            newState = Object.assign({}, state, {distanceLoaded});
            //  console.log(newState)
            break;
        case CURRENT_REQUEST:
            let currentRequest = action.currentRequest
            newState = Object.assign({}, state, {currentRequest});
            //  console.log(newState)
            break;
        default:
            return state;

    }
    return newState;


}

import axios from "axios/index";

export const CACHE_PHOTO = "CACHE_PHOTO";
export const EDIT_MODAL = "EDIT_MODAL";
export const FILTER_SEGMENT_TOGGLE = "FILTER_SEGMENT_TOGGLE";
export const USER_LOCATION = "USER_LOCATION";
export const MAP_MODAL = "MAP_MODAL";
export const DETAIL_MODAL = "DETAIL_MODAL";
export const STORE_REQUESTS = "STORE_REQUESTS";
export const STORE_SERVICES = "STORE_SERVICES";
export const SERVICES = "SERVICES";
export const UPDATE_ACTION_SHEET_VALUE = "UPDATE_ACTION_SHEET_VALUE";
export const DISTANCE_LOADED = "DISTANCE_LOADED";
export const CURRENT_REQUEST = "CURRENT_REQUEST";

var Constants = require('../res/constants/AppConstants');


export function cachePhoto(obj) {

    return{
        type: CACHE_PHOTO,
        photo: obj
    }
}

export function editModal(bool) {
    return{
        type: EDIT_MODAL,
        editModal: bool
    }
}

export function filterSegmentToggle(int) {
    return{
        type: FILTER_SEGMENT_TOGGLE,
        filterActive: int
    }
}

export function getUserLocation(position) {
    return {
        type: USER_LOCATION,
        mapRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }
}

export function preload(position) {
    return(dispatch) => {
        dispatch(getUserLocation(position))
        dispatch(fetchRequestList(position))
        dispatch(fetchServiceList())
    }
}

export function updateLocation(position) {
    return{
        type:USER_LOCATION,
        mapRegion:{
            latitude: position.geometry.location.lat,
            longitude: position.geometry.location.lng,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0071,
        }
    }
}

export function mapModal(bool) {
    return{
        type: MAP_MODAL,
        mapModal: bool
    }
}

export function detailModal(bool) {
    return{
        type:DETAIL_MODAL,
        detailModal: bool
    }
}

export function toggleModals() {
    return(dispatch)=>{
        dispatch(detailModal(true));
        dispatch(mapModal(false));

    }

}

export function storeRequests(obj) {
    console.log('STOREREQUESTS')
    // console.log(obj)
    return{
        type:STORE_REQUESTS,
        storeRequests: obj
    }
}

export function storeServices(obj) {
    return{
        type:STORE_SERVICES,
        storeServices: obj
    }
}

export function distanceLoaded(bool) {
    return{
        type:DISTANCE_LOADED,
        distanceLoaded: bool
    }
}

export function services(obj) {
    let payload = []
    for(var service in obj.list ){
        payload.push(obj.list[service].description)
    }

    //remove blank values and test entries
    payload.splice(payload.indexOf(''),1)
    payload.splice(payload.indexOf('Test'),1)

    //sort and add all/cancel entries
    payload.sort();
    payload.unshift('All');
    payload.push('Cancel');

    return{
        type: SERVICES,
        services: payload
    }

}



export function updateActionSheetValue(buttonIndex) {
    return{
        type: UPDATE_ACTION_SHEET_VALUE,
        actionSheetValue: buttonIndex
    }
}


export function updateDistance(requestList,distanceObj) {
    let payload = [];
    let newObj = {};

    for(let request in requestList.list) {
        requestList.list[request]['distance'] = distanceObj.rows[0].elements[request].distance.text
            payload.push(requestList.list[request])
    }
    payload.sort(function(a,b) {return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0);} );

    for (let i=0; i<payload.length; i++) {
        newObj[i] = payload[i];
    }


    requestList.list = newObj

    return(dispatch)=>{
        dispatch(storeRequests(requestList))
        dispatch(distanceLoaded(true))
    }
}

export function currentRequest(obj) {
    return{
        type: CURRENT_REQUEST,
        currentRequest: obj
    }
}

// API calls
export function calculateDistance(userLoc, requestList){
    console.log("CALL GOOGLE: DISTANCE");
    let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?'
    let origin = JSON.stringify(userLoc.coords.latitude)+','+JSON.stringify(userLoc.coords.longitude)
    let destination = []
    let key = Constants.MAPS_API_KEY_PLACES
    for(let request in requestList.list) {
        destination.push(requestList.list[request].lat+","+requestList.list[request].long)
    }

    destination = destination.join('|')
        return (dispatch)=>{
            axios.get(url+'origins='+origin+'&destinations='+destination+'&key='+key)
                .then((response) => {
                    dispatch(updateDistance(requestList,JSON.parse(response.request.response)))
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

}

export function fetchRequestList(position){
    console.log("REQUEST_LIST: FETCH");
    return (dispatch)=>{
        axios.post(Constants.BASE_URL + '/registerservice/api/requests/getPublicRequests',
            {},
            {
                headers: {
                    'PTM_HEADER_ORG_ID': Constants.ORGANIZATION_ID,
                    'PTM_HEADER_APP_ID': Constants.MGIS_APP_ID,
                    'PTM_LANGUAGE': 'eng',
                    'Content-Type': 'application/json',
                }
            },
        )
            .then((response) => {

                dispatch(storeRequests(JSON.parse(response.request.response)))
                dispatch(calculateDistance(position,JSON.parse(response.request.response)))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function fetchServiceList(){
    console.log("SERVICE_LIST: FETCH");
    return (dispatch)=>{
        axios.post(Constants.BASE_URL + '/registerservice/api/requests/getServiceList',
            {},
            {
                headers: {
                    'PTM_HEADER_ORG_ID': Constants.ORGANIZATION_ID,
                    'PTM_HEADER_APP_ID': Constants.MGIS_APP_ID,
                    'PTM_LANGUAGE': 'eng',
                    'Content-Type': 'application/json',
                }
            },
        )
            .then((response) => {
                dispatch(storeServices(JSON.parse(response.request.response)))
                dispatch(services(JSON.parse(response.request.response)))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function requestDetail(ID, mgisID) {
    console.log("REQUEST_DETAIL: FETCH")
    return (dispatch)=>{
        axios.post(Constants.BASE_URL + '/registerservice/api/requests/getRequestInfo',
            {
                "requestIdOpen311"	: ID,
                "requestId"			: mgisID
            },
            {
                headers: {
                    'PTM_HEADER_ORG_ID': Constants.ORGANIZATION_ID,
                    'PTM_HEADER_APP_ID': Constants.MGIS_APP_ID,
                    'PTM_LANGUAGE': 'eng',
                    'Content-Type': 'application/json',
                }
            },
        )
            .then((response) => {
                console.log(JSON.parse(response.request.response))
                // dispatch(storeServices(JSON.parse(response.request.response)))
                dispatch(currentRequest(JSON.parse(response.request.response)))
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

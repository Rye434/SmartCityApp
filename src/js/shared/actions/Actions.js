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

        //console.log(distanceObj.rows[0].elements[request].distance.text)
    }
    payload.sort(function(a,b) {return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0);} );

    //console.log(payload.length)

    for (let i=0; i<payload.length; i++) {
        newObj[i] = payload[i];
    }

    requestList.list = newObj

    return(dispatch)=>{
        dispatch(storeRequests(requestList))
    }
}

// API calls
export function calculateDistance(userLoc, requestList){
    console.log("CALL GOOGLE: DISTANCE");

    let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?'
    let origin = JSON.stringify(userLoc.latitude)+','+JSON.stringify(userLoc.longitude)
    let destination = []
    let key = Constants.MAPS_API_KEY_PLACES

    //TODO: if lat long is empty push address into destination, if latlong, push them into destination in same format is ORIGIN
    //once robson updates post man to send lat longs, refactor to deal with lat/longs instead of wards
    for(let request in requestList.list) {
        destination.push(requestList.list[request].lat+","+requestList.list[request].long)
        //destination.push(requestList.list[request].address.split(' ').slice(2).join('+')+'+ON')
    }

    destination = destination.join('|')

        return (dispatch)=>{
            axios.get(url+'origins='+origin+'&destinations='+destination+'&key='+key)
                .then((response) => {
                    //console.log(JSON.parse(response.request.response))
                    //console.log(requestList)
                    dispatch(updateDistance(requestList,JSON.parse(response.request.response)))

                })
                .catch(function (error) {
                    console.log(error);
                });
        }

}




export function fetchRequestList(){
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
                //console.log(JSON.parse(response.request.response))
                dispatch(storeRequests(JSON.parse(response.request.response)))
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
                //console.log(response.request.response)
                dispatch(storeServices(JSON.parse(response.request.response)))
                dispatch(services(JSON.parse(response.request.response)))
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}



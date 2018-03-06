import axios from "axios/index";

export const CACHE_PHOTO = "CACHE_PHOTO";


export function cachePhoto(obj) {

    return{
        type: CACHE_PHOTO,
        photo: obj
    }
}
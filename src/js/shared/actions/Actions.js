import axios from "axios/index";


export const ACTIVE_BUTTON = "ACTIVE_BUTTON";


export function activeButton(route) {
    return{
        type: ACTIVE_BUTTON,
        button: route
    }
}
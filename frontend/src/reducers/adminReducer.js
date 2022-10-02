import Cookies from "js-cookie";

export function adminReducer(
    state = Cookies.get("admin") ? JSON.parse(Cookies.get("admin")):null,
    action
){
    switch (action.type){
        case "ADMINLOGIN" :
            return action.payload
        case "ADMINLOGOUT" :
            return null
        default:
            return state
    }
}
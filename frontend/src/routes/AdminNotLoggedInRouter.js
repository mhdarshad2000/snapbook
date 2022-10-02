import { useSelector } from "react-redux";
import {Outlet,Navigate} from 'react-router-dom'

export default function AdminNotLoggedInRouter(){
    const {admin} = useSelector((state)=>({...state}))
    return admin ? <Navigate to="/adminhome" /> : <Outlet />
}
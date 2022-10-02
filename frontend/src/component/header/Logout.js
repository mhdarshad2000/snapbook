import React from 'react'
import "./style.css"
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = ()=>{
        Cookies.set("user","")
        dispatch({type:"LOGOUT"})
        navigate("/login")
    }
  return (
    <div>
        <button className='logout' onClick={()=>{
            logout()
        }}>Logout</button>
    </div>
  )
}

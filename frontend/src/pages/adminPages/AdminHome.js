import React from 'react'
import { Link } from 'react-router-dom'
import AdminLogout from './AdminLogout'

export default function AdminHome() {
  return (
    <header>
      <div className="header_left">
        <Link to="/admin/home">
          <div className="header_logo">Snapbook Admin</div>
        </Link>
      </div>
      <div className="header_right">
        <AdminLogout />
      </div>
    </header>
  )
}

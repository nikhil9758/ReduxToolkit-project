import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>Redux Toolkit
        icon
        <Outlet/>
    </div>
  )
}

export default HomeLayout
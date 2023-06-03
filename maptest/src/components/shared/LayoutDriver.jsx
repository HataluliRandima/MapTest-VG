import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarDriver from './SidebarDriver'
import HeaderDriver from './HeaderDriver'

function LayoutDriver() {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
   <SidebarDriver/>
    <div className="flex flex-col flex-1">
    <HeaderDriver/>
        <div className="flex-1 p-4 min-h-0 overflow-auto">
            <Outlet />
        </div>
    </div>
</div>
  )
}

export default LayoutDriver
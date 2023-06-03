import React from 'react'
import DropdownChat from './DropdownChat'
import TestSelect from './TestSelect'

const ChatRooms = () => {
  return (
    <div>
        <h1 className='text-lg'>List Of Your Chat Rooms</h1>
        <div className="bg-gray-300 font-Poppins flex  h-screen items-center justify-center">
      <DropdownChat />

      <TestSelect/>
    </div>
    </div>
  )
}

export default ChatRooms
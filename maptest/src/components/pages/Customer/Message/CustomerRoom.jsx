import React from 'react'

import { Badge ,Flex, Text,Box,Avatar,AvatarBadge} from '@chakra-ui/react'

const CustomerRoom = () => {
  return (
    <div className='bg-white'>
          <li className="w-full flex justify-start pl-1 py-2 hover:bg-purple-50 hover:text-black cursor-pointer ">
      <div className="flex items-center">
        <div className="block pr-2">
          {/* <img
            alt="avatar"
            src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            className="rounded-full h-10 w-10 "
          /> */}
          	<Avatar src='https://bit.ly/broken-link'/>
        </div>
        <p className="w-36 truncate text-left text-black">Hataluli</p>
        {/* <p className="w-36 truncate text-left">Driver</p> */}
      </div>
    </li>
    <li className="w-full flex justify-start pl-1 py-2 hover:bg-purple-50 hover:text-black cursor-pointer ">
      <div className="flex items-center">
        <div className="block pr-2">
          {/* <img
            alt="avatar"
            src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            className="rounded-full h-10 w-10 "
          /> */}
          	<Avatar src='https://bit.ly/broken-link'/>
        </div>
        <p className="w-36 truncate text-left text-black">Driver</p>
        {/* <p className="w-36 truncate text-left">Driver</p> */}
      </div>
    </li>
    </div>
  )
}

export default CustomerRoom
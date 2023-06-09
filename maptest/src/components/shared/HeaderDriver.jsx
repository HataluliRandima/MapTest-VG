import React, { Fragment,useState,useEffect  }  from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { HiOutlineBell, HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import { useNavigate,useLocation } from 'react-router-dom'
import classNames from 'classnames'

import { Badge ,Flex, Text,Box,Avatar,AvatarBadge} from '@chakra-ui/react'

function HeaderDriver() {
    const [displayusername, displayusernameupdate] = useState('');
	const [showmenu, showmenuupdateupdate] = useState(true);




    const navigate = useNavigate()
	const location = useLocation();
    useEffect(() => {
        // if (location.pathname === '/dashboard'  ) {
            // showmenuupdateupdate(true);



			  let username = sessionStorage.getItem('usernamedriver');
			  displayusernameupdate(username);
            // if (username === '' || username === null) {
            //     navigate('/loginC');
            // } else {
            //     displayusernameupdate(username);
            // }




        // } else {
        //     showmenuupdateupdate(false);
        //      console.log('wrong');
        // }

    } )
 
  return (
	 
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
	
			<div className="relative">
				 
			</div>
			<div className="flex items-center gap-2 mr-2">
				{/* <Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineChatAlt fontSize={24} />
							</Popover.Button>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Messages</strong>
										<div className="mt-2 py-1 text-sm">This is messages panel.</div>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover> */}
		 
				{/* <Menu as="div" className="relative">
					<div>
						<Menu.Button className="ml-2 bg-black flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400">
							<span className="sr-only">Open user menu</span>
                            <p className='text-white p-3'>DRIVER  </p>
						<p className='text-white p-3'>{displayusername}</p>	
							<div
								className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
								style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
							>
                                
								<span className="sr-only">Marc Backes</span>
							</div>
                            
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/profile')}
										className={classNames(
											active && 'bg-gray-100',
											'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
										)}
									>
										 Profile
									</div>
								)}
							</Menu.Item>
							 
						</Menu.Items>
					</Transition>
				</Menu> */}
				<Flex>
				<Avatar src='https://bit.ly/broken-link'/>
  
  <Box ml='3'>
    <Text fontWeight='bold'>
      {displayusername}
      {/* <Badge ml='1' colorScheme='green'>
         
      </Badge> */}
    </Text>
    <Text fontSize='sm'>DRIVER</Text>
  </Box>
</Flex>
			</div>

		</div>
									 
  )
}

export default HeaderDriver
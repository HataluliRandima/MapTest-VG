import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import {
	TbTruckDelivery
} from 'react-icons/tb'
import {
	GiHandTruck
} from 'react-icons/gi'
import {
	VscFeedback,
	VscAccount
} from 'react-icons/vsc'
import {
	TbPackageImport
} from 'react-icons/tb'



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashd',
		icon: <HiOutlineViewGrid />
	},
	  {
	  	key: 'ordersassigne',
	  	label: 'Orders Assigned',
	  	path: '/orderass',
	  	icon: <TbPackageImport />
	  },
	{
		key: 'orders',
		label: 'Orders',
		path: '/ordersd',
		icon: <GiHandTruck />
	},
    {
		key: 'trucks',
		label: 'Trucks',
		path: '/trucks',
		icon: <TbTruckDelivery />
	},
	// {
	// 	key: 'packages',
	// 	label: 'Packages',
	// 	path: '/packages',
	// 	icon: <HiOutlineCube />
	// },
	
	// {
	// 	key: 'customers',
	// 	label: 'Customers',
	// 	path: '/customers',
	// 	icon: <HiOutlineUsers />
	// },
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/payments',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/chatdd',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'Feedback',
		label: 'Customers Feedback',
		path: '/customef',
		icon: <VscFeedback />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Profile',
		path: '/settings',
		icon: <VscAccount />
	}
	// {
	// 	key: 'support',
	// 	label: 'Help & Support',
	// 	path: '/support',
	// 	icon: <HiOutlineQuestionMarkCircle />
	// }
]
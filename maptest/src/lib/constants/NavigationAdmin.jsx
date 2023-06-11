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
	VscGitPullRequestGoToChanges
} from 'react-icons/vsc'


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dasha',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'request',
		label: 'Drivers Request',
		path: '/requestdriver',
		icon: <HiOutlineDocumentText />
	},
    {
		key: 'booking',
		label: 'Customer Booking',
		path: '/costbooking',
		icon: <VscGitPullRequestGoToChanges />
	},
	{
		key: 'orders',
		label: 'Order Assigning',
		path: '/orderassign',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'packages',
		label: 'Packages',
		path: '/packages',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	// {
	// 	key: 'customers',
	// 	label: 'Customers',
	// 	path: '/customers',
	// 	icon: <HiOutlineUsers />
	// },
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
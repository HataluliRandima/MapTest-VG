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

import { BsPersonCheck } from 'react-icons/bs'

import {GiPayMoney } from 'react-icons/gi'

import { VscFeedback } from 'react-icons/vsc'

import { FcFeedback } from 'react-icons/fc'


export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
    {
		key: 'booking',
		label: 'Bookings',
		path: '/Bookings',
		icon: <HiOutlineDocumentText />
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
	},
	{
		key: 'payments',
		label: 'Payments',
		path: '/payments11',
		icon: <GiPayMoney />
	},
	{
		key: 'feedback',
		label: 'FeedBack',
		path: '/feedbackc',
		icon: <VscFeedback />
	},
	{
		key: 'enquiry',
		label: 'Enquiry',
		path: '/enqq',
		icon: <FcFeedback />
	}



	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'profile',
		label: 'Profile',
		path: '/profile',
		icon: <BsPersonCheck />
	},
	// {
	// 	key: 'support',
	// 	label: 'Help & Support',
	// 	path: '/support',
	// 	icon: <HiOutlineQuestionMarkCircle />
	// }
]
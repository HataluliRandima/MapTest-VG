import React from 'react'
import DashGrid from './DashGrid'

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
			<DashGrid />
			{/* <div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div> */}
		</div>
  )
}

export default Dashboard
import React from 'react'
import TotalUsersCard from '../sections/dashboard/TotalUsersCard'
import RecentOrders from '../sections/dashboard/RecentOrders'
import RevenueReport from '../sections/dashboard/RevenueReport'
import CommonSalesCard from '../sections/dashboard/CommonSales'

const Dashboard = () => {
    return (

        <div className='flex flex-col items-center '>
            <TotalUsersCard />
            <div className='h-fit grid grid-cols-2 mt-5'>
                <div className='grid grid-rows-2 '>
                    <div className='flex flex-col w-full space-y-10 '>
                        <RevenueReport />
                        <RecentOrders />
                    </div>
                </div>
                <div className='flex justify-end flex-1 w-full'>
                    <CommonSalesCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
import React from 'react'
import OrderCard from '../components/OrderCard'

const ManageOrders = () => {
    return (
        <>
            <div className='m-5 text-white'>
                <div className=''>
                    <OrderCard />
                </div>
                <div className=''>
                    <OrderCard />
                </div>
            </div>
        </>
    )
}

export default ManageOrders
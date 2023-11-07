import React from 'react'
import cardImage from '../assets/Image 1.png'
import { Link } from 'react-router-dom'


const OrderCard = ({
    image,
    orderNum,
    date,
    userName,
    userEmail,
    payStatus,
    payMethod,
    DeliveryStatus,
}) => {
    return (
        <div className='2xl:w-[900px] w-fit h-fit p-5 my-5 rounded-lg bg-[#292927] text-2xl'>
            <Link
                to={'/manage-order/order-details'} >
                <div className='flex justify-between mb-2'>
                    <p>Order number #1</p>
                    <p>DATE 12/11/2023</p>
                </div>
                {
                    image ?
                        <div className='flex my-2'>
                            <img src={cardImage} alt='product' className='w-40 h-40 border border-gray-700 rounded-lg' />
                            <div className='p-3'>
                                PRODUCT_NAME
                                <div className='flex flex-nowrap text-sm '>
                                    <p>
                                        <span className='font-bold'> 1200</span>&nbsp;Sales .&nbsp;
                                    </p>
                                    <p>
                                        <span className='font-bold'> 4.5</span>&nbsp;Ratings
                                    </p>
                                </div>
                                <div className='flex text-sm space-x-5 mt-5 items-center'>
                                    <p>Qty</p>
                                    <div className='w-7 h-5 flex justify-center items-center content-center border border-gray-500 rounded-sm'>
                                        <p className='font-bold'>5</p>
                                    </div>
                                    <div className={`bg-yellow-300 w-5 h-5 border rounded-full`} />
                                </div>

                            </div>
                        </div>
                        : <p className='mb-2'>Order from
                            <span className='font-bold'> USER_EMAIL</span>
                            <span className='text-[#979797]'> "USER_NAME"</span>
                        </p>
                }

                <div className='flex justify-between mb-2 lg:space-x-10 md:space-x-8'>
                    <p>Payment Status:
                        <span className='text-[#979797]'> PAID</span>
                    </p>
                    <p>Payment Method:
                        <span className='text-[#979797]'> CASH</span>
                    </p>
                </div>
                <div className='flex justify-between mt-2'>
                    <p>Delivery status:
                        <span className='text-[#979797]'> DELIVERY_STATUS</span>
                    </p>
                    <p className='font-bold text-[#048547]'>19500EGP</p>
                </div>
            </Link>
        </div>
    )
}

export default OrderCard
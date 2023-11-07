import React from 'react';

import Dropdown from './Dropdown';

const ClientDetailsCard = () => {
  return (
    <div className="2xl:w-[900px] w-fit h-[400px] p-5 my-5 rounded-lg bg-[#292927] text-2xl">
      <h1 className="text-3xl mb-5">Client Details</h1>
      <div className=" space-y-3 mb-2">
        <p>
          Name:
          <span className="text-[#979797]"> CLIENT_NAME</span>
        </p>
        <p>
          Phone Number:
          <span className="text-[#979797]"> PHONE_NUMBER</span>
        </p>
        <p>
          Email:
          <span className="text-[#979797]"> USER_EMAIL</span>
        </p>
      </div>

      <div className="flex justify-center mt-10 p-5 gap-1 ">
        <div className="flex lg:flex-row md:flex-row xs:flex-col ">
          <div className="w-fit h-fit bg-green-700 rounded-lg px-4 py-2 gap-3 mx-1 ">
            <button>Save</button>
          </div>
          <Dropdown title={'Paid'} items={['Paid', 'Not Paid']} />
        </div>
        <div className=" flex lg:flex-row md:flex-row xs:flex-col">
          <div className="w-fit h-fit bg-green-700 rounded-lg px-4 py-2 gap-3 mx-1 ">
            <button>Save</button>
          </div>
          <Dropdown
            title={'Deliverd'}
            items={['Deliverd', 'Not Deliverd']}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsCard;

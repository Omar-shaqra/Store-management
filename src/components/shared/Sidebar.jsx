import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { navigationData } from '../../lib/constants/navigationData';

const linkClasses =
  'flex items-center gap-2 px-3 py-3 hover:bg-primarygreen hover:no-underline focus:bg-[#052010] active:bg-[#052010] rounded-md text-xl';

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? 'text-white font-semibold'
          : 'text-gray-300',
        linkClasses
      )}
    >
      <span>{item.icon} </span>
      {item.title}
    </Link>
  );
}

function Sidebar() {
  return (
    <div className="flex flex-col w-72 p-3 text-white bg-neutral-700">
      <div className="flex items-center gap-2 px-1 py-3">
        <Link
          to={'/'}
          className="text-neutral-100 text-4xl font-bold"
        >
          Sprint
        </Link>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {navigationData.map((item) => (
          <SidebarLink key={item.title} item={item}></SidebarLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

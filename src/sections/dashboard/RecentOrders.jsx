import React from 'react';
import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ['OrderId', 'Name', 'Date', 'Price', 'Status'];

// Dummy data
const TABLE_ROWS = [
  {
    name: 'Iphone 14pro',
    orderid: '#Gts35YU',
    status: 'Shipped',
    price: '37000EGP',
    date: '23/04/18',
  },
  {
    name: 'Iphone 14pro',
    orderid: '#Gts35YU',
    status: 'Shipped',
    price: '37000EGP',
    date: '23/04/18',
  },
  {
    name: 'Iphone 14pro',
    orderid: '#Gts35YU',
    status: 'Shipped',
    price: '37000EGP',
    date: '19/09/17',
  },
  {
    name: 'Iphone 14pro',
    orderid: '#Gts35YU',
    status: 'Shipped',
    price: '37000EGP',
    date: '24/12/08',
  },
  {
    name: 'Iphone 14pro',
    orderid: '#Gts35YU',
    status: 'Shipped',
    price: '37000EGP',
    date: '04/10/21',
  },
];

const RecentOrders = () => {
  return (
    <Card className="flex-1 w-full p-4 border border-stone-800 rounded-2xl bg-[#292927] text-white">
      <h1 className="px-3 pb-2 font-semibold text-xl">
        Recent Orders
      </h1>
      <table className="text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-white leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            ({ orderid, name, date, price, status }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? 'p-4'
                : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={orderid}>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      {orderid}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray">
                      {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                    >
                      <div className="w-16 flex justify-center gap-1 border rounded-full bg-cyan-600">
                        {status}
                      </div>
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default RecentOrders;

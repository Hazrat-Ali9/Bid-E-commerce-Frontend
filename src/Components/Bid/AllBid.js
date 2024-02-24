import React from "react";
import useOrder from "../Hook/useOrder";
import AllDetails from "../Detail/AllDetails";

const AllBid = () => {
  const [orders] = useOrder();
  return (
    <div>
        <h1 className="text-2xl text-center font-bold">All Bid</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-3/5 mx-auto mt-10 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                price
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <AllDetails 
              key={order._id} 
              order={order}
              ></AllDetails>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBid;

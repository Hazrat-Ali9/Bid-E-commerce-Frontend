import React from 'react';
import useOrder from '../Hook/useOrder';
import AdminDetails from '../Detail/AdminDetails';

const AdminBid = () => {
    const [orders] = useOrder();
    return (
        <div>
      <h1>All Order</h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-3/4 mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                                  
                            <th scope="col" class="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order =><AdminDetails
                        key = {order._id}
                        order = {order}
                        ></AdminDetails>)
                    }
                    </tbody>
                </table>
            </div>
     
    </div>
    );
};

export default AdminBid;
import React from 'react';

const AdminDetails = ({order}) => {
  const {productName, userName, email, price} = order;
    return (
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {productName}
                </th>
                <td class="px-6 py-4">
                    {email}
                </td>
                <td class="px-6 py-4">
                    {userName}
                </td>
                <td class="px-6 py-4">
                    {price}
                </td>
                

        </tr>
    );
};

export default AdminDetails;
import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";


const UserTable = () => {
    const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'no',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Passanger ID',
          dataIndex: 'passanger_id',
          key: 'passanger_id',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Verified',
          dataIndex: 'verified',
          key: 'verified',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Role ID',
          dataIndex: 'role_id',
          key: 'role_id',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Operations',
          dataIndex: '',
          key: 'operations',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          render: () => <><a href="#">View</a> | <a href="#">Edit</a> | <a href="#">Delete</a></>,
          
        },

      ];
      
      const data = [
        { no:'01', passanger_id:'01', name: 'tata', image:'-', phone:'01233434234', address:'jl.semangka', email:'tata@gmail.com', password: 'tata123',}
      ];

      //Pagination
      const [activePage, setActivePage] = useState(15)
      const handlePageChange = (pageNumber)=>{
        setActivePage(pageNumber)
      }

    return (
        <>
        <Table columns={columns} data={data} rowKey="id"  className='bg-blue-250 p-4 w-full text-center rc-table-custom font-semibold '/>
        </>
        
    );
};

export default UserTable;
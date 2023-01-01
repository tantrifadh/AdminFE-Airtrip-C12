import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";


const AirplaneTable = () => {
    const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'no',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        { 
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        { 
          title: 'Model Number',
          dataIndex: 'model_number',
          key: 'model_number',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        { 
          title: 'Manufacture',
          dataIndex: 'manufacture',
          key: 'manufacture',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        { 
          title: 'Capacity',
          dataIndex: 'capacity',
          key: 'capacity',
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
        { no: '01', airplane_id:'123', image: '-', model_number: 'B01', manufacture: '-', capacity: '80'}
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

export default AirplaneTable;
import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";


const TicketTable = () => {
    const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'no',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Total Price',
          dataIndex: 'total_price',
          key: 'total_price',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        { 
          title: 'Invoice Number',
          dataIndex: 'invoice_number',
          key: 'invoice_number',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        { 
          title: 'Flight Type',
          dataIndex: 'flight_type',
          key: 'flight_type',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        { 
          title: 'Passenger_Id',
          dataIndex: 'passenger_id',
          key: 'passenger_id',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        { 
          title: 'Flight Detail',
          dataIndex: 'flight_detail',
          key: 'flight_detail',
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
        { no:'01', total_price: '1.500.000', invoice_number:'', flight_type:'', passenger_id:'01', flight_detail:'-'}
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

export default TicketTable;
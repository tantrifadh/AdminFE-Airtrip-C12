import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";


const FlightTable = () => {
    const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'no',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Departure',
          dataIndex: 'departure',
          key: 'departure',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Arrival',
          dataIndex: 'arrival',
          key: 'arrival',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Flight Class',
          dataIndex: 'Class',
          key: 'Class',
          width:'400',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'From',
          dataIndex: 'from',
          key: 'from',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'To',
          dataIndex: 'to',
          key: 'to',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Airplane ID',
          dataIndex: 'airplane_id',
          key: 'airplane_id',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2"
        },
        {
          title: 'Operations',
          dataIndex: '',
          key: 'operations',
          className:"text-white bg-gray-800 p-2 border-b-2",
          render: () => <><a href="#">View</a> | <a href="#">Edit</a> | <a href="#">Delete</a></>,
          
        },
      ];
      
      const data = [
        { no:'01', departure:'12/12/2022', arrival:'13/12/2022', class:'economy class', price:'1.500.000', from:'Jakarta', to:'Semarang', description:'-', airplane_id:'123'}
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

export default FlightTable;
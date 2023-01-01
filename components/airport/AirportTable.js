import Table from 'rc-table';
import React, { useState } from 'react';
import Pagination from "react-js-pagination";

const AirportTable = () => {
    const columns = [
        {
          title: 'No',
          dataIndex: 'no',
          key: 'no',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },        {
          title: 'Country Code',
          dataIndex: 'country_code',
          key: 'country_name',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Airport Name',
          dataIndex: 'name_airport',
          key: 'name_airport',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'iata',
          dataIndex: 'iata',
          key: 'iata',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'icao',
          dataIndex: 'icao',
          key: 'icao',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Airport Logo',
          dataIndex: 'imagelogo',
          key: 'iamgelogo',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Address',
          dataIndex: 'airport_address',
          key: 'airport_address',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Phone',
          dataIndex: 'airport_phone',
          key: 'airport_phone',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
        },
        {
          title: 'Website',
          dataIndex: 'website',
          key: 'website',
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
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
        { no:'01', country_code:'SBY', name_airport:'Juanda', imagelogo:'-', airport_address:'jl. abcd', airport_phone:'0928123434', website:'juanda.com'}
      ];

      //Pagination
      const [activePage, setActivePage] = useState(15)
      const handlePageChange = (pageNumber)=>{
        setActivePage(pageNumber)
      }

    return (
        <>
        <Table columns={columns} data={data} rowKey="id"  className='p-4 w-full text-center rc-table-custom font-semibold '/>
        </>
        
    );
};

export default AirportTable;
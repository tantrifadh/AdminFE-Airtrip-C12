import React from 'react';

const Dashboard = () => {
    return (
        <>
        <main className="p-6 sm:p-10 space-y-6">
        
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
          </div>
        </div>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">-</span>
              <span className="block text-gray-500">Airport</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">-</span>
              <span className="block text-gray-500">Airplane</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
            <div>
              <span className="inline-block text-2xl font-bold">-</span>
              <span className="block text-gray-500">View</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
            <div>
              <span className="inline-block text-2xl font-bold">-</span>
              <span className="block text-gray-500">Customer</span>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 xl:grid-flow-col gap-6">
          
          <div className="flex flex-col md:col-span-2 md:row-span-3 bg-white shadow rounded-lg">
            <div className="px-6 py-5 font-semibold border-b border-gray-100">--</div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">-</div>
            </div>
          </div>


          <div className="flex flex-col md:col-span-2 md:row-span-3 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span>Jadwal Penerbangan</span>
              <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
              </button>
              {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns */}
            </div>
            <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                  <span className="text-gray-600">Jakarta - Semarang</span>
                  <span className="ml-auto font-semibold">18.00 - </span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Jakarta - Semarang</span>
                  <span className="ml-auto font-semibold">18.00 - </span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Jakarta - Semarang</span>
                  <span className="ml-auto font-semibold">18.00 - </span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Jakarta - Semarang</span>
                  <span className="ml-auto font-semibold">18.00 - </span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Jakarta - Semarang</span>
                  <span className="ml-auto font-semibold">18.00 - </span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Jakarta - Semarang</span>
                  <span className="ml-auto font-semibold">18.00 - </span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Jakarta - Semarang</span>
                  <span className="ml-auto font-semibold">18.00 - </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
       
      </main>
      
        </>
    );
};

export default Dashboard;
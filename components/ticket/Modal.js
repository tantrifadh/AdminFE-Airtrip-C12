/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const Modal = ({modal, setModal}) => {

  return (
    <>
      <PureModal
        //header={<div className="bg-purple-600 p-2 font-bold text-lg text-center text-white">Category</div>}
        isOpen={modal}
        width="800px"
        onClose={() => {
          setModal(false);
          return true;
        }}
  
      >
        <div className="flex-row space-y-3 relative">
            <div className="bg-blue-300 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
                <p>Ticket</p>
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">No</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Total Price</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Invoice Number</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Flight Type</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Passenger ID</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Flight Detail</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <button className="bg-blue-300 text-white p-3 w-full mt-5 text-lg">Submit</button>
            </div>
        </div>
      </PureModal>
    </>
  );
};

export default Modal;

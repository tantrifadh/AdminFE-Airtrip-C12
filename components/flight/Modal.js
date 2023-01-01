/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const Modal = ({modal, setModal}) => {
     //For Image Preview
    //  const [selectedImage, setSelectedImage] = useState();

    //  // This function will be triggered when the file field change
    // const imageChange = (e) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //     setSelectedImage(e.target.files);
    //     }
    // };

    // // This function will be triggered when the "Remove This Image" button is clicked
    // const removeSelectedImage = () => {
    //     setSelectedImage();
    // };   

    // useEffect(()=>{
    //     if(!modal){
    //         setSelectedImage();
    //         }
    // },[modal])
  //console.log('modal modal', modal)
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
                <p>Flight</p>
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">No</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Departure</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Arrival</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Flight Class</label>
                <select className="border-2 border-blue-300/50 w-[75%] " type="text">
                    <option value="">Choose Class</option>
                    <option value="">First Class</option>
                    <option value="">Business</option>
                    <option value="">Economy</option>
                </select>
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Price</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">From</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">To</label>
                <input className="border-2 border-blue-300/50 w-[75%] " type="text" />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Airplane ID</label>
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

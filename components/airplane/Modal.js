/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useEffect, useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

<<<<<<< HEAD
const Modal = ({modal, 
  setModal,
  data,
  setData,
  fetchAirplane
}) => {
=======
const Modal = ({ modal, setModal, data, setData, fetchAirplane }) => {
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
  function handleSubmit(e) {
    e.preventDefault();
    for (const key in data) {
      if (!data[key]) {
        alert("please fill out the form!");
        return;
      }
    }
    axios({
<<<<<<< HEAD
      url: data.id ? '/airplanes/update/${data.id}' : "/airplanes/create",
      method: data.id ? "PUT" : "POST",
      data,
      headers: {
        Authorization: 'Bearer $(localStorage.getItem("token")}',
=======
      url: data.id ? `/airplanes/update/${data.id}` : "/airplanes/create",
      method: data.id ? "PUT" : "POST",
      data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
      },
    })
      .then((response) => {
        fetchAirplane();
        setModal(false);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => {
<<<<<<< HEAD
      return { ...prev, [name]: value};
    });
  }

    //For Image Preview
  const [selectedImage, setSelectedImage] = useState();

    // This function will be triggered when the file field change
  const imageChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files);
      }
=======
      return { ...prev, [name]: value };
    });
  }

  //For Image Preview
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files);
    }
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
<<<<<<< HEAD
      setSelectedImage();
  };   

  useEffect(()=>{
      if(!modal){
          setSelectedImage();
          }
  },[modal])
=======
    setSelectedImage();
  };

  useEffect(() => {
    if (!modal) {
      setSelectedImage();
    }
  }, [modal]);
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
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
        <form className="flex-row space-y-3 relative" onSubmit={handleSubmit}>
<<<<<<< HEAD
            <div className="bg-blue-300 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
                <p>Airplane</p>
=======
          <div className="bg-blue-300 p-2 font-bold text-lg text-center text-white -mt-4 -mx-4 mb-5 pb-4">
            <p>Airplane</p>
          </div>
          <div className="flex justify-between">
            <label className="font-semibold pr-2">No</label>
            <input
              className="border-2 border-blue-300/50 w-[75%] "
              type="text"
            />
          </div>
          <div className="flex-row justify-between">
            <label className="font-semibold pr-2">Image</label>
            <input
              className="border-2"
              type="file"
              accept="image/*"
              name="user[image]"
              multiple={true}
              onChange={imageChange}
            />
            <div className="flex overflow-auto my-2 p-2">
              {selectedImage &&
                [...selectedImage].map((file, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(file)}
                    className="w-32 h-32 mr-1 rounded-sm border-4"
                  />
                ))}
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
            </div>

            {selectedImage && (
              <button
                onClick={removeSelectedImage}
                className="bg-orange-400 p-2 rounded-md text-white"
              >
                Remove This Image
              </button>
            )}
          </div>
          <div className="flex justify-between">
            <label className="font-semibold pr-2">Model Number</label>
            <input
              className="border-2 border-blue-300/50 w-[75%] "
              type="number"
              name="model_number"
              onChange={handleChange}
              value={data.model_number}
            />
          </div>
          <div className="flex justify-between">
            <label className="font-semibold pr-2">Manufacture</label>
            <input
              className="border-2 border-blue-300/50 w-[75%] "
              type="manufacture"
              name="manufacture"
              onChange={handleChange}
              value={data.manufacture}
            />
          </div>
          <div className="flex justify-between">
            <label className="font-semibold pr-2">Capacity</label>
            <input
              className="border-2 border-blue-300/50 w-[75%] "
              type="number"
              name="capacity"
              onChange={handleChange}
              value={data.capacity}
            />
          </div>

<<<<<<< HEAD
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Model Number</label>
                <input 
                  className="border-2 border-blue-300/50 w-[75%] " 
                  type="number"
                  name="model_number"
                  onChange={handleChange}
                  value={data.model_number}
                />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Manufacture</label>
                <input 
                  className="border-2 border-blue-300/50 w-[75%] " 
                  type="manufacture" 
                  name="manufacture"
                  onChange={handleChange}
                  value={data.manufacture}
                />
            </div>
            <div className="flex justify-between">
                <label className="font-semibold pr-2">Capacity</label>
                <input 
                  className="border-2 border-blue-300/50 w-[75%] "
                  type="number" 
                  name="capacity"
                  onChange={handleChange}
                  value={data.capacity}
                />
            </div>

            <div className="flex justify-between">
                <button className="bg-blue-300 text-white p-3 w-full mt-5 text-lg" onClick={submit}>Submit</button>
            </div>
=======
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-300 text-white p-3 w-full mt-5 text-lg"
            >
              Submit
            </button>
          </div>
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
        </form>
      </PureModal>
    </>
  );
};

export default Modal;

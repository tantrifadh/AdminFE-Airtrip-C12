import Table from 'rc-table';
import React, { useRef, useState } from 'react';
import Pagination from "react-js-pagination";
import Modal from './Modal';
import ModalView from './ModalView';
import ModalDeleteConfirm from './ModalDeleteConfirm';

const AirplaneTable = ({ datas, fetchAirplanes }) => {
  const dataInit = {
    image: "",
    model_number: "",
    manufacture: "",
    capacity: ""
  };
  const [dataOnEdit, setDataOnEdit] = useState(dataInit);
  const dataView = useRef({ ...dataInit});
  const dataDelete = useRef(0);

  const [modalEdit, setModalEdit] = useState(false);
  const [ModalView, setModalView] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
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
      render: (column, data) => {
        return data.image;
      }
    },
    { 
      title: 'Model Number',
      dataIndex: 'model_number',
      key: 'model_number',
      className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
      render: (column, data) => {
        return data.model_number;
      }
    },
    { 
      title: 'Manufacture',
      dataIndex: 'manufacture',
      key: 'manufacture',
      className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
      render: (column, data) => {
        return data.manufacture;
      }
    },
    { 
      title: 'Capacity',
      dataIndex: 'capacity',
      key: 'capacity',
      className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
      render: (column, data) => {
        return data.manufacture;
      }
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'operations',
      className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
      render: (column, data) => {
        <>
          <a
            role={"button"}
            onClick={() => {
              dataView.current = data;
              setModalView(true);
            }}
          >
            View
          </a>{" "}
          | {" "}
          <a
            onClick={() => {
              setDataOnEdit({
                id: data.id,
                image: data.image,
                model_number: data.manufacture,
                capacity: data.capacity
              });
              setModalEdit(true);
            }}
            role={"button"}
          >
            Edit
          </a>{" "}
          | {" "}
          <a 
            role={"button"}
            onClick={() => {
              dataDelete(true);
            }}
          >
            Delete
          </a>
        </>
      },
    },
  ];
    

  //Pagination
  const [activePage, setActivePage] = useState(15)
  const handlePageChange = (pageNumber)=>{
    setActivePage(pageNumber)
  }

  return (
    <>
      <Modal
        fetchAirplanes={fetchAirplanes}
        data={dataOnEdit}
        setData={setDataOnEdit}
        modal={modalEdit}
        setModal={setModalEdit}
      />
      <ModalView
        data={dataView.current}
        modal={ModalView}
        setModal={setModalView} 
      />
      <ModalDeleteConfirm 
        data={dataDelete.current}
        modal={modalDelete}
        setModal={setModalDelete}
        fetchAirplanes={fetchAirplanes}
      />
      <Table
        columns={columns}
        data={datas}
        rowKey="id"
        className="bg-blue-250 p-4 w-full text-center rc-table-custom font-semibold overflow-x-auto overflow-y-auto"
        sticky={true}
        style={{maxHeight: "460px" }}
      />
    </>
  );
};

export default AirplaneTable;
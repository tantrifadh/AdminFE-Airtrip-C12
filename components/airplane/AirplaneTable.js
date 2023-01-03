<<<<<<< HEAD
import Table from 'rc-table';
import React, { useRef, useState } from 'react';
import Pagination from "react-js-pagination";
import Modal from './Modal';
import ModalView from './ModalView';
import ModalDeleteConfirm from './ModalDeleteConfirm';
=======
import Table from "rc-table";
import React, { useRef, useState } from "react";
import Pagination from "react-js-pagination";
import Modal from "./Modal";
import ModalView from "./ModalView";
import ModalDeleteConfirm from "./ModalDeleteConfirm";
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114

const AirplaneTable = ({ datas, fetchAirplanes }) => {
  const dataInit = {
    image: "",
    model_number: "",
    manufacture: "",
<<<<<<< HEAD
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
=======
    capacity: "",
  };
  const [dataOnEdit, setDataOnEdit] = useState(dataInit);
  const dataView = useRef(dataInit);
  const dataDelete = useRef(0);

  const [modalEdit, setModalEdit] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      width: "42px",
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
      render: (column, data) => {
        return data.image;
      },
    },
    {
      title: "Model Number",
      dataIndex: "model_number",
      key: "model_number",
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
      render: (column, data) => {
        return data.model_number;
      },
    },
    {
      title: "Manufacture",
      dataIndex: "manufacture",
      key: "manufacture",
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
      render: (column, data) => {
        return data.manufacture;
      },
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
      render: (column, data) => {
        return data.manufacture;
      },
    },
    {
      title: "Operations",
      dataIndex: "",
      key: "operations",
      className: "text-white bg-gray-800 p-2 border-r-2 border-b-2",
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
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
<<<<<<< HEAD
          | {" "}
=======
          |{" "}
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
          <a
            onClick={() => {
              setDataOnEdit({
                id: data.id,
                image: data.image,
                model_number: data.manufacture,
<<<<<<< HEAD
                capacity: data.capacity
=======
                capacity: data.capacity,
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
              });
              setModalEdit(true);
            }}
            role={"button"}
          >
            Edit
          </a>{" "}
<<<<<<< HEAD
          | {" "}
          <a 
            role={"button"}
            onClick={() => {
              dataDelete(true);
=======
          |{" "}
          <a
            role={"button"}
            onClick={() => {
              // dataDelete(true);
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
            }}
          >
            Delete
          </a>
<<<<<<< HEAD
        </>
      },
    },
  ];
    

  //Pagination
  const [activePage, setActivePage] = useState(15)
  const handlePageChange = (pageNumber)=>{
    setActivePage(pageNumber)
  }
=======
        </>;
      },
    },
  ];

  //Pagination
  const [activePage, setActivePage] = useState(15);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114

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
<<<<<<< HEAD
        modal={ModalView}
        setModal={setModalView} 
      />
      <ModalDeleteConfirm 
=======
        modal={modalView}
        setModal={setModalView}
      />
      <ModalDeleteConfirm
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
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
<<<<<<< HEAD
        style={{maxHeight: "460px" }}
=======
        style={{ maxHeight: "460px" }}
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
      />
    </>
  );
};

export default AirplaneTable;

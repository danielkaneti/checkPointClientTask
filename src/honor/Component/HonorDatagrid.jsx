import React, { useState, useEffect, useRef } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import styled from "@emotion/styled";
import { getAllExcellentstudent, getAllstudent } from "../../Student/Logic/handleListStudent";


const ButtonContaner = styled("div")(() => ({
  display: "flex",
}));

const HonorDataGrid = () => {

const [honor,setHonor]=useState([])



useEffect(() => {
    const getAll=async ()=>{
      const data= await getAllExcellentstudent();
      setHonor(data);
    }
    getAll();
   
  },[])

const columns = [

    { field: "email", headerName: "Email", width: 200 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "gpa", headerName: "GPA", width: 130 },
    
  ];


  return (
    <div
      style={{
        height: 400,
        width: "70%",
        margin: "auto",
        background: "white",
        padding: "10px",
      }}
    >
      <DataGrid
        rows={honor}
        columns={columns}
        disableSelectionOnClick
      />
     
    </div>
  );
};

export default HonorDataGrid;

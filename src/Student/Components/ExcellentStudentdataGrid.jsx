import React, { useState, useEffect, useRef } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import styled from "@emotion/styled";
import { getAllExcellentstudent } from "../../Student/Logic/handleListStudent";
import { InputLabel } from "@mui/material";


const ExcellentStudentdataGrid = ({render}) => {

const [users,setUsers]=useState([])

useEffect(() => {
    const getAll=async ()=>{
      const data= await getAllExcellentstudent();
      setUsers(data);
    }
    getAll();
   
  },[render])


const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
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
              <InputLabel>Excellent Student List</InputLabel>

      <DataGrid
        rows={users}
        columns={columns}
        disableSelectionOnClick
      />
     
    </div>
  );
};

export default ExcellentStudentdataGrid;

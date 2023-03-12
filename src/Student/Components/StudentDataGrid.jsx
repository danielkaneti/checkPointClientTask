import * as React from "react";
import { useEffect } from "react";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { color } from "@mui/system";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import StudentAction from "./StudentAction";
import AddStudentComponent from "./AddStudentComponent";
import { getAllstudent } from "../Logic/handleListStudent";
import { FormLabel  } from '@mui/material';

const ButtonContaner = styled("div")(() => ({
  display: "flex",
}));

const StudentDataGrid = ({setRender}) => {
  const [rowId, setRowId] = React.useState("");
  const [rowData, setRowData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [renderLise, setRenderList] = React.useState(false);

  

    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "firstName", headerName: "First name", width: 130 },
      { field: "lastName", headerName: "Last name", width: 130 },
      { field: "email", headerName: "Email", width: 200 },
      { field: "department", headerName: "Department", width: 150 },
      { field: "gpa", headerName: "GPA", width: 130 },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          <StudentAction {...{ params, rowData, rowId, setRowId,setRenderList }} />
        ),
      },
    ];

  useEffect(() => {
    const getAll=async ()=>{
      const data= await getAllstudent();
      setRowData(data);
      setRender(true);
    }
    getAll();
 
   
  },[renderLise])

  useEffect(() => {
   
  },[rowData])




  const onRowsSelectionHandler = (row) => {
    setRowId(row.id);
  };

  const onAddClick = (row) => {
    setOpen(true);
  };
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
      <FormLabel  >Student List</FormLabel >
      <DataGrid
        rows={rowData}
        columns={columns}
        disableSelectionOnClick
        onCellClick={(rows) => onRowsSelectionHandler(rows)}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          width: "250px",
          alignItems: "center",
          background: "white",
          color: "black",
        }}
        onClick={onAddClick}
      >
        ADD STUDENT
      </Button>
      <AddStudentComponent setIsOpen={setOpen} open={open} setRenderList={setRenderList} />
    </div>
  );
};

export default StudentDataGrid;

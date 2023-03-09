import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { color } from "@mui/system";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import StudentAction from "./Student/Components/StudentAction";
import AddStudentComponent from "./Student/Components/AddStudentComponent";

const ButtonContaner = styled("div")(() => ({
  display: "flex",
}));

const Page1 = () => {
  const [rowId, setRowId] = React.useState("");
  const [rowDate, setRowDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [selsectRowFlag, setSelectRowFlag] = React.useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "departemnt", headerName: "Departemnt", width: 150 },
    { field: "gpa", headerName: "GPA", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      renderCell: (params) => (
        <StudentAction {...{ params, rowDate, rowId, setRowId }} />
      ),
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const onRowsSelectionHandler = (row) => {
    setRowId(row.id);
    setRowDate(row);
    // console.log(row);
  };

  const onAddClick = (row) => {
    setOpen(true);
    // console.log(row);
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
      <DataGrid
        rows={rows}
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
      <AddStudentComponent setIsOpen={setOpen} open={open} />
    </div>
  );
};

export default Page1;

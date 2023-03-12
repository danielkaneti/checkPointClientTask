import React, {useState} from "react";
import Box from "@mui/material/Box";
import StudentDataGrid from "./StudentDataGrid";
import { Card } from "@mui/material";
import ExcellentStudentdataGrid from "./ExcellentStudentdataGrid";
import { styled } from "@mui/material/styles";

const Contaner = styled("div")(() => ({
paddingBottom :'100px'}));
const StudentList = () => {

  const [render,setRender]=useState(false);
  return (
    <div>
    <Box
      sx={{
        width: "70%",
        higth:'50px',

        margin: "auto",
        backgroundColor: "primary.dark",
        
      }}
    >
<Contaner>
      <StudentDataGrid  setRender={setRender}/>
      </Contaner>
    </Box>
    <Box
      sx={{
        width: "70%",
        higth:'50px',
        margin: "auto",
        backgroundColor: "primary.dark",
        
      }}
    >
<Contaner>
      <ExcellentStudentdataGrid render={render}/>
      </Contaner>
    </Box>
    </div>
  );
};

export default StudentList;

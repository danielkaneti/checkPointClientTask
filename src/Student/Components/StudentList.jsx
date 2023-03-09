import React from "react";
import Box from "@mui/material/Box";
import Page1 from "../../Page1";
import { Card } from "@mui/material";
const StudentList = () => {
  return (
    <Box
      sx={{
        width: "70%",
        height: 690,
        margin: "auto",
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Page1 />
    </Box>
  );
};

export default StudentList;

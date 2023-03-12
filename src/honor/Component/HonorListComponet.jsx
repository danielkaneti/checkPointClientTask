import React from "react";
import Box from "@mui/material/Box";
import HonorDatabase from "../Component/HonorDatagrid";
import { Card } from "@mui/material";
const HonorList = () => {
  return (
    <Box
      sx={{
        width: "70%",
        height: 690,
        margin: "auto",
        backgroundColor: "primary.dark",
      
      }}
    >
      <HonorDatabase />
    </Box>
  );
};

export default HonorList;

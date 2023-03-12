import * as React from "react";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { updateStudent } from "../Logic/handleListStudent";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditStudentComponent = ({ open, setIsOpen, studentData = {} ,setRenderList}) => {


  const [user,setUser]=useState({firstName:studentData.firstName,lastName:studentData.lastName,email:studentData.email,department:studentData.department,gpa:studentData.gpa});

  const {firstName,lastName,email,department,gpa} =user;
 const  onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});

  }
  const handleClose = () => setIsOpen(false);
  const onSaveClick = async () => {
    await updateStudent(studentData.id,user);
    setIsOpen(false)
    setRenderList(true)
  };
  const onCloseClick = () => setIsOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Student
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                value={firstName}
                
                name="firstName"
                autoFocus
                onChange={(event) => onInputChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={lastName}
                name="lastName"
                autoFocus
                onChange={(event) => onInputChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="email "
                label="Email"
                variant="outlined"
                value={email}
                name="email"
                autoFocus
                onChange={(event) => onInputChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="department"
                label="Department"
                variant="outlined"
                value={department}
                name="department"
                autoFocus
                onChange={(event) => onInputChange(event)}
              />{" "}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="gpa"
                label="Gpa"
                variant="outlined"
                value={gpa}
                name="gpa"
                autoFocus
                onChange={(event) => onInputChange(event)}
              />{" "}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onCloseClick}
              >
                CLOSE
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSaveClick}
              >
                SAVE
              </Button>
              {/* <Button onClick={onSaveClick}>SAVE</Button>
          <Button onClick={onCloseClick}>CLOSE</Button> */}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default EditStudentComponent;

import * as React from "react";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { addStudent } from "../Logic/handleListStudent";
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

const AddStudentComponent = ({ open, setIsOpen ,setRenderList}) => {
  // const [id, setID] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [department, setDepartemnt] = useState("");
  // const [gpa, setGpa] = useState("");
const [user,setUser]=useState({id:'',firstName:'',lastName:'',email:'',department:'',gpa:''});

  const {id,firstName,lastName,email,department,gpa} =user;
 const  onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});

  }
  const handleClose = () => setIsOpen(false);
  const onAddClick = (e) =>{
    e.preventDefault();

     setIsOpen(false);
     addStudent(user)
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
            <Grid item xs={12} sm={12}>
              <TextField
                id="id"
                label="ID"
                variant="outlined"
                name="id"
                value={id}
                autoFocus
                onChange={(event) => onInputChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                name='firstName'
                variant="outlined"
                value={firstName}
                autoFocus
                onChange={(event) => onInputChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                name="lastName"
                variant="outlined"
                value={lastName}
                autoFocus
                onChange={(event) => onInputChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="email "
                label="Email"
                name="email"
                variant="outlined"
                value={email}
                autoFocus
                onChange={(event) => onInputChange(event)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="department"
                label="Department"
                variant="outlined"

                name="department"
                value={department}
                autoFocus
                onChange={(event) => onInputChange(event)}
              />{" "}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="gpa"
                name="gpa"
                label="Gpa"
                variant="outlined"
                value={gpa}
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
                onClick={onAddClick}
              >
                ADD
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default AddStudentComponent;

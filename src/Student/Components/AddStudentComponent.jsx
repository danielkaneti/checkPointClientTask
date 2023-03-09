import * as React from "react";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
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

const AddStudentComponent = ({ open, setIsOpen, studentData = {} }) => {
  const { row } = studentData;
  const [firstName, setFirstName] = useState(row.firstName);
  const [lastName, setLastName] = useState(row.lastName);
  const [email, setEmail] = useState(row.email);
  const [departemnt, setDepartemnt] = useState(row.departemnt);
  const [gpa, setGpa] = useState(row.gpa);

  const handleClose = () => setIsOpen(false);
  const onSaveClick = () => setIsOpen(false);
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
                autoFocus
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={lastName}
                autoFocus
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="email "
                label="Email"
                variant="outlined"
                value={email}
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="departemnt"
                label="Departemnt"
                variant="outlined"
                value={departemnt}
                autoFocus
                onChange={(event) => setDepartemnt(event.target.value)}
              />{" "}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="gpa"
                label="Gpa"
                variant="outlined"
                value={gpa}
                autoFocus
                onChange={(event) => setGpa(event.target.value)}
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

export default AddStudentComponent;

import * as React from "react";

import { Box, CircularProgress, Fab, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Check, Delete, Edit, Save } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import AddStudentComponent from "./AddStudentComponent";
// import { getUsers, updateStatus } from "../../../actions/user";
// import { useValue } from "../../../context/ContextProvider";

const StudentAction = ({ params, rowId, setRowId, row }) => {
  //   const {
  //     dispatch,
  //     state: { currentUser, users },
  //   } = useValue();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setIsOpen(true);

    const { role, active, _id } = params.row;
    // const result = await updateStatus(
    //   { role, active },
    //   _id,
    //   dispatch,
    //   currentUser
    // );
    // if (result) {
    setSuccess(true);
    setRowId(null);
    // const user = users.find(user=>user._id === _id)
    // user.role = role
    // user.active = active
    // getUsers(dispatch, currentUser);
    // }
    setLoading(false);
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box
      sx={{
        m: 1,
        position: "relative",
      }}
    >
      <div>
        {success ? (
          <div>
            <Fab
              color="primary"
              sx={{
                width: 40,
                height: 40,
                bgcolor: green[500],
                "&:hover": { bgcolor: green[700] },
              }}
            >
              <Edit />
            </Fab>

            <Fab
              color="primary"
              sx={{
                width: 40,
                height: 40,
              }}
              disabled={params.id !== rowId || loading}
              onClick={handleSubmit}
            >
              <Delete />
            </Fab>
          </div>
        ) : (
          <div>
            <Fab
              color="primary"
              sx={{
                width: 40,
                height: 40,
              }}
              disabled={params.id !== rowId || loading}
              onClick={handleSubmit}
            >
              <Edit />
            </Fab>

            <Fab
              color="primary"
              sx={{
                width: 40,
                height: 40,
              }}
              disabled={params.id !== rowId || loading}
              onClick={handleSubmit}
            >
              <Delete />
            </Fab>
          </div>
        )}
        <AddStudentComponent
          open={open}
          setIsOpen={setIsOpen}
          studentData={params}
        />
        {loading && (
          <CircularProgress
            size={52}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </div>
    </Box>
  );
};

export default StudentAction;

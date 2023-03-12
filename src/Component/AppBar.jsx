import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Root = styled("div")(() => ({}));

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/students">
          Students
          </Button>
          <Button color="inherit" component={Link} to="/honor">
            Honor-candidates
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

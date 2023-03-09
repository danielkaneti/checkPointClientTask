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
          <Button color="inherit" component={Link} to="/page1">
            Page 1
          </Button>
          <Button color="inherit" component={Link} to="/page2">
            Page 2
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

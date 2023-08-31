import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import { NavbarWrapper } from "../styles/Header.modules";

const menuItems = [
  { name: "Home" },
  { name: "Now playing" },
  { name: "Popular" },
  { name: "Tv Shows" },
];

const Header = () => {
  return (
    <NavbarWrapper>
      <AppBar>
        <Toolbar>
          <Typography>Cinema</Typography>

          {menuItems.map((nav, index) => (
            <Tab label={nav.name} key={index} />
          ))}
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Header;

import React from "react";
import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
const pages = ["Home", "Store", "Cart", "Account"];

function NavBar() {

    
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <AppBar sx={{ backgroundColor: "black" ,position:"sticky"}}>
      <Toolbar>
        <Grid container>
          <Grid item xs={10}>
            <h1 style={{ color: "white" }}>
              Dev<span style={{ color: "red" }}>Store</span>
            </h1>
          </Grid>

          <Grid item xs={2}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Button onClick={toggleDrawer(true)}>
                <MenuIcon
                  sx={{
                    color: "red",
                    fontSize: 35,
                    display: { md: "none", xs: "block" },
                  }}
                />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }} onClick={toggleDrawer(false)}>
          {pages.map((page, index) => (
            <ListItem button key={index}>
              <ListItemText primary={page} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;

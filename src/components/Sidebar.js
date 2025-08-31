import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={toggleSidebar}
      sx={{ "& .MuiDrawer-paper": { width: 240 } }}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

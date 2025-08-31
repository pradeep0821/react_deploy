import "../App.css"
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={toggleSidebar}
      sx={{ "& .MuiDrawer-paper": { width: 200 } }}
    >
      <List sx={{marginTop:"3rem"}}>
        <ListItem button>
          <ListItemText primary="Dashboard" className="sidebar-cursor"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Users" className="sidebar-cursor"/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings"  className="sidebar-cursor"/>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

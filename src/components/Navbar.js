import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201,height: 48  }}>
      <Toolbar  sx={{ minHeight: 48 }} variant="dense">
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
           <MenuIcon fontSize="small" />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          EasyCoding
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

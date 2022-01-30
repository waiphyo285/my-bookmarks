import * as React from "react";
import { Bookmark } from "@mui/icons-material";
import {
  Box,
  Link,
  Menu,
  MenuItem,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";

const settings = [
  {
    text: "Portfolio",
    link: "https://waiphyonaing.me",
  },
];

export default function AppBarComponent() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Bookmark />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookmarks
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Wai Phyo" src="/images/profile_pic.png" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            keepMounted
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting, idx) => (
              <MenuItem key={idx} onClick={handleCloseUserMenu}>
                <Link href={setting.link} color="inherit" underline="none">
                  <Typography textAlign="center">{setting.text}</Typography>
                </Link>
              </MenuItem>
            ))}
            <MenuItem onClick={() => alert("Ongoing...")}>
              <Typography textAlign="center">Login</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

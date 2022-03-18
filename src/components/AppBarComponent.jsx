import * as React from "react";
import {
  Box,
  Link,
  Menu,
  MenuItem,
  Drawer,
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  Bookmark,
  CreateNewFolder,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { showToast } from "../utils";
import AuthComponent from "./AuthComponent";

const settings = [
  {
    text: "Visit portfolio",
    link: "https://waiphyonaing.me",
  },
];

export default function AppBarComponent({
  colorMode,
  theme,
  isAdmin,
  setIsAdmin,
}) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [authDrawer, setAuthDrawer] = React.useState({ bottom: false });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    const isReturn =
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift");
    return isReturn ? false : setAuthDrawer({ ...authDrawer, [anchor]: open });
  };

  const logoutAuth = () => {
    setIsAdmin(false);
    localStorage.clear();
    showToast("Successful logout");
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
          {isAdmin ? (
            <Tooltip title="New Folder">
              <IconButton sx={{ color: "#fff" }}>
                <CreateNewFolder />
              </IconButton>
            </Tooltip>
          ) : (
            ""
          )}
          <Tooltip title="Change Theme">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{}}>
              <Avatar alt="Wai Phyo" src="/images/profile_pic.png" />
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-appbar"
            sx={{ mt: "45px" }}
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
            keepMounted
          >
            {settings.map((setting, idx) => (
              <MenuItem key={idx} onClick={handleCloseUserMenu}>
                <Link href={setting.link} color="inherit" underline="none">
                  <Typography>{setting.text}</Typography>
                </Link>
              </MenuItem>
            ))}
            {isAdmin ? (
              <MenuItem onClick={() => logoutAuth()}>
                <Typography textAlign="center">Logout as admin</Typography>
              </MenuItem>
            ) : (
              <MenuItem onClick={toggleDrawer("bottom", true)}>
                <Typography textAlign="center">Login as admin</Typography>
              </MenuItem>
            )}
            <Drawer
              anchor="bottom"
              open={authDrawer["bottom"]}
              onClose={toggleDrawer("bottom", false)}
            >
              <AuthComponent
                authDrawer={authDrawer}
                setAuthDrawer={setAuthDrawer}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            </Drawer>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

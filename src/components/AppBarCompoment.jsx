import * as React from "react";
import { Bookmark } from "@mui/icons-material";

import { Avatar, AppBar, Toolbar, Typography, IconButton } from "@mui/material";

export default function AppBarComponent() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Bookmark />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookmarks
          </Typography>
          <Avatar
            sx={{ bgcolor: "#ddd", color: "#222" }}
            src="/images/profile_pic.png"
            alt="Wai Phyo"
          >
            WP
          </Avatar>
        </Toolbar>
      </AppBar>
    </>
  );
}

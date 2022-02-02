import md5 from "md5";
import * as React from "react";
import { showToast } from "../utils";
import { Box, Button, Avatar, Typography, TextField } from "@mui/material";
import { AccountCircle, Login as LoginIcon } from "@mui/icons-material";
// import { deepOrange, deepPurple } from "@mui/material/colors"; // import color

import data from "../data.json";
const { username, password } = data.credentials;

export default function AuthComponent({
  isAdmin,
  setIsAdmin,
  authDrawer,
  setAuthDrawer,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    const data = new FormData(event.currentTarget);
    const hashName = md5(data.get("username"));
    const hashPass = md5(data.get("password"));
    const isAuth = hashName === username && hashPass === password;
    if (isAuth) {
      setIsAdmin(isAuth);
      localStorage.setItem("isAuth", true);
      setAuthDrawer({ ...authDrawer, bottom: false });
      showToast("Login is successful");
    } else {
      showToast("Login is failed. Try again.");
    }
  };
  return (
    <Box
      sx={{
        margin: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          margin: 1.5,
          width: "80px",
          height: "80px",
          bgcolor: "#eee",
        }}
      >
        <AccountCircle sx={{ fontSize: "75px", color: "primary.main" }} />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="text"
          name="username"
          id="username"
          margin="normal"
          size="small"
          fullWidth
          required
          autoFocus
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          id="password"
          margin="normal"
          size="small"
          fullWidth
          required
        />
        <Button
          type="submit"
          startIcon={<LoginIcon />}
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          fullWidth
        >
          Sign in
        </Button>
      </Box>
    </Box>
  );
}

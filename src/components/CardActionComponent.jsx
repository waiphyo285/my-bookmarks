import * as React from "react";
import { showToast } from "../utils";
import { Box, Button, Avatar, Typography, TextField } from "@mui/material";
import { SaveAs as SaveAsIcon, FolderOpen } from "@mui/icons-material";

export default function CardActionComponent({
  folderId,
  cardDrawer,
  setCardDrawer,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    const data = new FormData(event.currentTarget);
    const folderName = data.get("folder");
    const description = data.get("description");
    const imageUrl = data.get("imageUrl");
    showToast("Edit processing...");
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
        <FolderOpen sx={{ fontSize: "60px", color: "primary.main" }} />
      </Avatar>
      <Typography component="h1" variant="h5">
        Edit folder
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="Folder name"
          name="folder"
          id="folder"
          margin="normal"
          size="small"
          fullWidth
          required
          autoFocus
        />
        <TextField
          type="text"
          label="Description"
          name="descsription"
          id="descsription"
          margin="normal"
          size="small"
          fullWidth
          required
        />
        <TextField
          type="text"
          label="Image url"
          name="imageUrl"
          id="imageUrl"
          margin="normal"
          size="small"
          fullWidth
          required
        />
        <Button
          type="submit"
          startIcon={<SaveAsIcon />}
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          fullWidth
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

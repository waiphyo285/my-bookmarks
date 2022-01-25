import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import DialogComponent from "./DialogComponent";

export default function MultiActionAreaCard({ bookmark }) {
  const { folder, imageUrl, description, content } = bookmark;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ padding: 0.5 }}>
        <CardActionArea>
          <CardMedia alt={folder} component="img" image={imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {folder}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box textAlign="center" padding={1.3}>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            color="primary"
            fullWidth
          >
            <Button size="small" color="primary" onClick={handleOpen}>
              👁️
            </Button>
            <Button size="small" color="primary">
              ✏️
            </Button>
            <Button size="small" color="primary">
              ❌
            </Button>
          </ButtonGroup>
        </Box>
      </Card>
      <DialogComponent
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        contentList={content}
      />
    </>
  );
}

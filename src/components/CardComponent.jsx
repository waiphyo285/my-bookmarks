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
import {
  EditTwoTone,
  DeleteTwoTone,
  ViewAgendaTwoTone,
} from "@mui/icons-material";
import DialogComponent from "./DialogComponent";
import AlertComponent from "./AlertComponent";
import Share from "./ShareComponent";

export default function MultiActionAreaCard({ bookmark }) {
  const { folder, imageUrl, description, content } = bookmark;
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <>
      <Card sx={{ padding: 0.5 }}>
        <CardActionArea>
          <CardMedia alt={folder} component="img" image={imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
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
            <Button size="small" color="primary" onClick={handleOpenDrawer}>
              <ViewAgendaTwoTone />
            </Button>
            <Button size="small" color="primary" onClick={handleOpenAlert}>
              <EditTwoTone />
            </Button>
            <Share label="Share" title="Web Share" text="Web Share" ></Share>
            <Button size="small" color="primary" onClick={handleOpenAlert}>
              <DeleteTwoTone />
            </Button>
          </ButtonGroup>
        </Box>
      </Card>
      <DialogComponent
        open={openDrawer}
        handleOpen={handleOpenDrawer}
        handleClose={handleCloseDrawer}
        contentList={content}
      />
      <AlertComponent
        open={openAlert}
        handleOpen={handleOpenAlert}
        handleClose={handleCloseAlert}
      />
    </>
  );
}

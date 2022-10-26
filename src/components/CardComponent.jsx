import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  Drawer,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import {
  EditTwoTone,
  DeleteTwoTone,
  ViewAgendaTwoTone,
} from "@mui/icons-material";
import CardActionComponent from "./CardActionComponent";
import DialogComponent from "./DialogComponent";

export default function MultiActionAreaCard({
  isAdmin,
  bookmark,
  handleOpenAlert,
}) {
  const { id, folder, imageUrl, description, content } = bookmark;

  const [cardDrawer, setCardDrawer] = React.useState({ bottom: false });
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  const toggleDrawer = (anchor, open) => (event) => {
    const isReturn =
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift");
    return isReturn ? false : setCardDrawer({ ...cardDrawer, [anchor]: open });
  };

  return (
    <>
      <Card sx={{ padding: 0.5 }}>
        <CardActionArea>
          <CardMedia alt={folder} component="img" image={imageUrl} sx={{ height: "180px" }} />
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
            <Button size="small" color="primary" onClick={handleOpenDrawer}>
              <ViewAgendaTwoTone />
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={isAdmin ? toggleDrawer("bottom", true) : handleOpenAlert}
            >
              <EditTwoTone />
            </Button>
            <Button size="small" color="primary" onClick={handleOpenAlert}>
              <DeleteTwoTone />
            </Button>
          </ButtonGroup>
        </Box>
      </Card>
      <Drawer
        anchor="bottom"
        open={cardDrawer["bottom"]}
        onClose={toggleDrawer("bottom", false)}
      >
        <CardActionComponent
          folderId={id}
          cardDrawer={cardDrawer}
          setCardDrawer={setCardDrawer}
        />
      </Drawer>
      <DialogComponent
        open={openDrawer}
        handleOpen={handleOpenDrawer}
        handleClose={handleCloseDrawer}
        contentList={content}
      />
    </>
  );
}

import * as React from "react";
import {
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { Bookmark, ContentCopy } from "@mui/icons-material";

export default function ListComponent({ contentList }) {
  const showToast = (message) => {
    toast.info(message, {
      autoClose: 3000,
      position: "bottom-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
    });
  };
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        marginTop: 6,
      }}
    >
      {contentList.map((content, idx) => (
        <ListItem
          key={idx}
          alignItems="flex-start"
          sx={{ borderBottom: "1.3px solid #ddd " }}
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#669" }}>
              <Bookmark />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={content.title.toUpperCase()}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="caption"
                  color="text.primary"
                >
                  🔗 {content.description}:
                </Typography>
                <Link href={content.link} color="primary">
                  {content.link}
                </Link>
              </React.Fragment>
            }
          />
          <IconButton
            edge="end"
            size="small"
            aria-label="copy"
            onClick={() => {
              navigator.clipboard.writeText(content.link);
              showToast("Link is copied");
            }}
          >
            <ContentCopy fontSize="8" title="copy to clipboard" />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

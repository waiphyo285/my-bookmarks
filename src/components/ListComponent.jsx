import * as React from "react";
import {
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

import { Bookmark } from "@mui/icons-material";

export default function ListComponent({ contentList }) {
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
            <Avatar>
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
                  {content.description}
                </Typography>
                <Link href={content.link} color="inherit">
                  🔗{content.link}
                </Link>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

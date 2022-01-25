import * as React from "react";
import { Box, Grid, Container } from "@mui/material";
import CardComponent from "./CardComponent";
import DialogComponent from "./DialogComponent";
import data from "../data.json";

const MyBookmarks = data.myBookmarks;

export default function BodyComponent() {
  return (
    <main>
      <Box
        sx={{
          marginTop: 6,
          marginBottom: 6,
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={{ xs: 1, sm: 9, md: 12 }}
          >
            {MyBookmarks.map((bookmark, idx) => (
              <Grid key={idx} item xs={12} sm={3} md={3}>
                <CardComponent bookmark={bookmark} />
              </Grid>
            ))}
          </Grid>
          <DialogComponent />
        </Container>
      </Box>
    </main>
  );
}

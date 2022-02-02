import * as React from "react";
import { ToastContainer } from "react-toastify";
import { Box, Grid, Container } from "@mui/material";
import CardComponent from "./CardComponent";
import DialogComponent from "./DialogComponent";
import AlertComponent from "./AlertComponent";

import data from "../data.json";
const MyBookmarks = data.myBookmarks;

export default function MainComponent() {
  return (
    <main>
      <Box
        sx={{
          marginTop: 10,
          paddingBottom: 4,
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
      <AlertComponent />
      <ToastContainer />
    </main>
  );
}
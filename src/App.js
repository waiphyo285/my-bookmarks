import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";

import MultiActionAreaCard from "./components/MultiActionAreaCard";

export default function App() {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            📑
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookmarks
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            // bgcolor: "#fff",
            marginTop: 6,
            marginBottom: 6,
          }}
        >
          <Container>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <MultiActionAreaCard />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <MultiActionAreaCard />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <MultiActionAreaCard />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <MultiActionAreaCard />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </>
  );
}

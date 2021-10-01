import * as React from "react";

import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import SelectComponent from "../select-comp/select-comp";
import DeleteIcon from "@mui/icons-material/Delete";

const titleObject = {
  titleFilter: "Filter by status",
  titleUpdate: "Update status",
};

function SimplePaper() {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 1 / 1,
        height: 170,
        m: 1,
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container spacing={1} direction="column">
        <Grid item>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Nunito", color: "#E48900" }}
          >
            kingsman
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ fontFamily: "Nunito" }}>
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <SelectComponent title={titleObject.titleUpdate} />
        </Grid>
        <Grid item>
          <DeleteIcon sx={{ color: "#E48900", mr: 2 }}></DeleteIcon>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SimplePaper;

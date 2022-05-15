import * as React from "react";
import Cell from "./Cell";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "./Modal";

const App = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      margin: "auto",
    }}
  >
    <Typography
      variant="h2"
      gutterBottom
      component="div"
      style={{ marginTop: "70px", marginBottom: "1px" }}
    >
      KenKen
    </Typography>
    <Stack spacing={5} direction="row" style={{ margin: "30px 0" }}>
      <Modal />
      <Button variant="contained" color="success">
        Submit
      </Button>
    </Stack>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 85px)",
        gridTemplateRows: "repeat(5, 85px)",
        gap: "0",
        rowGap: "0",
        columnGap: "0",
        width: "70%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 'auto',
        // marginRight: 'auto',
        // marginLeft: 'auto',
      }}
    >
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  </div>
);

export default App;

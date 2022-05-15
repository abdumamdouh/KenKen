import * as React from "react";
import Cell from "./Cell";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "./Modal";

const size = 5;

const App = () => {
  const generateCells = () => {
    const cells = [];
    for (let i = 0; i < size * size; i++) cells.push(<Cell key={i} />);
    return cells;
  };
  return (
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
          gridTemplateColumns: `repeat(${size}, 85px)`,
          gridTemplateRows: `repeat(${size}, 85px)`,
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
          marginBottom: "200px",
        }}
      >
        {generateCells()}
      </div>
    </div>
  );
};

export default App;

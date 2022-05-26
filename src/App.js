import * as React from "react";
import { useState } from "react";
import Cell from "./Cell";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "./Modal";

const size = 5;

const request = {
  result: [3, 2, 1, 1, 3, 2, 2, 1, 3],
  values: [
    {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      value: "*3",
    },
    {
      bottom: 0,
      left: 0,
      right: 1,
      top: 0,
      value: "0",
    },
    {
      bottom: 1,
      left: 1,
      right: 0,
      top: 0,
      value: "+4",
    },
    {
      bottom: 1,
      left: 0,
      right: 1,
      top: 0,
      value: "*12",
    },
    {
      bottom: 1,
      left: 1,
      right: 0,
      top: 0,
      value: "0",
    },
    {
      bottom: 0,
      left: 0,
      right: 0,
      top: 1,
      value: "0",
    },
    {
      bottom: 0,
      left: 0,
      right: 1,
      top: 1,
      value: "0",
    },
    {
      bottom: 0,
      left: 1,
      right: 0,
      top: 1,
      value: "0",
    },
    {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      value: "*3",
    },
  ],
};

const App = () => {
  const [cells, setCells] = useState(request);
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
        gap: "0px",
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
          gridTemplateColumns: `repeat(${Math.sqrt(
            cells.values.length
          )}, 85px)`,
          gridTemplateRows: `repeat(${Math.sqrt(cells.values.length)}, 85px)`,
          gap: "0",
          rowGap: "0",
          columnGap: "0",
          width: "70%",
          height: "70%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "200px",
        }}
      >
        {/* {generateCells()} */}
        {cells.values.map((cell, i) => (
          <Cell key={i} cell={cell} />
        ))}
      </div>
    </div>
  );
};

export default App;

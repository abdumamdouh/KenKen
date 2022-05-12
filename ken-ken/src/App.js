import * as React from "react";
import TextField from "@mui/material/TextField";
import Cell from "./Cell";

const App = () => (
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
);

export default App;

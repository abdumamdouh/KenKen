import * as React from "react";
import TextField from "@mui/material/TextField";

const Input = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "85px",
      height: "85px",
      border: "solid 2px black"
      // borderTop: "solid 2px black",
      // borderBottom: "solid 2px black",
      // borderRight: "solid 2px black",
      // borderLeft: "solid 2px black"
    }}
  >
    <span style={{ marginLeft: "5px", alignSelf: "start" }}>244</span>
    <TextField
      style={{ width: 50, marginBottom: "15px" }}
      id="outlined-basic"
      variant="outlined"
    />
  </div>
);

export default function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gridGap: "0 rem"
      }}
    >
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
}


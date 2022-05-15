import * as React from "react";
import TextField from "@mui/material/TextField";

const Cell = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "85px",
      height: "85px",
      outline: "solid 2px black",
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
      // value={5}
      // disabled
    />
  </div>
);

export default Cell;

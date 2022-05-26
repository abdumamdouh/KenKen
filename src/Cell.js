import * as React from "react";
import TextField from "@mui/material/TextField";

const Cell = ({ cell }) => {
  const { bottom, left, right, top, value } = cell;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "85px",
        height: "85px",
        // outline: "solid 2px black",
        borderTop: top ? "solid 2px black" : "solid 1px gray",
        borderBottom: bottom ? "solid 2px black" : "solid 1px gray",
        borderRight: right ? "solid 2px black" : "solid 1px gray",
        borderLeft: left ? "solid 2px black" : "solid 1px gray",
        border: "solid 1px gray",
      }}
    >
      <span style={{ marginLeft: "5px", alignSelf: "start" }}>{value}</span>
      <TextField
        style={{ width: 50, marginBottom: "15px" }}
        id="outlined-basic"
        variant="outlined"
        // value={5}
        // disabled
      />
    </div>
  );
};

export default Cell;

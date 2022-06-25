import React from "react";
import { Paper} from "@mui/material";
import { WeightChart } from "./WeightChart";
import WeightTable from "./WeightTable";



export function Weights() {
  return (
   <React.Fragment>
        <Paper
          sx={{
            p: 3,
            
            display: "flex",
            flexDirection: "column",
            height: 350,
          }}
        >
          <WeightChart />
        </Paper>
        <Paper sx={{ p: 2, display: "flex", mt:3,flexDirection: "column" }}>
        <WeightTable />
      </Paper>
      </React.Fragment>
  );
}

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./CircularLoading.css";

function CircularLoading({ isLoading }) {
  return (
    <>
      {isLoading && (
        <div className="loading-overlay">
          <Box className="loading-container">
            <CircularProgress sx={{ size: "5rem", color: "#0a3752" }}/>
          </Box>
        </div>
      )}
    </>
  );
}

export default CircularLoading;

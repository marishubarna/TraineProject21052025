import React from "react";
import { Card, Typography, Box, Stack } from "@mui/material";
import "../styles/Winnability.css";
const getGradient = (color) => {
  if (color === "#3bb979") {
    return "linear-gradient(270deg, #3bb979 0%, #3bb979 50%, #313853 100%)";
  }
  if (color === "#fdd261") {
    return "linear-gradient(270deg, #fdd261 0%, #fdd261 50%, #313853 100%)";
  }
  // дефолтний синій
  return "linear-gradient(270deg, rgba(59,130,246,1) 0%, rgba(59,130,246,1) 50%, rgba(49,56,83,1) 100%)";
};

const BarItem = ({ index, label, value, color, indecatorsLevels }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      style={{ placeItems: "center", justifyContent: "center" }}
      spacing={2}
    >
      <Typography
        className="circle-number"
        color={color}
        sx={{ border: `1px solid ${color}` }}
      >
        {index}
      </Typography>
      <Box sx={{ flex: 1 }}>
        <Typography className="bar-label">{label}</Typography>
        <Box className="progress-bar">
          <Box
            className="progress-fill"
            sx={{
              width: `${Math.abs(indecatorsLevels)}%`,
              background: getGradient(color),
            }}
          />
        </Box>
      </Box>
      <Typography className="bar-value" sx={{ color }}>
        {value > 0 ? `+${value}` : `${value}`}%
      </Typography>
    </Stack>
  );
};

const WinnabilityCard = ({ title, items = [], color }) => {
  return (
    <Card
      className="winnability-card"
      sx={{ backgroundColor: "#252a3d", borderRadius: "20px", color: "white" }}
    >
      <Typography className="winnability-title">{title}</Typography>
      <Stack spacing={2} mt={2}>
        {items.map((item, index) => (
          <BarItem
            key={index}
            index={index + 1}
            label={item.label}
            value={item.value}
            color={color}
            indecatorsLevels={item.indecatorsLevels}
          />
        ))}
      </Stack>
    </Card>
  );
};

export default WinnabilityCard;

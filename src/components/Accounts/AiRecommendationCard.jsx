import React from "react";
import { Card, Typography, Stack, Button } from "@mui/material";
import { Sparkles } from "lucide-react";

const AiRecommendationCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#252A3D",
        borderRadius: "16px",
        padding: 3,
        color: "white",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} mb={2}>
        <Sparkles color="#22c55e" size={18} />
        <Typography fontWeight="bold" color="#22c55e">
          AI-Powered Recommendations
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography fontWeight="bold">
              Offer 5% premium discount in exchange for 3-year commitment
            </Typography>
            <Typography fontSize="0.85rem" color="#cbd5e1">
              Historical win rate increases 24% with multi-year commitments...
            </Typography>
          </Stack>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#22c55e", borderRadius: "20px" }}
          >
            Apply
          </Button>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography fontWeight="bold">
              Propose risk control services for cargo handling procedures
            </Typography>
            <Typography fontSize="0.85rem" color="#cbd5e1">
              Can potentially reduce loss ratio by 15–20% based on similar
              maritime accounts...
            </Typography>
          </Stack>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#22c55e", borderRadius: "20px" }}
          >
            Apply
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default AiRecommendationCard;

import "../styles/Winnability.css";
import data from "../Json/AccountBoardJson/Winnability.json";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import { Box, Typography, Card, Stack } from "@mui/material";

const ScoreRow = ({ value, label, color }) => {
  return (
    <Stack direction="row" style={{ gap: "5px" }} alignItems="center">
      <Box className="score-bar">
        <Box className="score-fill" sx={{ width: `${value}%` }} />
      </Box>
      <Typography
        sx={{
          fontWeight: label === "Your score" ? "bold" : 400,
          color,
          whiteSpace: "nowrap",
        }}
      >
        {label}: {value}%
      </Typography>
    </Stack>
  );
};

export default function Winnability() {
  return (
    <div className="dashboard">
      <h2 className="score-cardH">Winnability</h2>
      <div className="accountBoard">
        <div className="score-card">
          <div className="score">
            <h1 className="HOverallScore">Overall Score</h1>
          </div>
          <div className="displayRowOfScore">
            <span className="DataScore">{data.score}%</span>
            <div className="BlueContainer">
              <div className="blueLevelIndicators">
                <span className="blueLevelIndicator"></span>
                <span className="blueLevelIndicator"></span>
                <span className="blueLevelIndicator"></span>
                <span className="blueLevelIndicator"></span>
              </div>
              <div className="rating">Very Strong</div>
            </div>
          </div>
        </div>

        <div className=" HistoricalDisplay rounded-3xl  text-white shadow-md">
          <h2 className="HOverallScore">Historical trend</h2>
          <ResponsiveContainer
            width="100%"
            style={{ padding: "5px" }}
            height={100}
          >
            <LineChart data={data.dataHistorical}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                stroke="#aaa"
                interval={0} // Додає всі підписи осі X
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#52b6ff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <Card
          sx={{
            backgroundColor: "#252a3d",
            borderRadius: "20px",
            padding: 3,
            color: "white",
            width: 370,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Position
          </Typography>

          <Stack>
            <ScoreRow label="Your score" value={82} color="white" />
            <ScoreRow label="Market Avg" value={68} color="#9ca3af" />
            <ScoreRow label="Competitor" value={88} color="#9ca3af" />
          </Stack>
        </Card>
      </div>
    </div>
  );
}

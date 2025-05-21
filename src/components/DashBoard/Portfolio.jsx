import React from "react";
import PortfolioGoal from "../Json/DashBoardJson/PortfolioGoalProgressIndicators.json";
import "../styles/PortfolioGoal.css";

const getColor = (index) => {
  const fallback = ["#007BFF", "#28A745", "#FFC107", "#DC3545"];
  return fallback[index % fallback.length];
};

const Portfolio = () => {
  const firstGroup = PortfolioGoal.slice(0, 3);
  const secondGroup = PortfolioGoal.slice(3, 6);
  const threeGroup = PortfolioGoal.filter((item) => item.id === 7);
  const threeGroup2 = PortfolioGoal.filter((item) => item.id === 8);
  // Додаємо tooltip для кожного сегмента
  const renderProgress = (group, tooltipText) => {
    const data = group.map((item) => ({
      ...item,
      value: parseFloat(item.progressInterest),
    }));
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
      <div className="progress-container">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const isFirst = index === 0;
          const isLast = index === data.length - 1;
          return (
            <div
              key={item.id}
              className="progress-segment"
              style={{
                width: `${percentage}%`,
                backgroundColor: item.backgroundColor || getColor(index),

                borderTopLeftRadius: isFirst ? "16px" : 0,
                borderBottomLeftRadius: isFirst ? "16px" : 0,
                borderTopRightRadius: isLast ? "16px" : 0,
                borderBottomRightRadius: isLast ? "16px" : 0,
              }}
            >
              {item.upText}
              <span className="simple-tooltip">
                {item.tooltipText || tooltipText || "Деталі"}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="PortfolioGoalsCenter">
      <h1 className="PortfolioGoalsTitle">Portfolio Goals</h1>
      <p className="ProgressTitleparagraf">{firstGroup[0]?.ProgressTitle}</p>
      {renderProgress(firstGroup)}

      <p className="ProgressTitleparagraf">{secondGroup[0]?.ProgressTitle}</p>
      {renderProgress(secondGroup)}
      <p className="ProgressTitleparagraf">{threeGroup[0]?.ProgressTitle}</p>

      <div className="three-progress">
        {renderProgress(threeGroup)}
        <p>{threeGroup[0]?.textToRight}</p>
      </div>
      <p className="ProgressTitleparagraf">{threeGroup2[0]?.ProgressTitle}</p>
      <div className="three-progress">
        {renderProgress(threeGroup2)} <p>{threeGroup2[0]?.textToRight}</p>
      </div>
    </div>
  );
};

export default Portfolio;

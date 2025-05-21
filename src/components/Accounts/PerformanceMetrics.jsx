import "../styles/Performance.css";
import PortfolioGoal from "../Json/DashBoardJson/PortfolioGoalProgressIndicators.json";
import { LuArrowRight } from "react-icons/lu";

const renderProgress = (group) => {
  const data = group.map((item) => ({
    ...item,
    value: parseFloat(item.progressInterest),
  }));
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="progress-container">
      {data.map((item, index) => {
        const percentage = (item.value / total) * 100;
        return (
          <div
            key={item.id}
            className="progress-segment"
            style={{
              width: `${percentage}%`,
              backgroundColor: item.backgroundColor,
            }}
          ></div>
        );
      })}
    </div>
  );
};
const PerformanceMetrics = () => {
  const threeGroup = PortfolioGoal.filter((item) => item.id === 7);
  const secondGroup = PortfolioGoal.filter((item) => item.id === 8);
  const thirdGroup = PortfolioGoal.filter((item) => item.id === 6);
  return (
    <div className="PerformanceContainer">
      <h1 className="HeaderPerformance">Performance Metrics</h1>
      <div className="iconsOfPerformanceContainer">
        <div className="icon">
          <div className="header">
            <h4 className="HWinnability">Winnability</h4>
            <div className="blueLevelIndicatorContainer">
              <span className="blueLevelIndicator"></span>
              <span className="blueLevelIndicator"></span>
              <span className="blueLevelIndicator"></span>
              <span className="blueLevelIndicator"></span>
            </div>
          </div>
          <div className="textPerformance">
            <p className="textPerformanceparagraf">Very Strong</p>
          </div>
          <div className="LinkToMore">
            <h3 className="MoreLinkHeader">
              See all factors <LuArrowRight />
            </h3>
          </div>
        </div>
        <div className="icon">
          <div className="header">
            <div className="HLossRation1">Loss Ratio</div>
          </div>
          <div className="textPerformanceProcent">
            <p className="textPerformanceparagraf">25%</p>
            <p className="textPerformanceGray">vs 42% target</p>
          </div>
          <div className="LinkToMore">
            <h3 className="MoreLinkHeader">
              See all factors <LuArrowRight />
            </h3>
          </div>
        </div>
        <div className="icon">
          <div className="header">
            <div className="HLossRation1">Premium Growth</div>
          </div>
          <div className="textPerformanceProcent">
            <p className="textPerformanceparagraf">12.4%</p>
            <p className="textPerformanceGray">YoY increase</p>
          </div>
          <p className="textPerformanceGray">$123M vs $150M Target</p>
          <div className="LinkToMore">
            <h3 className="MoreLinkHeader">
              View trend <LuArrowRight />
            </h3>
          </div>
        </div>
        <div className="iconIndicator">
          <div className="header">
            <div className="HIndicator">Exposure Distribution</div>
          </div>
          <div className="indicators">
            <div className="three-progressPerformance1">
              {renderProgress(threeGroup)}
            </div>
            <p>Marine Cargo: 71.4%</p>
          </div>
          <div className="indicators">
            <div className="three-progressPerformance2">
              {renderProgress(secondGroup)}
            </div>
            <p>Marine Cargo: 71.4%</p>
          </div>
          <div className="indicators">
            <div className="three-progressPerformance3">
              {renderProgress(thirdGroup)}
            </div>
            <p>Marine Cargo: 71.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;

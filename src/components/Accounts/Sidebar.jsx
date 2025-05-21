import "../styles/SideBar.css";
import WinnabilityMenu from "../Accounts/WinnabilityMenu";
import WinnabilityCard from "../Accounts/WinnabilityCard";
import { Stack } from "@mui/material";
import AiRecommendationCard from "./AiRecommendationCard";
import WinnabilityData from "../Json/AccountBoardJson/Winnability.json";
const Winnincreasing = WinnabilityData.Winnincreasing || [];
const Winndecreasing = WinnabilityData.Winndecreasing || [];
export default function Sidebar() {
  return (
    <div className="SideBar">
      <h1 className="HeaderPerformance">Account Detalic</h1>

      <aside className="SideBarContainer">
        <div className="tabForDesicion">
          <div className="DecisionPicked">
            <div className="titleSideBar">
              <h3 className="text-lg">DESICION SUPPORT</h3>
              <span className="MarkOfDecision">4</span>
            </div>

            <ul className="UlOfSideBar">
              <li>
                <span className="TitleOfUl">Winnability</span>
              </li>
              <li className="liSideBar">
                Exposure Review & Suggested Coverage
              </li>
              <li className="liSideBar">Portfolio Strategy Alignment</li>
              <li className="liSideBar">Broker Analytics</li>
            </ul>
          </div>
          <div className="NonePicked">
            <div className="titleSideBarLeft">
              <h3 className="text-lg ">RISK ASSESSMENT</h3>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="MarkOfDecision">6</span>
              </div>
            </div>

            <div className="titleSideBarLeft">
              <h3 className="text-lg ">DOCUMENTS AND COMPLIANCE</h3>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="MarkOfDecision">2</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <WinnabilityMenu />
          <Stack spacing={3} p={3}>
            <Stack direction="row" spacing={3}>
              <WinnabilityCard
                title="Increasing Winnability"
                items={Winnincreasing}
                color="#3bb979"
              />
              <WinnabilityCard
                title="Decreasing Winnability"
                items={Winndecreasing}
                color="#fdd261"
              />
            </Stack>
            <AiRecommendationCard />
          </Stack>
        </div>
      </aside>
    </div>
  );
}

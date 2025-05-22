import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";
import { Tabs, Tab } from "@heroui/react";
import { LuHouse, LuSquareCheck, LuUser } from "react-icons/lu";
import "../styles/DashBoard.css";
import tabContentMap from "../Json/DashBoardJson/tabContentMap.json";
import WorkQueery from "./WorkQueery";
import Portfolio from "./Portfolio";
import QuickActions from "./QuickActions";
import Market from "./Market";
import MyAccount from "../DashBoard/MyAccounts";
import Sidebar from "../Accounts/Sidebar";
import ComponentBreadcrumbs from "../Accounts/ComponentBreadcrumbs";
import Performance from "../Accounts/PerformanceMetrics";
// import CommunicationCard from "./../Accounts/CommunicationCard";
import LoginToAccount from "../Accounts/LoginToAccount";
import styled from "styled-components";
import CircleAnimation from "../Animation/CircleAnimation";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabContainer = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [accountData, setaccountData] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handelLoginSubmit = (data) => {
    setaccountData(data);
    setShowForm(false);
  };

  const handelSkip = () => {
    setaccountData(null);
    setShowForm(false);
  };

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const activeTitle = tabContentMap.find(
    (tab) => tab.id === activeKey
  )?.content;

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  return (
    <>
      {showForm && (
        <LoginToAccount onSubmit={handelLoginSubmit} onSkip={handelSkip} />
      )}
      <Layout className="LayoutBody">
        <Tabs
          aria-label="Options"
          selectedKey={activeKey}
          onSelectionChange={handleTabChange}
          className="TabsContainer fade-in-up "
        >
          <Tab
            key="1"
            className="tab"
            title={
              <CircleAnimation>
                <span>
                  <LuHouse /> DashBoard
                </span>
              </CircleAnimation>
            }
          />
          <Tab
            key="2"
            className="tab"
            title={
              <span>
                <CircleAnimation>
                  <LuUser /> Accounts
                </CircleAnimation>
              </span>
            }
          />
          <Tab
            key="3"
            className="tab"
            title={
              <CircleAnimation>
                <span>
                  <LuSquareCheck /> Tasks
                </span>
              </CircleAnimation>
            }
          />
          <Tab
            key="4"
            className="tab"
            title={
              <CircleAnimation>
                <span>
                  <LuUser /> Brokers
                </span>
              </CircleAnimation>
            }
          />
        </Tabs>

        <div className="ComponentsContainer">
          {activeKey === "1" && (
            <div className="DashBoardTab1 fade-in-dark-zoom">
              <div className="LayoutBodyRow">
                <div className="WorkQuerryContent">
                  {activeTitle}
                  {activeKey === "1" && <WorkQueery activeKey={activeKey} />}
                </div>
                {activeKey === "1" && <Portfolio activeKey={activeKey} />}
                <div className="QuickActionAndMarketColumn">
                  {activeKey === "1" && <QuickActions activeKey={activeKey} />}
                  {activeKey === "1" && <Market activeKey={activeKey} />}
                </div>
              </div>
              {activeKey === "1" && <MyAccount activeKey={activeKey} />}
            </div>
          )}
          <div
            className="fade-in-dark-zoom"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {activeKey === "2" && (
              <>
                <ComponentBreadcrumbs activeKey={activeKey} />
                {accountData ? (
                  <div className="account-info fade-in-dark-zoom">
                    <div className="">
                      <img
                        src={
                          accountData.file
                            ? URL.createObjectURL(accountData.file)
                            : ""
                        }
                        height={"150px"}
                        style={{ borderRadius: "50%" }}
                        alt=""
                      />
                    </div>
                    <div className="textLogin">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {" "}
                        <p className="LoginStyle ">Full Name:</p>{" "}
                        {accountData.fullName}
                      </div>
                      <div>
                        {" "}
                        <p className="LoginStyle ">Email:</p>{" "}
                        {accountData.email}
                      </div>
                      <div className="">
                        {" "}
                        <p className="LoginStyle ">Project Type:</p>{" "}
                        {accountData.userproject}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <StyledWrapper>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                          background: "#3b82f6",
                          width: 80,
                          height: 80,
                          margin: "0 auto 16px auto",
                        }}
                      >
                        {/* SVG іконка */}
                        <svg
                          xmlSpace="preserve"
                          viewBox="0 0 184.69 184.69"
                          width="40px"
                          height="40px"
                        >
                          {/* ...ваш SVG код... */}
                          <g>
                            <g>
                              <g>
                                <path
                                  d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
                                  C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
                                  C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
                                  c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
                                  c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
                                  c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
                                  c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
                                  v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                                  style={{ fill: "#fff" }}
                                />
                              </g>
                              <g>
                                <path
                                  d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
                                  c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
                                  L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
                                  c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
                                  C104.91,91.608,107.183,91.608,108.586,90.201z"
                                  style={{ fill: "#fff" }}
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p style={{ color: "#3b82f6", fontWeight: 600 }}>
                        drag and drop your file here or click to select a file!
                      </p>
                    </StyledWrapper>
                    <button onClick={() => setShowForm(true)}>
                      Залогуватися
                    </button>
                  </div>
                )}
                {activeKey === "2" && <Performance activeKey={activeKey} />}
                {activeKey === "2" && <Sidebar activeKey={activeKey} />}
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TabContainer;

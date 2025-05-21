import React from "react";
import "./Policies.css";

const policies = [
  {
    title: "Marine Cargo",
    premium: "$625,000",
    date: "6/05/2026",
    color: "#3b82f6",
  },
  {
    title: "General Liability",
    premium: "$175,000",
    date: "6/05/2026",
    color: "#10b981",
  },
  {
    title: "Workers Comp",
    premium: "$75,000",
    date: "-----",
    color: "#8b5cf6",
  },
  {
    title: "Prorerty",
    premium: "$64,829.83",
    date: "-----",
    color: "#a855f7",
  },
  {
    title: "Umbrella",
    premium: "$275,000",
    date: "13/05/2026",
    color: "#ef4444",
  },
];

const accountSteps = ["Submitted", "Review", "Quote", "Bind", "Issue", "Renew"];
const compliance = [
  "KYC verification",
  "Regulatory approval",
  "Required Documentation",
  "Financial Verification",
];

export default function PoliciesAccountStatus() {
  return (
    <div className="policy-dashboard">
      <h3>Policies</h3>
      <div className="policies">
        {policies.map((policy, i) => (
          <div
            className="policy-card"
            key={i}
            style={{ borderColor: policy.color }}
          >
            <div className="policy-title">
              <span style={{ color: policy.color }}>●</span> {policy.title}
            </div>
            <div className="policy-info">Premium: {policy.premium}</div>
            <div className="policy-info">Eff Date: {policy.date}</div>
          </div>
        ))}
      </div>

      <h3>Account Status</h3>
      <div className="account-status">
        {accountSteps.map((step, i) => (
          <div className="step" key={i}>
            <div className="circle" />
            <div className="label">{step}</div>
            {i < accountSteps.length - 1 && <div className="line" />}
          </div>
        ))}
      </div>

      <div className="compliance">
        <div className="header">
          <h3>Compliance & Documentation</h3>
          <a href="#">See history →</a>
        </div>
        <div className="compliance-list">
          {compliance.map((item, i) => (
            <div className="compliance-item" key={i}>
              <span className="dot" /> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

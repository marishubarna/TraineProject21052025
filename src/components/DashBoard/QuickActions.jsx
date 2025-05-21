import React from "react";
import "../styles/QuickAction.css";
const QuickActions = () => {
  return (
    <div className="QuickActionsContainer">
      <h1 className="QuickActionTitle">Quick actions</h1>
      <button type="submit" className="quickActionButton">
        New Submission
      </button>
      <button type="submit" className="quickActionButton">
        Quote Builder
      </button>
      <button type="submit" className="quickActionButton">
        Risks Models
      </button>
      <button type="submit" className="quickActionButton">
        Documents Upload
      </button>
    </div>
  );
};

export default QuickActions;

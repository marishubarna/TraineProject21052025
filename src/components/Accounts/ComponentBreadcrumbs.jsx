import React from "react";
import "../styles/Breadcrumbs.css";

const Breadcrumbs = () => {
  return (
    <div className="BreadcrumbsDisplay">
      <div className="itemOfBreadcrumbs">
        <a href="">DashBoard</a>
      </div>
      <span className="Breadcrumbs">//</span>
      <div className="itemOfBreadcrumbs">
        <a href="">Accounts</a>
      </div>
      <span className="Breadcrumbs">//</span>
      <div className="itemOfBreadcrumbs">
        <a href="">Maritime Logistics Corp</a>
      </div>
    </div>
  );
};

export default Breadcrumbs;

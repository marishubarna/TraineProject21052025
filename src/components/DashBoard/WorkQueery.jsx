import React, { useState, useEffect } from "react";
import tabContentMap from "../Json/DashBoardJson/tabContentMap.json";
import WorkQuerry from "../Json/DashBoardJson/WorkQuerry.json";
import "../styles/DashBoard.css";

const WorkQueery = ({ activeKey }) => {
  const [data, setData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null); // Стейт для відстеження відкриття меню
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("workquerry");
    if (saved) {
      setData(JSON.parse(saved));
    } else {
      setData(WorkQuerry);
    }
  }, []);

  useEffect(() => {
    setData(WorkQuerry);
  }, []);

  const activeTab = tabContentMap.find((tab) => tab.id === activeKey);

  const filteredWorkQuerry =
    activeKey === "1"
      ? data
      : activeKey === "1"
      ? data.filter((item) => item.status === "Pending")
      : [];

  const statusMark = (status) => {
    if (status === "Completed") {
      return (
        <div className="StatusMarkContainer">
          <span className="StatusMarkCompleted"></span>
          <span>{status}</span>
        </div>
      );
    }
    if (status === "Pending") {
      return (
        <div className="StatusMarkContainer">
          <span className="StatusMarkPending"></span>
          <span>{status}</span>
        </div>
      );
    }
    if (status === "In Progress") {
      return (
        <div className="StatusMarkContainer">
          <span className="StatusMarkInProgress"></span>
          <span>{status}</span>
        </div>
      );
    }
    if (status === "Blocked") {
      return (
        <div className="StatusMarkContainer">
          <span className="StatusMarkBlocked"></span>
          <span>{status}</span>
        </div>
      );
    }
    if (status === "Approved") {
      return (
        <div className="StatusMarkContainer">
          <span className="StatusMarkApproved"></span>
          <span>{status}</span>
        </div>
      );
    }
    if (status === "Approved") {
      return (
        <div className="StatusMarkContainer">
          <span className="StatusMarkApproved"></span>
          <span>{status}</span>
        </div>
      );
    }
    return (
      <div className="StatusMarkContainer">
        <span>{status}</span>
      </div>
    );
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(data[index]);
    setMenuOpen(null);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setMenuOpen(null);
  };

  const handleEditChange = (e) => {
    setEditValue({ ...editValue, [e.target.name]: e.target.value });
  };

  const handleEditSave = () => {
    const newData = [...data];
    newData[editIndex] = editValue;
    setData(newData);
    setEditIndex(null);
  };

  return (
    <div className="WorkQueery">
      {/* Заголовок */}
      {activeTab && (
        <div key={activeTab.id} className="content">
          <p className="TabTitle">{activeTab.titleOfTabs}</p>
        </div>
      )}

      {/* Таблиця */}
      <table>
        {filteredWorkQuerry.length > 0 && (
          <>
            <thead>
              <tr className="tableHeaderDane">
                <th>Originator</th>
                <th>Client/line</th>
                <th>Type</th>
                <th>Status</th>
                <th>Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredWorkQuerry.map((workAccount, index) => (
                <tr key={index} className="tableRowDane">
                  {editIndex === index ? (
                    // Режим редагування
                    <>
                      <td>
                        <input
                          name="originator"
                          value={editValue.originator || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="line"
                          value={editValue.line || ""}
                          onChange={handleEditChange}
                        />
                        <br />
                        <input
                          name="client"
                          value={editValue.client || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="type"
                          value={editValue.type || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="status"
                          value={editValue.status || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="created"
                          value={editValue.created || ""}
                          onChange={handleEditChange}
                        />
                        <button
                          className="editAndDeleteButtonStyle"
                          onClick={handleEditSave}
                        >
                          Save
                        </button>
                        <button
                          className="editAndDeleteButtonStyle"
                          onClick={() => setEditIndex(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="AvatarItemContainer">
                        <div className="AvatarItem">
                          <span className="font-medium text-gray-600 dark:text-gray-300">
                            {workAccount.originator
                              ? workAccount.originator
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .toUpperCase()
                              : "?"}
                          </span>
                        </div>
                        {workAccount.originator}
                      </td>
                      <td>
                        {workAccount.line}
                        <br />
                        {workAccount.client}
                      </td>
                      <td>{workAccount.type}</td>
                      <td className="StatusDisplay">
                        {statusMark(workAccount.status)}
                      </td>
                      <td>{workAccount.created}</td>
                      <td>
                        <div
                          className="DisplayBurgerMenu"
                          style={{ position: "relative" }}
                        >
                          <button
                            className="BurgerMenuButton"
                            onClick={() => setMenuOpen(index)}
                            title="Menu"
                          >
                            &#8942; {/* три вертикальні крапки */}
                          </button>
                          {menuOpen === index && (
                            <div className="editMenu">
                              <button
                                className="editAndDeleteButtonStyle"
                                onClick={() => handleEdit(index)}
                              >
                                Edit
                              </button>
                              <button
                                className="editAndDeleteButtonStyle"
                                onClick={() => handleDelete(index)}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </>
        )}
        {filteredWorkQuerry.length === 0 && (
          <tbody>
            <tr>
              <td colSpan="12" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default WorkQueery;

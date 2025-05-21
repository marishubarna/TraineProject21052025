import React, { useState, useEffect } from "react";
import "../styles/MyAccount.css";
import MyAccount from "../Json/DashBoardJson/MyAccount.json";

// Додаємо statusMark для кольорової мітки статусу
const statusMark = (color) => (
  <span
    style={{
      display: "inline-block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: color,
      marginRight: 6,
      verticalAlign: "middle",
    }}
  ></span>
);

const MyAccounts = () => {
  const [data, setData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("MyAccount");
    if (saved) {
      setData(JSON.parse(saved));
    } else {
      setData(MyAccount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("MyAccount", JSON.stringify(data));
  }, [data]);

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

  const filteredWorkQuerry = data; // якщо не потрібно фільтрувати

  return (
    <div className="MyAccountContainer">
      <h1 className="accountTitle">My accounts</h1>
      <table className="MyAccountTable">
        {data.length > 0 && (
          <>
            <thead>
              <tr>
                <th>ACCOUNT NAME/TYPE</th>
                <th>LINE</th>
                <th>BROKER</th>
                <th>DATE</th>
                <th>PREMIUM</th>
                <th>RATED</th>
                <th>PREMIUM</th>
                <th>LOSS RATIO</th>
                <th>APPETITE</th>
                <th>STATUS</th>
                <th>TRIAGE</th>
                <th>WINNABILITY</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredWorkQuerry.map((myAccount, index) => (
                <tr key={index} className="tableRowDane">
                  {editIndex === index ? (
                    <>
                      <td>
                        <input
                          name="Account name/type"
                          value={editValue["Account name/type"] || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="line"
                          value={editValue.line || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="broker"
                          value={editValue.broker || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="date"
                          value={editValue.date || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="premium"
                          value={editValue.premium || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="ratePremium"
                          value={editValue.ratePremium || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="premium"
                          value={editValue.premium || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="lossRatio"
                          value={editValue.lossRatio || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="appetite"
                          value={editValue.appetite || ""}
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
                          name="triage"
                          value={editValue.triage || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
                        <input
                          name="winnAbility"
                          value={editValue.winnAbility || ""}
                          onChange={handleEditChange}
                        />
                      </td>
                      <td>
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
                      <td className="">
                        <div className="AccountLineDisplay">
                          <td className="AccountLineStyleTitle">
                            {myAccount.Account}
                          </td>

                          <td className="AccountLineStyleparagraf">
                            {myAccount.nameType}
                          </td>
                        </div>
                      </td>
                      <td>{myAccount.line}</td>
                      <td>{myAccount.broker}</td>
                      <td>{myAccount.date}</td>
                      <td>{myAccount.premium}</td>
                      <td>{myAccount.ratePremium}</td>
                      <td>{myAccount.premium}</td>
                      <td className="LossRationContainer">
                        <div
                          style={{
                            background: myAccount.lossRatioBackground,
                            padding: "5px",
                            borderRadius: "40%",
                            height: "45px",
                            width: "45px",
                            textAlign: "center",
                          }}
                          className="LossRationDisplay"
                        >
                          {myAccount.lossRatio}
                        </div>
                      </td>
                      <td>
                        <div className="appetiteDisplay">
                          {myAccount.appetite}
                        </div>
                      </td>
                      <td className="StatusDisplay">
                        {statusMark(myAccount.statusColor)}
                        {myAccount.status}
                      </td>
                      <td>{myAccount.triage}</td>
                      <td>{myAccount.winnAbility}</td>
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
                            &#8942;
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
              {filteredWorkQuerry.length === 0 && (
                <tr>
                  <td colSpan="13" style={{ textAlign: "center" }}>
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

export default MyAccounts;

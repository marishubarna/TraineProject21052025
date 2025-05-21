import React, { useState } from "react";
import styled from "styled-components";
import "../styles/LoginToAccount.css";
import SelectImages from "../Accounts/SelectImages";

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 0px;
  min-width: auto;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.15);
`;

const LoginToAccount = ({ onSubmit, onSkip }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.username.value;
    const email = e.target.email.value;
    const userproject = e.target.userproject.value;
    onSubmit({ fullName, email, userproject, file });
  };

  return (
    <ModalOverlay>
      <StyledWrapper>
        <div className="login-container">
          <div className="heading">SignIn to your account</div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                required
                autoComplete="off"
                type="text"
                name="text"
                id="username"
              />
              <label htmlFor="username">Full Name</label>
            </div>
            <div className="input-field">
              <input
                required
                autoComplete="off"
                type="email"
                name="email"
                id="email"
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field">
              <input autoComplete="off" name="userproject" id="userproject" />
              <label htmlFor="userproject">Type of project</label>
            </div>
            <SelectImages file={file} setFile={setFile} />
            <div className="btn-container">
              <button className="btn" type="submit">
                Submit
              </button>
              <button
                type="button"
                className="btn"
                style={{ marginLeft: 8 }}
                onClick={onSkip}
              >
                Заповнити пізніше
              </button>
            </div>
          </form>
        </div>
      </StyledWrapper>
    </ModalOverlay>
  );
};

export default LoginToAccount;

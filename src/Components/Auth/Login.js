import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5000/login";

function Login({ userLog, user, adminLogged }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmitClick = (e) => {
    const admin = {
      userName: "admin",
      password: "1234",
    };

    e.preventDefault();

    if (userName && password) {
      if (userName === admin.userName && password === admin.password) {
        userLog(true);
        user(admin);
        adminLogged(true);
        navigate(`/home/admin`);
      } else {
        axios
          .get(API_URL, {
            params: {
              userName,
              password,
            },
          })
          .then((res) => {
            if (res.data.error === false && res.data.message.length !== 0) {
              userLog(true);
              user(res.data.message[0]);
              navigate(`/home/${res.data.message[0].userId}`);
            }
          })
          .catch((err) => console.error(err));
      }
    } else {
      setErr("Fill both userName and password fields");
      return;
    }
  };

  return (
    <Wrapper className="wrapper-page">
      <Container className="login-container">
        <div className="header-container">
          <div className="title-name">La Ceylon Globals</div>
          <div className="login-text">Login</div>
        </div>
        <div className="input-wrapper">
          <div className="userName-container input-container">
            <input type="text" name="userName" id="userName" onInput={(e) => setUserName(e.target.value)} required autoComplete="off" />
            <label htmlFor="userName" className="label-container">
              <span className="content-container">User Name</span>
            </label>
          </div>
          <div className="password-container input-container">
            <input type="password" name="password" id="password" onInput={(e) => setPassword(e.target.value)} required autoComplete="off" />
            <label htmlFor="password" className="label-container">
              <span className="content-container">Password</span>
            </label>
          </div>
        </div>
        {err ? <div className="error-message">*{err}</div> : <></>}
        <div className="btn-container">
          <button className="btn submit-btn" onClick={(e) => onSubmitClick(e)}>
            Submit
          </button>
          <button className="btn reset-btn">Reset</button>
        </div>
        <Link to="/register" className="create-acc">
          Create an account
        </Link>
      </Container>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  width: calc(100vw - 200px);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.form`
  width: 400px;
  height: max-content;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    margin-bottom: 10px;

    .title-name {
      width: 100%;
      font-size: 2.1rem;
      color: var(--white);
      background-color: var(--dark-gray);
      padding: 30px 30px;
      font-weight: 600;
      font-family: var(--font-family-heading);
      margin-bottom: 10px;
    }

    .login-text {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  .input-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .input-container {
      width: 100%;
      height: 50px;
      position: relative;
      z-index: 1;
      overflow: hidden;
      margin-bottom: 20px;

      input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--dark-gray);
        font-size: 1rem;
        padding-top: 28px;

        &:focus,
        &:valid {
          & + .label-container {
            &::after {
              border-color: var(--dark-gray);
              right: 0%;
            }

            .content-container {
              font-size: 0.7rem;
              bottom: 60%;
            }
          }
        }
      }

      .label-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-bottom: 1px solid var(--dark-gray);
        pointer-events: none;

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-bottom: 2px solid var(--dark-gray);
          right: 100%;
          bottom: 0;
          transition: all 0.3s ease;
        }

        .content-container {
          font-size: 0.9rem;
          color: var(--txt-clr-gray);
          position: absolute;
          bottom: 0;
          transition: all 0.3s ease;
        }
      }
    }
  }

  .btn-container {
    margin-top: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
      background-color: var(--dark-gray);
      width: 150px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .error-message {
    display: flex;
    justify-content: center;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  .create-acc {
    margin-top: 30px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

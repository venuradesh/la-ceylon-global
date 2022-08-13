import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitClick = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Link to="/login" className="back-btn">
        Back to Login
      </Link>
      <div className="form-container">
        <div className="header-container">
          <div className="logo-name">La Ceylon Globals</div>
          <div className="title">Registration</div>
        </div>
        <form className="form">
          <div className="fullName-container input-container">
            <input type="text" name="fullName" id="fullName" onChange={(e) => setName(e.target.value)} required autoComplete="off" />
            <label htmlFor="fullName" className="label-container">
              <span className="content-container">Name</span>
            </label>
          </div>
          <div className="idName-container input-container">
            <input type="text" name="idName" id="idName" onChange={(e) => setId(e.target.value)} required autoComplete="off" />
            <label htmlFor="idName" className="label-container">
              <span className="content-container">Id / BRP No. </span>
            </label>
          </div>
          <div className="postalCode-container input-container">
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)} required autoComplete="off" />
            <label htmlFor="postalCode" className="label-container">
              <span className="content-container">Postal Code </span>
            </label>
          </div>
          <div className="file-container input-container">
            <input type="file" name="file" id="file-input" required />
            <div className="selectBtn" onClick={() => document.getElementById("file-input").click()}>
              Click here to add Image of Id / BRP
            </div>
          </div>
          <div className="phone-container input-container">
            <input type="tel" name="phone" id="phone" onChange={(e) => setMobile(e.target.value)} required autoComplete="off" />
            <label htmlFor="phone" className="label-container">
              <span className="content-container">Phone Number </span>
            </label>
          </div>
          <div className="userName-container input-container">
            <input type="text" name="userName" id="userName" onChange={(e) => setUserName(e.target.value)} required autoComplete="off" />
            <label htmlFor="userName" className="label-container">
              <span className="content-container">User Name</span>
            </label>
          </div>
          <div className="password-container input-container">
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required autoComplete="off" />
            <label htmlFor="password" className="label-container">
              <span className="content-container">Password</span>
            </label>
          </div>

          <div className="btn-container">
            <button type="submit" onClick={onSubmitClick}>
              Submit
            </button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  width: calc(100vw - 200px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .back-btn {
    position: absolute;
    left: 0;
    top: 40px;
    background-color: var(--dark-gray);
    width: 200px;
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

  .form-container {
    .header-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 10px;
      margin-bottom: 10px;

      .logo-name {
        width: 100%;
        font-size: 2.1rem;
        color: var(--white);
        background-color: var(--dark-gray);
        padding: 30px 30px;
        font-weight: 600;
        font-family: var(--font-family-heading);
        margin-bottom: 10px;
        text-align: center;
      }

      .title {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 600;
      }
    }

    .form {
      width: 400px;

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
            bottom: -1px;
            transition: all 0.3s ease;
          }

          .content-container {
            font-size: 0.9rem;
            color: var(--dark-gray);
            position: absolute;
            bottom: 0;
            transition: all 0.3s ease;
          }
        }
      }

      .file-container {
        margin-top: 10px;
        margin-bottom: 10px;

        input {
          display: none;
        }

        .selectBtn {
          width: 100%;
          height: 50px;
          background-color: var(--dark-gray);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
        }
      }

      .btn-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          width: 150px;
          height: 50px;
          background-color: var(--dark-gray);
          color: var(--white);
          font-family: var(--font-family-normal);
          transition: all 0.3s ease;
          cursor: pointer;

          &:hover {
            transform: scale(1.02);
          }
        }
      }
    }
  }
`;

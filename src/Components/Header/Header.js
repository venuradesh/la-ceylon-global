import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div className="title">La Ceylon Globals</div>
      <div className="other-controls">
        <div className="home item">Home</div>
        <div className="about item">About</div>
        <div className="contact-us item">Contact Us</div>
      </div>
      <div className="btn-container loggedin">
        <div className="login-btn btn">Login</div>
        <div className="signup-btn btn">Register</div>
      </div>
      <div className="loggedin active">
        <div className="profile-container">A</div>
        <div className="name-container btn">Administrator</div>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: calc(100vw - 200px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: var(--light-gray);

  .title {
    width: max-content;
    height: 100%;
    background-color: var(--dark-gray);
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-heading);
    color: var(--light-gray);
    font-family: var(--font-family-heading);
    cursor: default;
    pointer-events: none;
  }

  .other-controls {
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .item {
      transition: all 0.3s ease;
      width: 100px;
    }

    .item:hover {
      font-weight: var(--font-w-600);
    }
  }

  .btn-container {
    width: max-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    cursor: pointer;

    .btn {
      transition: all 0.3s ease;
      width: 80px;
      display: flex;
      justify-content: center;
    }

    .btn:hover {
      font-weight: var(--font-w-600);
    }

    &.loggedin {
      display: none;
    }
  }

  .loggedin {
    display: none;

    &.active {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 10px;
      cursor: pointer;

      .profile-container {
        background-color: var(--dark-gray);
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--light-gray);
      }

      .btn {
        transition: all 0.2s ease;
        width: 130px;
      }

      .btn:hover {
        font-weight: var(--font-w-600);
      }
    }
  }
`;

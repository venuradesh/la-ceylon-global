import React from "react";
import styled from "styled-components";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function ItemCard() {
  return (
    <Container>
      <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="t shirt 1" />
      <div className="background-filter"></div>
      <div className="title-container">T shirt White</div>

      <div className="slide-up-container">
        <div className="price">Rs.3000</div>
        <div className="delivery">
          <LocalShippingOutlinedIcon className="shipping-icon" />
        </div>
      </div>
    </Container>
  );
}

export default ItemCard;

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
  }

  .background-filter {
    width: 100%;
    height: 100%;
    background-color: var(--dark-gray);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
  }

  .title-container {
    font-size: var(--font-size-normal);
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--light-gray);
    font-weight: var(--font-w-600);
  }

  .slide-up-container {
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: -100%;
    left: 0;
    background-color: var(--dark-gray);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    transition: all 0.5s ease;

    .price {
      color: var(--light-gray);
      cursor: default;
    }

    .shipping-icon {
      color: var(--light-gray);
      cursor: pointer;
    }
  }

  &:hover {
    .slide-up-container {
      bottom: 0;
    }
  }
`;

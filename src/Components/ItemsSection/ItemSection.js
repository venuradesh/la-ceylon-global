//dependencies
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//components
import ItemCard from "./ItemCard";
import CartItem from "../Cart/CartItem";

const API_URL = "http://localhost:5000/items";

function ItemSection() {
  const [data, setData] = useState(null);
  const [cartArray, setCartArray] = useState([]);
  const [itemQty, setItemQty] = useState(0);
  const [itemClicked, setItemClicked] = useState(false);
  const [err, setErr] = useState("");
  const [clickedItemDetails, setClickedItemDetails] = useState({});
  const [cartClick, setCartClick] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useMemo(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setData(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container>
      {data && data.map((item, index) => <ItemCard data={item} key={index} itemClick={setItemClicked} itemDetails={setClickedItemDetails} />)}
      {itemClicked ? (
        <PopUpContainer>
          <div
            className="background"
            onClick={() => {
              setItemClicked(false);
              setErr("");
            }}
          ></div>
          <div className="popup">
            <div
              className="header"
              onClick={() => {
                setItemClicked(false);
                setErr("");
              }}
            >
              <CloseIcon className="close-icon" />
            </div>
            <div className="input-field">
              <span>Qunatity Needed: </span>
              <input type="number" onInput={(e) => setItemQty(e.target.value)} name="quantity-needed" id="quantity-needed" max={clickedItemDetails.quantityAvailable} />
            </div>
            <div className="error-container">{err ? <div className="error">{err}</div> : <></>}</div>
            <div className="btn-container">
              <div
                className="add-to-cart"
                onClick={() => {
                  if (itemQty <= clickedItemDetails.quantityAvailable) {
                    setCartArray([...cartArray, { item: clickedItemDetails, qty: itemQty }]);
                    setItemClicked(false);
                  } else {
                    setErr(`Maximum stocks available: ${clickedItemDetails.quantityAvailable}`);
                  }
                }}
              >
                Add to Cart
              </div>
            </div>
          </div>
        </PopUpContainer>
      ) : (
        <></>
      )}
      <Cart className="cart-container" onClick={() => setCartClick(true)}>
        <ShoppingCartIcon />
        <div className="itemsCount">{cartArray.length}</div>
      </Cart>
      {cartClick ? (
        <CartContainer>
          <div className="background" onClick={() => setCartClick(false)}></div>
          <div className="close-btn" onClick={() => setCartClick(false)}>
            <CloseIcon className="close-icon" />
          </div>
          <div className="cart">
            <div className="cart-items">{cartArray.length !== 0 ? cartArray.map((cartItem, index) => <CartItem items={cartItem} key={index} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />) : <div className="no-items">No Items in the Cart</div>}</div>
            <div className="btn-container">
              <div className="total-pay">
                <span>Total: Rs.</span> {totalPrice}/-
              </div>
              <div className="btns">
                <div
                  className="btn"
                  onClick={() => {
                    setCartArray([]);
                    setTotalPrice(0);
                  }}
                >
                  Clear All
                </div>
                <div className="btn">Deliver To Home</div>
              </div>
            </div>
          </div>
        </CartContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default ItemSection;

const Container = styled.div`
  position: relative;
  top: 100px;
  padding-top: 20px;
  width: calc(100vw - 200px);
  height: calc(100vh - 120px);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: center;
`;

const PopUpContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .background {
    width: 100vw;
    height: 100vh;
    background-color: var(--light-gray);
    position: absolute;
    top: -120;
    left: -100;
    opacity: 0.8;
    z-index: -10;
  }

  .popup {
    width: 400px;
    height: max-content;
    background-color: var(--dark-gray);
    z-index: 10;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 30px;
    position: relative;

    .header {
      width: 30px;
      height: 30px;
      color: var(--dark-gray);
      position: absolute;
      top: -40px;
      left: calc(100% - 30px);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--dark-gray);
        color: var(--light-gray);
      }
    }

    .input-field {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: var(--light-gray);
      }

      input {
        width: 150px;
        padding: 10px 10px;
        background-color: var(--light-gray);
        outline: none;
        font-size: 1rem;
        border: none;
      }
    }

    .error-container {
      margin-top: -15px;
      margin-bottom: -15px;

      .error {
        color: var(--light-gray);
      }
    }

    .btn-container {
      width: 100%;
      height: 50px;

      .add-to-cart {
        width: 100%;
        height: 100%;
        background-color: var(--light-gray);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: var(--dark-gray);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--light-gray-alt);
        }
      }
    }
  }
`;

const Cart = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--dark-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  bottom: 20px;
  border-radius: 50%;
  color: var(--light-gray);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  .itemsCount {
    width: 20px;
    height: 20px;
    background-color: var(--light-gray);
    color: var(--dark-gray);
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }
`;

const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .background {
    width: 100vw;
    height: 100vh;
    background-color: var(--light-gray);
    position: absolute;
    top: -120;
    left: -100;
    opacity: 0.8;
    z-index: -10;
  }

  .close-btn {
    position: absolute;
    top: 0px;
    right: calc(50% - 380px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: var(--dark-gray);
      color: var(--light-gray);
    }
  }

  .cart {
    width: 700px;
    height: 600px;
    background-color: var(--light-gray);
    box-shadow: 0 0 15px 0 var(--dark-gray);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .cart-items {
      width: 100%;
      height: 100%;
      overflow-y: auto;

      .no-items {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .btn-container {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      .total-pay {
        font-size: var(--font-size-heading);
        font-weight: 700;

        span {
          margin-right: 10px;
          font-size: var(--font-size-normal);
          color: var(--light-gray-alt);
        }
      }

      .btns {
        display: flex;
        column-gap: 20px;

        .btn {
          padding: 0 20px;
          height: 50px;
          background-color: var(--dark-gray);
          display: flex;
          align-items: center;
          color: var(--light-gray);
          cursor: pointer;
        }
      }
    }
  }
`;

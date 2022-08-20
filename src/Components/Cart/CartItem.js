import React, { useMemo } from "react";
import styled from "styled-components";

function CartItem({ items, totalPrice, setTotalPrice }) {
  useMemo(() => {
    setTotalPrice(totalPrice + parseInt(items.qty) * items.item.price);
  }, []);

  return (
    <Container>
      <div className="image-container">
        <img src={`http://localhost:5000/uploads/${items.item.coverImage}`} alt="cover" />
      </div>
      <div className="details-container">
        <div className="title">{items.item.name}</div>
        <div className="qty">
          <div className="qty-available">
            <span>Quantity Available: </span> {items.item.quantityAvailable}
          </div>
          <div className="qty-ordered">
            <span>Quantity Ordered: </span>
            {items.qty}
          </div>
        </div>
        <div className="price-container">
          <div className="unit-price">
            <span>Unit Price: </span>Rs.{items.item.price}/-
          </div>
          <div className="total-price">
            <span>Total Price: </span>Rs.{parseInt(items.qty) * items.item.price}/-
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  column-gap: 20px;
  border: 1px solid var(--light-gray-alt);
  margin-bottom: 20px;
  padding-right: 20px;

  .image-container {
    flex: 1;
    height: 100%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      background-position: center;
      background-size: cover;
    }
  }

  .details-container {
    flex: 3;

    .title {
      font-size: var(--font-size-sub-heading);
      text-transform: uppercase;
      font-weight: var(--font-w-700);
      margin-bottom: 20px;
    }

    .qty {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      span {
        font-size: 0.8rem;
        color: var(--light-gray-alt);
        font-weight: 600;
        margin-right: 5px;
      }

      .qty-available {
        font-size: 0.8rem;
      }

      .qty-ordered {
        font-size: var(--font-size-normal);
        font-weight: 800;
      }
    }

    .price-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      justify-content: space-evenly;

      span {
        font-size: 0.8rem;
        color: var(--light-gray-alt);
        font-weight: 600;
        margin-right: 5px;
      }

      .unit-price {
        font-size: 1rem;
        margin-bottom: 10px;

        span {
          font-size: 0.8rem;
          color: var(--light-gray-alt);
        }
      }

      .total-price {
        font-size: var(--font-size-sub-heading);

        span {
          font-weight: 800;
        }
      }
    }
  }
`;

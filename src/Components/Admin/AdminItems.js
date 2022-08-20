//dependencies
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import AdminItemCard from "./AdminItemCard";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";

//API URL
const API_URL = "http://localhost:5000/items";

function AdminItems() {
  const [items, setItems] = useState([]);
  const [addClicked, setAddClicked] = useState(false);
  const [name, setName] = useState("");
  const [qtyAvaialble, setQtyAvailable] = useState(0);
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [uploaded, setUploaded] = useState(false);

  useMemo(() => {
    axios
      .get(API_URL)
      .then((res) => setItems(res.data.message))
      .catch((err) => console.error(err));
  }, [uploaded]);

  const onFileChange = () => {
    setFile(document.getElementById("file-image").files[0]);
    setFileName(document.getElementById("file-image").files[0].name);
  };

  const onSubmitClick = (e) => {
    e.preventDefault();

    if (name && qtyAvaialble && price && fileName) {
      const data = new FormData();
      data.append("coverImage", file, fileName);
      data.append("name", name);
      data.append("qtyAvailable", qtyAvaialble);
      data.append("price", price);

      axios
        .post(API_URL, data)
        .then((res) => {
          if (res.data.error === false) {
            setUploaded(true);
            setAddClicked(false);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
    }
  };

  const onResetClick = () => {
    setFileName("");
  };

  return (
    <Container>
      {items.length !== 0 && items.map((item, index) => <AdminItemCard data={item} key={index} />)}
      <AddItem className="cart-container" onClick={() => setAddClicked(true)}>
        <AddIcon />
      </AddItem>
      {addClicked ? (
        <AddItemsContainer>
          <div className="background" onClick={() => setAddClicked(false)}></div>
          <div className="close-btn" onClick={() => setAddClicked(false)}>
            <CloseIcon className="close-icon" />
          </div>
          <form className="itemDetails">
            <div className="header">Add an Item</div>
            <div className="name-container input-container">
              <input type="text" name="name" id="name" onInput={(e) => setName(e.target.value)} required autoComplete="off" />
              <label htmlFor="name" className="label-container">
                <span className="content-container">Name</span>
              </label>
            </div>
            <div className="price-container input-container">
              <input type="number" name="price" id="price" onInput={(e) => setPrice(e.target.value)} required autoComplete="off" />
              <label htmlFor="price" className="label-container">
                <span className="content-container">Price</span>
              </label>
            </div>
            <div className="qty-container input-container">
              <input type="number" name="qty" id="qty" onInput={(e) => setQtyAvailable(e.target.value)} required autoComplete="off" />
              <label htmlFor="qty" className="label-container">
                <span className="content-container">Qunatity Available</span>
              </label>
            </div>
            <div className="file-container input-container">
              <input type="file" name="image" id="file-image" required onChange={onFileChange} />
              <div className="selectBtn" onClick={() => document.getElementById("file-image").click()}>
                {!fileName ? <span>Select a Thumbnail</span> : <span>{fileName}</span>}
              </div>
            </div>
            <div className="btn-container">
              <button className="btn" type="submit" onClick={onSubmitClick}>
                Post
              </button>
              <button className="btn" type="reset" onClick={onResetClick}>
                Reset
              </button>
            </div>
          </form>
        </AddItemsContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default AdminItems;

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

const AddItem = styled.div`
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
`;

const AddItemsContainer = styled.div`
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
    top: 70px;
    right: calc(50% - 280px);
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

  .itemDetails {
    width: 500px;
    height: max-content;
    background-color: var(--light-gray);
    box-shadow: 0 0 15px 0 var(--dark-gray);
    padding: 30px;
    display: flex;
    flex-direction: column;

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

    .header {
      font-size: var(--font-size-heading);
      text-align: center;
    }

    .btn-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        width: 200px;
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
`;

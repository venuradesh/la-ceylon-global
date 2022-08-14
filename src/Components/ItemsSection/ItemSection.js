//dependencies
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";

//components
import ItemCard from "./ItemCard";
const API_URL = "http://localhost:5000/items";

function ItemSection() {
  const [data, setData] = useState(null);

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

  return <Container>{data && data.map((item, index) => <ItemCard data={item} key={index} />)}</Container>;
}

export default ItemSection;

const Container = styled.div`
  position: relative;
  top: 100px;
  padding-top: 20px;
  width: calc(100vw - 200px);
  height: calc(100vh - 120px);
  overflow-y: auto;
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: center;
`;

//dependencies
import React from "react";
import styled from "styled-components";

//components
import ItemCard from "./ItemCard";

function ItemSection() {
  return (
    <Container>
      <ItemCard />
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
  display: flex;
  column-gap: 20px;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: center;
`;

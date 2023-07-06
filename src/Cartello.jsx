import { useContext } from "react";
import { CartellinoContext } from "./App";
import { styled } from "styled-components";
import Logo from "./Logo";
import Core from "./Core";
import Title from "./Title";
const CartelloStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20cm;
  min-height: 30cm;
  margin: 1cm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
function Cartello() {
  const { title, listino, prezzo, sconto } = useContext(CartellinoContext);
  return (
    <CartelloStyled>
      <Title title={title} />
      <Core listino={listino} prezzo={prezzo} sconto={sconto} />
      <Logo />
    </CartelloStyled>
  );
}

export default Cartello;

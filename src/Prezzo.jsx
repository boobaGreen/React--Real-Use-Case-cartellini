import { styled } from "styled-components";
const PrezzoStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50px;
  top: 200px;
  font-size: 160px;
  color: white;
`;

function Prezzo(props) {
  return <PrezzoStyled>€ {props.prezzo}</PrezzoStyled>;
}

export default Prezzo;

import { styled } from "styled-components";
const ListinoStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 60px;
  top: 60px;
  font-size: 50px;
  color: white;
`;
const LineStyled = styled.div`
  position: relative;
  top: -80px;
  left: -10px;
  width: calc(90px * 2);

  border-bottom: 3px solid white;

  transform: rotate(-30deg);

  transform-origin: right;
`;
function Listino(props) {
  return (
    <ListinoStyled>
      <div>Listino</div>
      <div>€ {props.listino}</div>
      <LineStyled></LineStyled>
    </ListinoStyled>
  );
}

export default Listino;

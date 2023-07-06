import styled from "styled-components";
import Listino from "./Listino";
import Sconto from "./Sconto";
import Prezzo from "./Prezzo";
const CoreStyled = styled.div`
  background-color: var(--color-brand-blue);
  color: white;
  width: 20cm;
  flex-grow: 1;
`;

function Core(props) {
  return (
    <CoreStyled>
      <Listino listino={props.listino} />
      <Sconto sconto={props.sconto} />
      <Prezzo prezzo={props.prezzo} />
    </CoreStyled>
  );
}

export default Core;

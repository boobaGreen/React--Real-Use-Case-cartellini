import { styled } from "styled-components";
import { useContext } from "react";
import { CartellinoContext } from "./App";

const SelectStyled = styled.select`
  background-color: white;
  cursor: pointer;
`;
const InputStyled = styled.input`
  cursor: pointer;
`;
const DivStyled = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 6rem;
  font-size: 1.5em;
`;
const BlockStyled = styled.div`
  display: flex;
  gap: 1rem;
`;

function Options() {
  const {
    title,
    setTitle,
    listino,
    setListino,
    prezzo,
    setPrezzo,
    sconto,
    setSconto,
  } = useContext(CartellinoContext);
  let scontoJs = Math.trunc(100 - (prezzo / listino) * 100);
  setSconto(scontoJs);
  console.log(sconto);
  return (
    <DivStyled>
      <BlockStyled>
        <span>Tipo: </span>
        <SelectStyled
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option value="OFFERTA">OFFERTA</option>
          <option value="SOTTOCOSTO">SOTTOCOSTO</option>
          <option value="ULTIMO PEZZO">ULTIMO PEZZO</option>
          <option value="BLACK FRIDAY">BLACK FRIDAY</option>
          <option value="RIGENERATO">RIGENERATO</option>
        </SelectStyled>
      </BlockStyled>
      <BlockStyled>
        <span>Listino: </span>
        <InputStyled
          type="number"
          placeholder="Prezzo di listino"
          value={listino}
          onChange={(e) => setListino(e.target.value)}
        ></InputStyled>
      </BlockStyled>
      <BlockStyled>
        <span>Prezzo: </span>
        <InputStyled
          type="number"
          placeholder="Prezzo di listino"
          value={prezzo}
          onChange={(e) => setPrezzo(e.target.value)}
        ></InputStyled>
      </BlockStyled>
      <BlockStyled>
        <span> Sconto : {sconto} %</span>
      </BlockStyled>
    </DivStyled>
  );
}

export default Options;

import { useState } from "react";
import { createContext } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Options from "./Options";
import Cartello from "./Cartello";
import Button from "./Button";
import { styled } from "styled-components";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const CartellinoContext = createContext(undefined);
const BlockStyled = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;

function App() {
  const printRef = useRef();
  const [title, setTitle] = useState("OFFERTA");
  const [prezzo, setPrezzo] = useState(0);
  const [listino, setListino] = useState(0);
  const [sconto, setSconto] = useState(0);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <>
      <GlobalStyles />
      <CartellinoContext.Provider
        value={{
          title,
          setTitle,
          listino,
          setListino,
          prezzo,
          setPrezzo,
          sconto,
          setSconto,
        }}
      >
        <Options />
        <BlockStyled>
          <Button onClick={handlePrint}> Stampa </Button>
        </BlockStyled>
        <div ref={printRef}>
          <Cartello />
        </div>
      </CartellinoContext.Provider>
    </>
  );
}

export { App, CartellinoContext };

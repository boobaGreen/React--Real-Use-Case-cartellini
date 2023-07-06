import { styled } from "styled-components";
const ScontoStyled = styled.div`
  position: relative;
  left: 500px;
  top: 140px;
  font-size: 38px;
  color: var(--color-brand-blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: white;
  height: 180px;
  width: 180px;
`;
function Sconto(props) {
  return (
    <ScontoStyled>
      <p>Sconto</p>
      <div>
        {props.sconto}
        <span>%</span>
      </div>
    </ScontoStyled>
  );
}

export default Sconto;

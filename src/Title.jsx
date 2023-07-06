import styled from "styled-components";
const TitleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  color: white;
  width: 20cm;
  height: 5cm;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 88px;
`;
function Title(props) {
  return <TitleStyled>{props.title}</TitleStyled>;
}

export default Title;

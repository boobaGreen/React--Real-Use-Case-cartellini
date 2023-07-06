import { styled } from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;
function Footer() {
  return (
    <FooterStyled>
      Ver 1.0 By Claudio Dall'Ara for Maroni Group Srl
    </FooterStyled>
  );
}

export default Footer;

import styled from "styled-components";

const StyledLogo = styled.div`
  width: 19cm;
  max-height: 5cm;
`;

const Img = styled.img``;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.jpg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;

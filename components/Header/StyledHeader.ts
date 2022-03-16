import styled from "styled-components";

export const RootHeader = styled.header`
  padding: 2.5rem 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperImage = styled.div`
  display: grid;
  padding-left: 7px;
`;

export const WrapperImageDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: grid;
  }
`;
export const WrapperImageMobile = styled.div`
  display: grid;

  @media (min-width: 768px) {
    display: none;
  }
`;

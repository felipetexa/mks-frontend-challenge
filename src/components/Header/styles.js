import styled from 'styled-components';

export const Nav = styled.nav`
  height: 10vh;
  background-color: #0F52BA;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledLogo = styled.a` 
  padding-left: 6.5rem;
  font-style: normal;
  color: white;
  font-weight: 500;
  font-size: 3rem;
  line-height: 1.9rem;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledSubLogo = styled.p`
  color: white;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 1.9rem;
  padding-top: 0.6rem
`;

export const CartButton = styled.a`
  padding-right: 8.8rem;
  cursor: pointer;
`;
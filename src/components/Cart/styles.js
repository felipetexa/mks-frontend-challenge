import styled from "styled-components";

export const CartWrapper = styled.div`
  background-color: #0F52BA;
  position: fixed;
  z-index: 1;
  height: 100%;
  top: 0;
  right: 0;
  width: 48.6rem;
  right: ${props => props.cart ? '0' : '-100%'};
  animation: showCart .4s;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  @keyframes showCart {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 48.6rem;
    }
  }
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & h1 {
    position: fixed;
    top: 0;
    left: 0.5;
    margin-top: 3.6rem;
    margin-left: 4.7rem;
    width: 18rem;
    height: 5.6rem;
    line-height: 3.3rem;

    color: white;
    font-size: 2.7rem;
  }

  & button {
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 3.9rem;
    margin-right: 2.2rem;
    cursor: pointer;
    background-color: #0F52BA;
    border: none;
  }
`

export const CartCard = styled.div`
  margin-top: 16.2rem;
  margin-left: 4.7rem;
  margin-right: 6rem;
  padding-block: 1.9rem;
  background-color: white;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & h2{
    font-weight: 400;
    font-size: 1.3rem;
    width: 11.3rem;
    color: #2C2C2C;
  }

  & h3 {
    font-weight: 700;
    font-size: 1.4rem;
  }

`

export const QtdCounter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0.3px solid #BFBFBF;
  border-radius: .4rem; 
  width: 5rem;

  & button {
    text-decoration: none;
    background: white;
    color: black;
    font-size: .8rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    border: none;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  & p {
    font-size: .8rem;
    border: 0 1px solid;
  }
`

export const DeleteButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    
  & svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`

export const TotalPrice = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 9.7rem;
  display: flex;
  justify-content: space-between;
  gap: 20rem;
  padding-left: 4.7rem;
  padding-right: 6.3rem;
  background-color: #0F52BA;
  & h2{
    color: white;
    font-size: 2.8rem;
  }
`

export const PlaceOrder = styled.button`
    position: fixed;
    bottom: 0;
    width: 48.6rem;
    height: 9.7rem;
    border: none;
    text-decoration: none;
    background: #000000;
    color: #ffffff;
    font-size: 2.8rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;  
`
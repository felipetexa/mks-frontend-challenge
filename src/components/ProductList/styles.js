import styled from "styled-components";

export const ProductsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 11.7rem 24.7rem;
`;

export const Card = styled.div`
  background-color: #fff;
  height: 30rem;
  width: 21.7rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  padding-top: 1.8rem;
  margin-bottom: 3rem; 
  & span {
    padding-left: 3.5rem;
  }
  & p {
    font-weight: 300;
    font-size: 1rem;
    padding-inline: 1.2rem;
    width: 19rem;
    color: #2C2C2C;
    margin-bottom: 2rem;
  }
`

export const TitlePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.4rem;
  max-height: 5rem;
  padding-inline: 1.4rem;
  & h2{
    font-weight: 400;
    width: 12.4rem;
    font-size: 1.6rem;
    color: #2C2C2C;
  }
  & h3 {
    font-weight: 700;
    font-size: 1.5rem;
    color: white;
    background-color: #373737;
    border-radius: .5rem;
    padding: .4rem .4rem;
  }
`

export const BuyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 21.8rem;
    border: none;
    padding: .7rem 5.7rem;
    margin: 0;
    text-decoration: none;
    background: #0F52BA;
    color: #ffffff;
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    border-radius: 0 0 .8rem .8rem;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
`
export const Loading = styled.div`
background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #e7edf1 100%
  );
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`

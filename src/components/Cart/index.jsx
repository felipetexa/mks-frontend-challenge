import Image from 'next/image';
import testImage from '../../../public/testImage.svg'
import { CartWrapper, CartHeader, CartCard, QtdCounter, DeleteButton, TotalPrice, PlaceOrder } from './styles';
import { useState } from 'react';

export default function Cart({active}, props) {

  const [count, setCount] = useState(1)

  const closeCart = () => {
    active(false)
  }

  return (
    <CartWrapper cart={active}>
      <CartHeader>
        <h1>Carrinho de compras</h1>
        <button onClick={closeCart}><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="black"/>
<path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white"/>
        </svg></button>
      </CartHeader>
      
      <CartCard props={1}>
         <Image width='46px' height='57px' src={testImage} alt={'teste'}/>
         <h2>Apple Watch Series 4 GPS</h2>
         <span>
          <p>Qtd</p>
          <QtdCounter>
            <button onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
          </QtdCounter>
         </span>
         <h3>R$399</h3>
         <DeleteButton><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="black"/>
<path d="M26.42 26L20.54 18.44L26.084 11.272H23.9L19.476 17.04L15.052 11.272H12.812L18.356 18.44L12.532 26H14.772L19.476 19.84L24.152 26H26.42Z" fill="white"/>
        </svg></DeleteButton>
      </CartCard>
      <TotalPrice>
        <h2>Total:</h2>
        <h2>R$399</h2>
      </TotalPrice>  
      <PlaceOrder>
        Finalizar Compra
      </PlaceOrder>
    </CartWrapper>

  )
}

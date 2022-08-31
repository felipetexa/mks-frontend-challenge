import closeCart from '../../../public/closeCart.svg';
import Image from 'next/image';
import { CartWrapper } from './styles';

export default function Cart() {
  return (
    <CartWrapper>
      <div>
        <h1>Carrinho de compras</h1>
        <button><Image src={closeCart} alt={'Close'}/></button>
      </div>
      <div>
        <div>Order List</div>
      </div>
      <div>
        Total
      </div>  
      <div> Finalizar compra</div>
    </CartWrapper>
  )
}

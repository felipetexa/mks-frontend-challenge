import Image from 'next/image';
import { ProductsWrapper, Card, TitlePrice, BuyButton, Loading } from './styles';
import buy from '../../../public/buy.svg';
import { useState, useEffect } from 'react';
import Cart from '../Cart';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductList() {

  const URL_API = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC';

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(false);
  const [productsCart, setProductsCart] = useState([]);

  
  const fetchAllData = async () => {
    try{
      setLoading(true);
      const response = await fetch(URL_API);
      const data = await response.json();

      if(!data) throw 'Requisition problem';
      setData(data);
    }
    catch (error){
      console.log(error)
    } finally {
      setLoading(false);
    }
  }


  const addProductToCart = ({ id, title, price }) => {
    const copyProductsCart = [...productsCart];
    console.log('add productsCart', productsCart);

    const item = copyProductsCart.find((product) => product.id == id)

    if(!item) {
      copyProductsCart.push({
        id,
        title,
        price,
        qtd: 1,
      })
      console.log('copy productsCart', copyProductsCart)
    } else {
      item.qtd = item.qtd + 1;
    }

    setCart(!cart)
    setProductsCart(copyProductsCart)
  }

  // const removeProductFromCart = (id) => {
  //   const copyProductsCart = [...productsCart];

  //   const item = copyProductsCart.find((product) => product.id == id)

  //   if(item && item.qtd > 1) {
  //     item.qtd = item.qtd - 1;
  //     setProductsCart(copyProductsCart);
  //   }else{
  //     const arrayFiltered = copyProductsCart.filter(product => product.id !== id)
  //     setProductsCart(arrayFiltered)
  //   }
  // }

  // const showCart = () => {
  //   setCart(!cart)
  //   addProductToCart()
  // };

  const clearCart = () => {
    setProductsCart([]);
  }

  const buyClick = (props) => {
    console.log('buyClick', props)
    addProductToCart(props)
  };

  useEffect(() => {
    fetchAllData();
  }, [])

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products)
    };
  }, [data])

  return (
    <ProductsWrapper>
      {loading && !data && 
      <Skeleton />
      }
      {products && products.map((item) => (
      <Card key={item.id}>
        <span>
          <Image width='147px' height='140px' src={item.photo} alt={item.name}/>
        </span>
        <TitlePrice>
          <h2>{item.name}</h2>
          <h3>R${item.price}</h3>
        </TitlePrice>
          <p>Redesigned from scratch and completely revised.</p>
        <BuyButton onClick={buyClick}><Image src={buy} alt={'buy button'}/>COMPRAR</BuyButton>
      </Card>
      ))}
      {cart && <Cart items={productsCart} active={setCart} />}
    </ProductsWrapper>
  )
}
import Image from 'next/image';
import { ProductsWrapper, Card, TitlePrice, BuyButton } from './styles';
import buy from '../../../public/buy.svg';
import { useState, useEffect } from 'react';

export default function ProductList() {

  const URL_API = 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC';

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

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
      <p>Carregando informações</p>
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
        <BuyButton><Image src={buy} alt={'buy button'}/>COMPRAR</BuyButton>
      </Card>
      ))}
    </ProductsWrapper>
  )
}
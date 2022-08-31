import GlobalStyle from '../globalStyles';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';

export default function Layout({children}) {
  return(
    <div>
      <GlobalStyle />
      <Header />
      <ProductList />
      <Cart />
      <Footer />
    </div>
  )
}

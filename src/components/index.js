import GlobalStyle from '../globalStyles';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';

export default function Layout({children}) {
  return(
    <div>
      <GlobalStyle />
      <Header />
      <ProductList />
      <Footer />
    </div>
  )
}

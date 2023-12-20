import Main from './components/main/Main';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/cards/Cards';
import TopWrapper from './components/topBar/TopWrapper';
import './App.css';
import { lazy, Suspense } from 'react';
import { useEffect, useState } from 'react';
import Badge from './components/badge/Badge';
import Quote from './components/quote/Quote';
import Shopping from './components/shopping/Shopping';
import useProductStore from './components/shoppingStore/store';
import Background from './components/bg-animation/Background';
import Modal from './components/cartModal/Modal';
import Footer from './components/footer/Footer';
const Products = lazy(() => import('./components/shopping/Shopping'));
function App() {
  
  const { fetchAllProducts, modal } = useProductStore();


useEffect(()=> {
  const fetchP =  async () => {
fetchAllProducts()
  };
 fetchP()

      AOS.init();
   
}, [])

  const [open, setOpen] = useState(false)
  const showTopWrapper = show => {
  setOpen(show);
}

  return (
    <div className='container mx-auto font-mona '>
      <TopWrapper open={open}/>
      <Background />
      <Main showTop={showTopWrapper}/>
      {modal && <Modal />}
      <Badge />
      <Cards />
      <Quote />
      <Suspense fallback={<h1 className='text-2xl font-medium text-center'>Fetching products....</h1>}>
      <Products />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

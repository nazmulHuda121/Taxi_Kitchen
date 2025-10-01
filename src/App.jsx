import { Suspense } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TitleSection from './Components/TitleSection/TitleSection';
import OrderContainer from './Components/OrderContainer/OrderContainer';
import { ToastContainer } from 'react-toastify';

const loadOrders = () => fetch('/order.json').then((res) => res.json());

function App() {
  const ordersPromise = loadOrders();
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <TitleSection />
        <Suspense fallback={<p>Loading.....</p>}>
          <OrderContainer ordersPromise={ordersPromise} />
        </Suspense>
      </main>
      <footer>
        <span>This footer</span>
      </footer>
      <ToastContainer />
    </>
  );
}

export default App;

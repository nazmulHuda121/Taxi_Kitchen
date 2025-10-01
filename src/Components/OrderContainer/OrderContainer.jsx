import { use, useState } from 'react';
import States from '../Stares/States';
import OrderCard from '../Card/OrderCard';
import CookingCard from '../Card/CookingCard';
import { toast } from 'react-toastify';
import ReadyCard from '../Card/readyCard';

const OrderContainer = ({ ordersPromise }) => {
  const data = use(ordersPromise);
  const [orders, setOrders] = useState(data);
  const [cookingItems, setCookingItems] = useState([]);
  const [readyItems, setReadyItems] = useState([]);
  //   console.log(readyItems);

  //   Handle Orders
  const handleOrder = (order) => {
    const isExist = cookingItems.find((item) => item.id == order.id);
    if (isExist) {
      toast('Already Order this item');
      return;
    }
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
  };

  //   Handle Cooking
  const handleCooking = (order) => {
    // order.cookedAt = new Date().toLocaleTimeString();
    const newReadyItems = [...readyItems, order];
    setReadyItems(newReadyItems);
    const remaining = cookingItems.filter((item) => item.id !== order.id);
    setCookingItems(remaining);

    const remainingOrders = orders.filter((item) => item.id);
    setOrders(remainingOrders);
  };
  return (
    <>
      <States
        totalOrder={orders.length}
        totalCooking={cookingItems.length}
        totalReadyItems={readyItems.length}
      />
      <section className="w-11/12 mx-auto py-10 grid  grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7">
          <h2 className="font-bold text-4xl">Currrent Orders</h2>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                handleOrder={handleOrder}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-bold text-4xl">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard
                handleCooking={handleCooking}
                key={order.id}
                order={order}
              ></CookingCard>
            ))}
          </div>
          <h2 className="font-bold text-4xl">Order Ready</h2>
          <div className="space-y-3">
            {readyItems.map((order) => (
              <ReadyCard order={order} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderContainer;

import { useState, useEffect } from "react";
import { map } from "lodash";
import { Order as OrderCtrl } from "@/app/api";
import { useAuth } from "@/hooks";
import { Order } from "./Order/page";
import { NoResult } from "@/components/Shared/page";


const orderCtrl = new OrderCtrl();

export function Orders() {
  const [orders, setOrders] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await orderCtrl.getAll(user.id);
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      } 
    })();
  }, []);

  if (!orders) return <NoResult text="No tienes ningun producto comprado" />;

  return (
    <div>
      {map(orders, (order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}

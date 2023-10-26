"use client"
import { useState, useEffect } from "react";
//import { usePathname, useSearchParams } from 'next/navigation';
import { Game } from "@/app/api";
import { useCart } from "@/hooks";

import { Seo } from "@/components/Shared/page";
import { CartLayout } from '../../layouts/CartLayout/CartLayout';
import { Cart } from '../../components/Cart/page';

const gameCtrl = new Game();

export default function CartPage(context) {
  const { searchParams: { step = 1 } } = context;
  const currentStep = Number(step);
  const [games, setGames] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for await (const item of cart) {
          const response = await gameCtrl.getGameById(item.id);
          data.push({ ...response.data, quantity: item.quantity }); //TODO: Le agrega la data mas la propiedad quantity
        }
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  return (
    <>
      <Seo title="Carrito" />
      
      <CartLayout context={context}>
        {currentStep === 1 && <Cart.StepOne games={games} />}
        {currentStep === 2 && <Cart.StepTwo games={games} />}
        {currentStep === 3 && <Cart.StepThree />}
      </CartLayout>
      
    </>
  );
}

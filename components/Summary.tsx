"use client";
import React, { useEffect } from "react";
import Currency from "./Currency";
import useCart from "@/hooks/useCart";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { url } from "@/actions/actions";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import MainButton from "./MainButton";

const Summary = () => {
  const items = useCart((state) => state.items);
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAllItems);
  const totalPrice = items?.reduce(
    (total, item) => total + Number(item?.product.price) * item.quantity,
    0,
  );

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful processed");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Payment process cancelled");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    const res = await axios.post(`${url}/checkout`, {
      productIds: items?.map((item) => item?.product.id),
    });
    toast.loading("Redirecting to stripe...");
    window.location = res.data.url;
  };
  return (
    <div className="mt-16 rounded-md bg-cmneutral/5 px-4 py-6 lg:col-span-4 lg:mt-0 lg:p-6">
      <h2 className="text-lg font-semibold ">Order Summary</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-center justify-between border-t pt-4">
          <p className="text-base font-medium ">Total:</p>
          <Currency value={totalPrice as number} />
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <p className="text-base font-medium ">Number of products:</p>
          <p>{items?.length}</p>
        </div>
      </div>
      <MainButton
        onClick={onCheckout}
        text="Checkout"
        disabled={items?.length === 0}
      />
    </div>
  );
};

export default Summary;

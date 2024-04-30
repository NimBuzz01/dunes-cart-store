"use client";

import { IOrder, IOrderItem, IProduct } from "@/lib/types";
import Currency from "../Currency";
import useCart from "@/hooks/useCart";
import usePreviewModal from "@/hooks/useModal";
import MainButton from "../MainButton";
import QuantitySelect from "../QuantitySelect";
import { Separator } from "../ui/separator";
import { useState } from "react";

interface ProductInfoProps {
  data: IProduct;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  const cart = useCart();
  const previewModal = usePreviewModal();

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const order: IOrderItem = {
      product: data,
      quantity: quantity,
    };

    cart.addItem(order);
    previewModal.onClose();
  };

  return (
    <div>
      <p className="mb-1 text-3xl font-bold">{data?.name}</p>
      <p className="text-cmneutral">{data?.category.name}</p>
      <div className="mt-5 flex items-end justify-between">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <Separator className="my-5" />
      <p className="mb-5 text-cmneutral">{data?.description}</p>
      <div className="mb-5 flex flex-col gap-x-4">
        <p className="mb-1 font-semibold text-cmneutral">Details:</p>
        <ul className="ml-8 flex list-disc flex-col gap-1 text-cmneutral">
          {data?.details.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <QuantitySelect quantity={quantity} setQuantity={setQuantity} />
      <div className="mt-10 flex items-center gap-x-3">
        <MainButton
          onClick={handleAddToCart}
          hideIcon
          text="Add To Cart"
          variant="outline"
          className="w-56"
        />
        <MainButton
          onClick={handleAddToCart}
          href="/cart"
          text="Buy Now"
          className="w-56"
        />
      </div>
    </div>
  );
};

export default ProductInfo;

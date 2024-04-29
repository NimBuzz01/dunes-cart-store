"use client";

import { IProduct } from "@/lib/types";
import Currency from "../Currency";
import useCart from "@/hooks/useCart";
import usePreviewModal from "@/hooks/useModal";
import MainButton from "../MainButton";

interface ProductInfoProps {
  data: IProduct;
}

const ProductInfo = ({ data }: ProductInfoProps) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  return (
    <div>
      <p className="text-3xl font-bold">{data?.name}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="mb-4 flex flex-col gap-x-4">
        <h3 className="mb-1 font-semibold">Description:</h3>
        <p>{data?.description}</p>
      </div>
      <div className="flex flex-col gap-x-4">
        <h3 className="mb-1 font-semibold">Details:</h3>
        <ul className="ml-8 flex list-disc flex-col gap-1">
          {data?.details.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <MainButton
          onClick={() => {
            cart.addItem(data);
            previewModal.onClose();
          }}
          text="Add To Cart"
          className="w-56"
        />
      </div>
    </div>
  );
};

export default ProductInfo;

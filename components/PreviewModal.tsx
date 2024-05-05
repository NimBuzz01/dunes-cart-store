"use client";

import usePreviewModal from "@/hooks/useModal";
import Modal from "./Modal";
import Gallery from "./Gallery";
import ProductInfo from "@/components/product/ProductInfo";
import IconButton from "./IconButton";
import { X } from "lucide-react";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state?.data);
  if (!product) return null;

  return (
    <Modal onClose={previewModal.onClose} isOpen={previewModal.isOpen}>
      <div className="flex w-full flex-col gap-2 lg:flex-row">
        <div className="w-full">
          <Gallery images={product.images} />
        </div>

        <ProductInfo data={product} />
      </div>
      <IconButton
        onClick={previewModal.onClose}
        icon={<X size={20} />}
        className="absolute right-0 top-0 text-red-500"
      />
    </Modal>
  );
};

export default PreviewModal;

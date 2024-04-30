"use client";

import usePreviewModal from "@/hooks/useModal";
import Modal from "./Modal";
import Gallery from "./Gallery";
import ProductInfo from "@/components/product/ProductInfo";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state?.data);
  if (!product) return null;

  return (
    <Modal onClose={previewModal.onClose} isOpen={previewModal.isOpen}>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-full">
          <Gallery images={product.images} />
        </div>

        <ProductInfo data={product} />
      </div>
    </Modal>
  );
};

export default PreviewModal;

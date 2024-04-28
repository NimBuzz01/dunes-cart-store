"use client";
import { useState } from "react";
import { ISize } from "@/lib/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import IconButton from "./IconButton";
import Filters from "./Filters";
import { Button } from "./ui/button";
interface MobileFiltersProps {
  sizes: ISize[];
}

const MobileFilters = ({ sizes }: MobileFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        <span className="mr-2">Filters</span>
        <Plus size={20} />
      </Button>
      <Dialog
        onClose={onClose}
        open={isOpen}
        as="div"
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-6 pb-4 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={20} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filters data={sizes} name="sizes" valueKey="sizeId" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;

"use client";

import { ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-screen w-full max-w-3xl overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-cmbackground scrollbar-thumb-cmprimary">
        <div className="relative flex w-full items-center overflow-hidden">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

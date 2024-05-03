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
      <DialogContent className="max-h-screen max-w-3xl overflow-y-auto overflow-x-hidden">
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

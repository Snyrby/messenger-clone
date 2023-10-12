"use client";

import Modal from "@/components/Modal";
import Image from "next/image";

type ImageModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
};

const ImageModal = ({ isOpen, onClose, src }: ImageModalProps) => {
  if (!src) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
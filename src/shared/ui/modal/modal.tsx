'use client'
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import cls from "./modal.module.scss"; // Для кастомных стилей
import { MODAL_ROOT } from "@/shared/const";
import { getScrollbarWidth } from "@/shared/helpers";


type ModalProps = {
    onClose: () => void;
    children: React.ReactNode;
    baseHeight: number;
}

export const Modal = ({  onClose, baseHeight, children }: ModalProps) => {
  useEffect(() => {
    const width = getScrollbarWidth();
    document.documentElement.classList.add('disable-scroll-only');
    document.body.style.marginRight = width + 'px';
    document.body.classList.add('disable-scroll-only-body');
    return () => {
      document.body.classList.remove('disable-scroll-only-body');
      document.documentElement.classList.remove('disable-scroll-only');
      document.body.style.marginRight = '';
    };
  }, []);
  
  return ReactDOM.createPortal(
    <div className={cls.modalOverlay} onClick={onClose} >
      <div className={cls.modalContent} onClick={(e) => e.stopPropagation()} style={{height: `${baseHeight}px`}}>
        {children}
      </div>
    </div>,
    document.getElementById(MODAL_ROOT)! // Портал для модалки
  );
};

export default Modal;
import React, { useEffect, useRef } from 'react';
import { Button } from './Button';
import { Label } from './Label';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title: string;
  children: React.ReactNode;
  showCancelButton?: boolean;
  showCloseIcon?: boolean;
  width?: 'm' | 'l';
  closeOnOverlayClick?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  showCancelButton = true,
  showCloseIcon = true,
  width = 'm',
  closeOnOverlayClick = true,
  cancelLabel = '취소',
  confirmLabel = '확인',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const modalWidthStyle = {
    m: 'w-[560px]',
    l: 'w-[850px]',
  }[width];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      onClick={closeOnOverlayClick ? handleCancel : undefined}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        aria-hidden="true"
      ></div>
      <div
        ref={modalRef}
        className={`relative mx-auto my-6 bg-white rounded-lg shadow-lg ${modalWidthStyle}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col max-h-[90vh]">
          <div className="flex items-start justify-between p-5 border-b border-gray-10">
            <Label id="modal-title" size="l" weight="bold" color="gray-90">
              {title}
            </Label>
          </div>

          <div className="relative flex-auto p-6 overflow-y-auto">
            {children}
          </div>

          {(onConfirm || showCancelButton) && (
            <div className="flex items-center justify-end p-6 border-t border-gray-10 gap-4">
              {showCancelButton && (
                <Button
                  variant="tertiary"
                  onClick={handleCancel}
                  size="medium"
                  className="px-6"
                >
                  {cancelLabel}
                </Button>
              )}
              {onConfirm && (
                <Button
                  variant="primary"
                  onClick={onConfirm}
                  size="medium"
                  className="px-6"
                >
                  {confirmLabel}
                </Button>
              )}
            </div>
          )}

          {showCloseIcon && (
            <button
              className="absolute top-5 right-5 p-1 ml-auto text-gray-50 transition-colors duration-200 hover:text-gray-70 hover:bg-gray-20 rounded-2"
              onClick={handleCancel}
              aria-label="닫기"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
